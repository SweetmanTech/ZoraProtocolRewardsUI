import { ethers } from "ethers"

const ETH_RPC = "https://rpc.flashbots.net"
const GOERLI_RPC = "https://ethereum-goerli-rpc.allthatnode.com"
const POLYGON_RPC = "https://polygon.llamarpc.com"
const MUMBAI_RPC = "https://rpc.ankr.com/polygon_mumbai"

const getDefaultProvider = (chainId: number) => {
  if (chainId === 1) {
    return ethers.getDefaultProvider(ETH_RPC)
  }

  if (chainId === 5) {
    return ethers.getDefaultProvider(GOERLI_RPC)
  }

  if (chainId === 137) {
    return ethers.getDefaultProvider(POLYGON_RPC)
  }

  if (chainId === 80001) {
    return ethers.getDefaultProvider(MUMBAI_RPC)
  }

  return ethers.getDefaultProvider(GOERLI_RPC)
}

export default getDefaultProvider
