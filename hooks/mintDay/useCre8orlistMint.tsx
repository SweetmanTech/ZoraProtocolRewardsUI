import { Contract } from "ethers"
import { useAccount } from "wagmi"
import cre8orlistMinterAbi from "../../lib/abi-cre8orlist-minter.json"
import getCartPrice from "../../lib/getCartPrice"
import { useEthersSigner } from "../useEthersSigner"
import createMerkleProof from "../../lib/merkle/createMerkleProof"
import handleTxError from "../../lib/handleTxError"

const useCre8orlistMint = () => {
  const signer = useEthersSigner()
  const { address } = useAccount()

  const mint = async (cart, onSuccess = async () => null) => {
    try {
      const { proof } = createMerkleProof(address)
      const value = await getCartPrice(cart)
      const contract = new Contract(
        process.env.NEXT_PUBLIC_ALLOWLIST_MINTER_ADDRESS,
        cre8orlistMinterAbi,
        signer,
      )

      const tx = await contract.mintPfp(address, cart, proof || [], { value })
      await tx.wait()
      await onSuccess?.()
    } catch (err) {
      handleTxError(err)
    }
  }

  return {
    mint,
  }
}
export default useCre8orlistMint
