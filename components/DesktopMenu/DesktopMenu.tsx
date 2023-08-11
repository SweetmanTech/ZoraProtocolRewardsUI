import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useAccount } from "wagmi"
import CustomConnectWallet from "../CustomConnectWallet"
import DiscordIcon from "../DiscordIcon"
import { ToggleButton } from "../../shared/Button"
import { useTheme } from "../../providers/ThemeProvider"
import WalletConnectButton from "../WalletConnectButton"

const DesktopMenu = () => {
  const { onChangeThemeConfig, themeMode } = useTheme()

  const router = useRouter()
  const { isConnected, address } = useAccount()

  const isHidden = router.pathname.includes("/mint") || router.pathname.includes("/staking")

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const onToggle = () => {
    onChangeThemeConfig()
  }

  return (
    <div className="flex flex-row text-sm uppercase font-quicksand gap-x-6">
      {!isHidden && (
        <>
          <div className="flex items-center pr-4 gap-x-8">
            <Link href="/mint" target="_blank" rel="noreferrer">
              <div className="font-bold cursor-pointer dark:text-white text-black">Mint</div>
            </Link>
            <Link href="/status" target="_blank" rel="noreferrer">
              <div className="font-bold cursor-pointer dark:text-white text-black">
                Allowlist Status
              </div>
            </Link>
          </div>
          <div className="flex items-center font-bold font-quicksand">
            <button
              type="button"
              className="px-2 text-[#9C9C9C] cursor-pointer text-[15px] font-quicksand uppercase"
              onClick={() => onChangeThemeConfig("light")}
            >
              light
            </button>
            <ToggleButton onClick={onToggle} value={themeMode === "dark"} id="light_dark_switch" />
            <button
              type="button"
              className="px-2 text-[#9C9C9C] cursor-pointer text-[15px] font-quicksand uppercase"
              onClick={() => onChangeThemeConfig("dark")}
            >
              dark
            </button>
          </div>
        </>
      )}
      <div className="relative">
        <button
          type="button"
          className={`font-bold rounded-lg bg-[black] dark:bg-white dark:text-[black] text-white uppercase text-sm w-[134px] h-[40px] ${
            isMenuOpen && "shadow-md"
          } ${!isMenuOpen && "!bg-transparent dark:!text-[white] !text-[black]"}`}
          onClick={toggleMenu}
        >
          Explore
          {!isMenuOpen && <ChevronDownIcon className="inline w-4 h-5 align-middle" />}
          {isMenuOpen && <ChevronUpIcon className="inline w-4 h-5 align-middle" />}
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 top-[45px] z-200 inline-flex flex-col items-start uppercase justify-between space-y-4 p-4 bg-[black] dark:bg-white shadow-md rounded-lg  font-quicksand text-sm">
            <a href="https://everythingcorp.cre8ors.com/quiz" target="_blank" rel="noreferrer">
              <div className="cursor-pointer text-white dark:text-[black]">Allowlist</div>
            </a>
            <Link href="/status" target="_blank" rel="noreferrer">
              <div className="cursor-pointer text-white dark:text-[black]">Status</div>
            </Link>
            <Link href="/manifesto" target="_blank" rel="noreferrer">
              <div className="cursor-pointer text-white dark:text-[black]">Manifesto</div>
            </Link>
            <Link href="/roadmap" target="_blank" rel="noreferrer">
              <div className="cursor-pointer text-white dark:text-[black]">Roadmap</div>
            </Link>
            <Link
              href="https://mirror.xyz/sweetman.eth/gKpHCW-6wviwbQn_zzG7vQDZ-TxoV9GwWFdXaT_QzC4"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cursor-pointer text-white dark:text-[black]">ERC721H</div>
            </Link>
            <Link href="/leaderboard" target="_blank" rel="noreferrer">
              <div className="cursor-pointer text-white dark:text-[black]">Leaderboard</div>
            </Link>
            <a
              href="https://opensea.io/collection/cre8ors-passports"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cursor-pointer text-white dark:text-[black]">Passports</div>
            </a>
            <Link href="/checkpassport" target="_blank" rel="noreferrer">
              <div className="cursor-pointer text-white dark:text-[black]">Check</div>
            </Link>
            <a href="https://opensea.io/collection/cre8ors-relics" target="_blank" rel="noreferrer">
              <div className="cursor-pointer text-white dark:text-[black]">Relics</div>
            </a>
            <Link href="/claim" target="_blank" rel="noreferrer">
              <div className="cursor-pointer text-white dark:text-[black]">Claim</div>
            </Link>
            <a href="https://cre8ors.beehiiv.com/" target="_blank" rel="noreferrer">
              <div className="cursor-pointer text-white dark:text-[black]">Blog</div>
            </a>
            <Link href="/teams" target="_blank" rel="noreferrer">
              <div className="cursor-pointer text-white dark:text-[black]">Team</div>
            </Link>
            <Link href="/faq" target="_blank" rel="noreferrer">
              <div className="cursor-pointer text-white dark:text-[black]">FAQ</div>
            </Link>
            {isConnected ? (
              <Link href={`/profile/${address}`} target="_blank" rel="noreferrer">
                <div className="cursor-pointer text-white dark:text-[black]">Profile</div>
              </Link>
            ) : (
              <WalletConnectButton>
                <div className="cursor-pointer text-white dark:text-[black] uppercase">Connect</div>
              </WalletConnectButton>
            )}
            <div className="text-gray-400 cursor-not-allowed">Warehouse</div>
          </div>
        )}
      </div>
      <DiscordIcon />
      <a href="https://twitter.com/Cre8orsNFT" target="_blank" rel="noreferrer">
        <div className="pt-2 pl-10 cursor-pointer ">
          <Image
            src={`${
              themeMode === "light" ? "/Icons/TWITTER.svg" : "/assets/Header/white_twitter.png"
            }`}
            width={24}
            height={19}
            alt="twitter"
          />
        </div>
      </a>
      <div className="px-4 pt-2">
        <CustomConnectWallet />
      </div>
    </div>
  )
}

export default DesktopMenu
