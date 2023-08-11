import axios from "axios"
import getAlchemyBaseUrl from "./getAlchemyBaseUrl"

const getNFTs = async (address: string, contractAddress: string, chainId: number = 5) => {
  const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
  const optionalContractParam = contractAddress ? `&contractAddresses%5B%5D=${contractAddress}` : ""
  const { data } = await axios.get(
    `${getAlchemyBaseUrl(
      chainId,
    )}nft/v2/${alchemyKey}/getNFTs?owner=${address}${optionalContractParam}`,
  )
  return data
}

export default getNFTs
