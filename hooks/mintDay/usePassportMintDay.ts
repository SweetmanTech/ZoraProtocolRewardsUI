import { useAccount } from "wagmi"
import { mintByCollectionHolder } from "../../lib/collectionHolder"
import { mintByFriendsAndFamily } from "../../lib/friendAndFamily"
import purchase from "../../lib/purchase"
import cre8orAbi from "../../lib/abi-cre8ors.json"
import { useMintProvider } from "../../providers/MintProvider"
import { useEthersSigner } from "../useEthersSigner"

const usePassportMintDay = () => {
  const { availablePassportIds } = useMintProvider()
  const signer = useEthersSigner()
  const { address } = useAccount()

  const freeMintFamilyAndFriend = async (onSuccess = async () => null) => {
    if (!signer) return null

    const response = await mintByFriendsAndFamily(signer, onSuccess)
    return response
  }

  const freeMintPassportHolder = async (onSuccess) => {
    if (!signer) return null

    const response = await mintByCollectionHolder(signer, availablePassportIds, address, onSuccess)
    return response
  }

  const mintCre8ors = async () => {
    if (!signer) return null

    const response = await purchase(process.env.NEXT_PUBLIC_CRE8ORS_ADDRESS, signer, cre8orAbi)
    return response
  }

  return {
    freeMintPassportHolder,
    freeMintFamilyAndFriend,
    mintCre8ors,
  }
}

export default usePassportMintDay
