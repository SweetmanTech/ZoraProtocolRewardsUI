const ETH_MAINNET = "0xF74B146ce44CC162b601deC3BE331784DB111DC1"
const ZORA_MAINNET = "0xA2c2A96A232113Dd4993E8b048EEbc3371AE8d85"
const OP_MAINNET = "0x7d1a46c6e614A0091c39E102F2798C27c1fA8892"
const BASE_MAINNET = "0x58C3ccB2dcb9384E5AB9111CD1a5DEA916B0f33c"
const GOERLI_TESTNET = "0xb9583D05Ba9ba8f7F14CCEe3Da10D2bc0A72f519"
const ZORA_TESTNET = "0xeB29A4e5b84fef428c072debA2444e93c080CE87"
const OP_TESTNET = "0x3C1ebcF36Ca9DD9371c9aA99c274e4988906c6E3"
const BASE_TESTNET = "0x87cfd516c5ea86e50b950678CA970a8a28de27ac"

const getZoraNFTCreatorProxyAddress = (chainId) => {
  if (chainId === 1) {
    return ETH_MAINNET
  }
  if (chainId === 7777777) {
    return ZORA_MAINNET
  }
  if (chainId === 10) {
    return OP_MAINNET
  }
  if (chainId === 8453) {
    return BASE_MAINNET
  }
  if (chainId === 5) {
    return GOERLI_TESTNET
  }
  if (chainId === 999) {
    return ZORA_TESTNET
  }
  if (chainId === 420) {
    return OP_TESTNET
  }
  if (chainId === 84531) {
    return BASE_TESTNET
  }
  return ETH_MAINNET
}

export default getZoraNFTCreatorProxyAddress
