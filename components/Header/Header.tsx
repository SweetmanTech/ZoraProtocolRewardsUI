import Image from "next/image"
import { FC } from "react"
import { useMediaQuery } from "usehooks-ts"
import Link from "next/link"
import MobileMenu from "../MobileMenu"
import DesktopMenu from "../DesktopMenu"
import { useTheme } from "../../providers/ThemeProvider"

interface HeaderProps {
  connect?: boolean
}
const Header: FC<HeaderProps> = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const { themeMode } = useTheme()

  return (
    <nav
      className="fixed top-0 z-50 w-screen p-2 text-black bg-transparent flex justify-center"
      id="header_nav_bar"
    >
      <div className="flex flex-row items-center justify-between w-[1280px] md:px-12 pt-3">
        <span className="relative items-center flex-shrink-0 w-20 mr-6 cursor-auto lg:md:mt-6 lg:mt-0 lg:md:w-36 lg:flex">
          <Link href="/">
            <div>
              <Image
                src={`${
                  themeMode === "light" ? "/CRE8ORS_LOGO.svg" : "/assets/Header/white_logo.svg"
                }`}
                alt="cre8ors logo"
                width={87}
                height={16}
                className="cursor-pointer"
              />
            </div>
          </Link>
        </span>

        <div className="flex-row items-center text-sm rounded lg:items-right lg:w-auto lg:md:text-sm font-quicksand">
          {isMobile && <MobileMenu />}
          {!isMobile && <DesktopMenu />}
        </div>
      </div>
    </nav>
  )
}

export default Header
