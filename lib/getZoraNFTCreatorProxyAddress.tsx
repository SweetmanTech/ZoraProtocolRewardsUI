const ETH_MAINNET = "0xF74B146ce44CC162b601deC3BE331784DB111DC1"
const ZORA_MAINNET = "0xA2c2A96A232113Dd4993E8b048EEbc3371AE8d85"
const GOERLI_TESTNET = "0xb9583D05Ba9ba8f7F14CCEe3Da10D2bc0A72f519"
const ZORA_TESTNET = "0xeB29A4e5b84fef428c072debA2444e93c080CE87"

const getZoraNFTCreatorProxyAddress = (chainId) => {
  if (chainId === 1) {
    return ETH_MAINNET
  }
  if (chainId === 777777) {
    return ZORA_MAINNET
  }
  if (chainId === 5) {
    return GOERLI_TESTNET
  }
  if (chainId === 999) {
    return ZORA_TESTNET
  }
  return ETH_MAINNET
}

export default getZoraNFTCreatorProxyAddress
