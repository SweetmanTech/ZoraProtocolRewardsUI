import { useContext, createContext, ReactNode, FC, useState, useEffect, useMemo } from "react"
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi"
import { mainnet, polygon, goerli, polygonMumbai } from "@wagmi/core/chains"
import { toast } from "react-toastify"
import { getPassportIds, getAvailableFreeMints } from "../lib/collectionHolder"
import useMintCart from "../hooks/useMintCart"
import useSaleStatus from "../hooks/mintDay/useSaleStatus"
import { isWhitelisted } from "../lib/merkle/isWhitelisted"

interface mintProps {
  leftQuantityCount: number | null
  passportIds: any
  availablePassportIds: any
  hasFriendAndFamily: boolean | null
  hasPassport: boolean | null
  hasUnclaimedFreeMint: boolean | null
  freeMintCount: number | null
  cart: any[]
  loadingSaleStatus: boolean
  publicSaleActive: boolean | null
  presaleActive: boolean | null
  presaleStart: number
  publicSaleStart: number
  getFFAndPassportsInformation: () => Promise<void>
  checkNetwork: () => boolean
  refetchInformation: () => Promise<void>
  addToCart: (tier: number) => void
  removeFromCart: (tier: number) => void
  getCartTier: (tier: number) => number
  merkleRoot: string | null
  hasWhitelist: any
  isReloadingChainData: boolean
  isLoadingInitialize: boolean
}

interface Props {
  children: ReactNode
}

const MintContext = createContext<Partial<mintProps> | null>(null)

export const MintProvider: FC<Props> = ({ children }) => {
  const { address } = useAccount()
  const [hasFriendAndFamily, setHasFriendAndFamily] = useState<boolean | null>(null)
  const [hasPassport, setHasPassport] = useState<boolean | null>(null)
  const [hasUnclaimedFreeMint, setHasUnclaimedFreeMint] = useState<boolean | null>(null)
  const [passportIds, setPassportIds] = useState(null)
  const [leftQuantityCount, setLeftQuantityCount] = useState<number | null>(18)
  const [freeMintClaimedCount, setFreeMintClaimedCount] = useState<number | null>(null)
  const [availablePassportIds, setAvailablePassportIds] = useState([] as any)
  const { chain: activeChain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()
  const [merkleRoot, setMerkleRoot] = useState(null)
  const { cart, addToCart, removeFromCart, getCartTier } = useMintCart()
  const [hasWhitelist, setHasWhitelist] = useState<boolean | null>(null)
  const [isReloadingChainData, setIsReloadingChaindData] = useState(false)
  const [isLoadingInitialize, setIsLoadingInitialize] = useState(false)

  const saleStatus = useSaleStatus()

  const getInitialData = async () => {
    if (!address) return

    const passportsArray = await getPassportIds(address)
    const tokenIds = passportsArray?.map((passport: any) => passport?.id?.tokenId)
    if (tokenIds?.length > 0) setPassportIds(tokenIds)
    const results = await getAvailableFreeMints(tokenIds, address)
    setLeftQuantityCount(results?.quantityLeft)

    const status = isWhitelisted(address)

    setHasPassport(passportsArray?.length > 0)
    setFreeMintClaimedCount(results?.passports?.length)
    setHasUnclaimedFreeMint(results?.passports?.length > 0)
    setHasFriendAndFamily(results?.discount)
    setAvailablePassportIds(results?.passports)
    setMerkleRoot(results?.merkleRoot)
    setHasWhitelist(status)
  }

  const freeMintCount = useMemo(() => {
    if (hasFriendAndFamily === null || hasPassport === null || hasUnclaimedFreeMint === null)
      return null
    return (hasFriendAndFamily ? 1 : 0) + (freeMintClaimedCount || 0)
  }, [freeMintClaimedCount, hasFriendAndFamily, hasUnclaimedFreeMint, hasPassport])

  const checkNetwork = () => {
    if (activeChain?.id !== parseInt(process.env.NEXT_PUBLIC_CHAIN_ID, 10)) {
      switchNetwork(parseInt(process.env.NEXT_PUBLIC_CHAIN_ID, 10))
      const allChains = [mainnet, goerli, polygon, polygonMumbai]
      const myChain = allChains.find(
        (blockchain) => blockchain.id === parseInt(process.env.NEXT_PUBLIC_CHAIN_ID, 10),
      )
      toast.error(`Please connect to ${myChain.name} and try again`)

      return false
    }

    return true
  }

  const refetchInformation = async () => {
    setIsReloadingChaindData(true)
    await getInitialData()
    setIsReloadingChaindData(false)
  }

  const initializeInformation = async () => {
    setIsLoadingInitialize(true)
    await saleStatus.initializeStatus()
    setFreeMintClaimedCount(null)
    setHasUnclaimedFreeMint(null)
    setHasFriendAndFamily(null)
    setLeftQuantityCount(18)
    setAvailablePassportIds(null)
    setMerkleRoot(null)
    setHasWhitelist(null)
    await getInitialData()
    setIsLoadingInitialize(false)
  }

  useEffect(() => {
    if (!address) return
    const init = async () => {
      await initializeInformation()
    }

    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address])

  const provider = useMemo(
    () => ({
      ...saleStatus,
      isReloadingChainData,
      isLoadingInitialize,
      availablePassportIds,
      cart,
      freeMintCount,
      leftQuantityCount,
      passportIds,
      hasPassport,
      hasUnclaimedFreeMint,
      hasFriendAndFamily,
      checkNetwork,
      refetchInformation,
      addToCart,
      removeFromCart,
      getCartTier,
      merkleRoot,
      hasWhitelist,
    }),
    [
      saleStatus,
      isReloadingChainData,
      isLoadingInitialize,
      availablePassportIds,
      cart,
      freeMintCount,
      leftQuantityCount,
      passportIds,
      hasPassport,
      hasUnclaimedFreeMint,
      hasFriendAndFamily,
      checkNetwork,
      refetchInformation,
      addToCart,
      removeFromCart,
      getCartTier,
      merkleRoot,
      hasWhitelist,
    ],
  )

  return <MintContext.Provider value={provider}>{children}</MintContext.Provider>
}

export const useMintProvider = () => useContext(MintContext)
