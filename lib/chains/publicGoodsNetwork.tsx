export const publicGoodsNetwork = {
  id: 424,
  name: "Public Goods Network",
  network: "PGN",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  rpcUrls: {
    public: { http: ["https://rpc.publicgoods.network"] },
    default: { http: ["https://rpc.publicgoods.network"] },
  },
  blockExplorers: {
    etherscan: { name: "PublicGoods", url: "https://explorer.publicgoods.network" },
    default: { name: "PublicGoods", url: "https://explorer.publicgoods.network" },
  },
}

export const publicGoodsNetworkSepolia = {
  id: 58_008,
  name: "Sepolia PGN",
  network: "PGN",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  rpcUrls: {
    public: { http: ["https://sepolia.publicgoods.network"] },
    default: { http: ["https://sepolia.publicgoods.network"] },
  },
  blockExplorers: {
    etherscan: { name: "Sepolia PGN", url: "https://explorer.sepolia.publicgoods.network" },
    default: { name: "Sepolia PGN", url: "https://explorer.sepolia.publicgoods.network" },
  },
}
