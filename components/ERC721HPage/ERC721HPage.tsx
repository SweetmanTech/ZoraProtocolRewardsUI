import { useRouter } from "next/router"
import { useEffect } from "react"
import SeoHead from "../SeoHead"

const ERC721HPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("https://mirror.xyz/sweetman.eth/gKpHCW-6wviwbQn_zzG7vQDZ-TxoV9GwWFdXaT_QzC4")
  }, [router])

  return (
    <SeoHead
      title="ERC721H: A Standard for Programmable Hooks in NFTs"
      description="ERC721H is an implementation of IERC721 that introduces 'Hooks', bringing additional flexibility and control to creators and collections."
      image="/erc721h.png"
    />
  )
}

export default ERC721HPage
