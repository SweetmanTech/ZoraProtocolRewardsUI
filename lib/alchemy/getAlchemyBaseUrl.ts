const ETH = "https://eth-mainnet.g.alchemy.com/"
const GOERLI = "https://eth-goerli.g.alchemy.com/"

const getAlchemyBaseUrl = (chainId: number) => {
  switch (chainId) {
    case 1:
      return ETH
    case 5:
      return GOERLI
    default:
      return ETH
  }
}

export default getAlchemyBaseUrl
