import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useAccount } from "wagmi"
import CustomConnectWallet from "../CustomConnectWallet"
import DiscordIcon from "../DiscordIcon"
import { useTheme } from "../../providers/ThemeProvider"
import { ToggleButton } from "../../shared/Button"

const MenuList = ({ toggleMenu }) => {
  const { onChangeThemeConfig, themeMode } = useTheme()

  const router = useRouter()
  const isHidden = router.pathname.includes("/mint") || router.pathname.includes("/staking")

  const [isDarkMode, setIsDarkMode] = useState(false)
  const { isConnected, address } = useAccount()

  const onToggle = () => {
    setIsDarkMode(!isDarkMode)
    onChangeThemeConfig()
  }

  useEffect(() => {
    setIsDarkMode(themeMode !== "light")
  }, [themeMode])

  return (
    <div
      className="fixed right-2 top-2 z-200 inline-flex flex-col items-left uppercase justify-between space-y-[9.5px] p-4 
      dark:bg-white bg-[black] to-90% rounded-lg md:text-lg w-[200px] h-[530px] overflow-y-scroll"
    >
      <div className="dark:bg-[black] bg-white absolute top-0 right-0 w-6 h-6 m-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke={`${isDarkMode ? "white" : "black"}`}
          onClick={toggleMenu}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <div className="pt-6">
        <CustomConnectWallet />
      </div>
      <Link href="/mint" target="_blank" rel="noreferrer">
        <div className="ml-4 cursor-pointer text-white dark:text-[black]">Mint</div>
      </Link>
      <div className="font-bold dark:text-[black] text-white">Explore</div>
      <a href="https://everythingcorp.cre8ors.com/quiz" target="_blank" rel="noreferrer">
        <div className="ml-4 dark:text-[black] text-white">Allowlist</div>
      </a>
      <Link href="/status" target="_blank" rel="noreferrer">
        <div className="ml-4 cursor-pointer text-white dark:text-[black]">Status</div>
      </Link>
      <Link href="/roadmap" target="_blank" rel="noreferrer">
        <div className="ml-4 dark:text-[black] text-white">Roadmap</div>
      </Link>
      <Link
        href="https://mirror.xyz/sweetman.eth/gKpHCW-6wviwbQn_zzG7vQDZ-TxoV9GwWFdXaT_QzC4"
        target="_blank"
        rel="noreferrer"
      >
        <div className="ml-4 dark:text-[black] text-white">ERC721H</div>
      </Link>
      <Link href="/manifesto" target="_blank" rel="noreferrer">
        <div className="ml-4 dark:text-[black] text-white">Manifesto</div>
      </Link>
      <Link href="/leaderboard" target="_blank" rel="noreferrer">
        <div className="ml-4 dark:text-[black] text-white">Leaderboard</div>
      </Link>
      <a href="https://opensea.io/collection/cre8ors-passports" target="_blank" rel="noreferrer">
        <div className="ml-4 dark:text-[black] text-white">Passports</div>
      </a>
      <Link href="/checkpassport" target="_blank" rel="noreferrer">
        <div className="ml-4 dark:text-[black] text-white">CHECK</div>
      </Link>
      <a href="https://opensea.io/collection/cre8ors-relics" target="_blank" rel="noreferrer">
        <div className="ml-4 dark:text-[black] text-white">Relics</div>
      </a>
      <Link href="/claim" target="_blank" rel="noreferrer">
        <div className="ml-4 dark:text-[black] text-white">Claim</div>
      </Link>
      <Link href="/teams" target="_blank" rel="noreferrer">
        <div className="ml-4 dark:text-[black] text-white">Team</div>
      </Link>
      <a href="https://cre8ors.beehiiv.com/" target="_blank" rel="noreferrer">
        <div className="ml-4 dark:text-[black] text-white">Blog</div>
      </a>
      <Link href="/faq" target="_blank" rel="noreferrer">
        <div className="ml-4 dark:text-[black] text-white">FAQ</div>
      </Link>
      {isConnected ? (
        <Link href={`/profile/${address}`} target="_blank" rel="noreferrer">
          <div className="ml-4 dark:text-[black] text-white">Profile</div>
        </Link>
      ) : (
        <div className="ml-4 text-gray-400 cursor-not-allowed">Profiles</div>
      )}
      <div className="ml-4 text-gray-400 cursor-not-allowed">Warehouse</div>
      <div className="flex flex-row items-center justify-around">
        <DiscordIcon />
        <a href="https://twitter.com/Cre8orsNFT" target="_blank" rel="noreferrer">
          <div className="pt-2 cursor-pointer ">
            <Image
              src={`${
                themeMode === "dark"
                  ? "/assets/Header/twitter.png"
                  : "/assets/Header/white_twitter.png"
              }`}
              width={24}
              height={19}
              alt="discord"
            />
          </div>
        </a>
        {!isHidden && (
          <div className="flex items-center font-quicksand font-bold border-[1px] rounded-[20px] border-[gray]">
            <ToggleButton onClick={onToggle} value={isDarkMode} id="light_dark_switch" />
          </div>
        )}
      </div>
    </div>
  )
}

export default MenuList
