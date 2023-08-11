import { Contract } from "ethers"
import { useAccount } from "wagmi"
import _ from "lodash"
import publicMinterAbi from "../../lib/abi-public-minter.json"
import getCartPrice from "../../lib/getCartPrice"
import { useEthersSigner } from "../useEthersSigner"
import handleTxError from "../../lib/handleTxError"

const usePublicMint = () => {
  const signer = useEthersSigner({ chainId: process.env.NEXT_PUBLIC_TESTNET ? 5 : 1 })
  const { address } = useAccount()

  const mint = async (cart, onSuccess) => {
    try {
      const value = await getCartPrice(cart)
      const contract = new Contract(
        process.env.NEXT_PUBLIC_GENERAL_PUBLIC_MINTER_ADDRESS,
        publicMinterAbi,
        signer,
      )

      const quantity = _.sum(cart)
      const tx = await contract.mintPfp(address, cart, { value, gasLimit: 300293 * quantity })
      await tx.wait()
      await onSuccess()
    } catch (err) {
      handleTxError(err)
    }
  }

  return {
    mint,
  }
}
export default usePublicMint
