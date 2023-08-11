import Image from "next/image"
import { ReactNode } from "react"
import Link from "next/link"
import { useTheme } from "../../providers/ThemeProvider"
import Newsletter from "./components/Newsletter"

interface LinkType {
  node: ReactNode
  link: string
}

interface ItemData {
  key: string
  list: LinkType[]
}

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const Items: ItemData[] = [
    {
      key: "link-pages",
      list: [
        {
          node: "Home",
          link: "/home",
        },
        {
          node: <span className="underline">FAQ</span>,
          link: "/faq",
        },
      ],
    },
    {
      key: "link-commnity",
      list: [
        {
          node: "Discord",
          link: "https://discord.com/invite/ZpZBHCrqHQ",
        },
        {
          node: "Twitter",
          link: "https://twitter.com/Cre8orsNFT",
        },
      ],
    },
    {
      key: "link-policy",
      list: [
        {
          node: "Terms of Service",
          link: "/terms",
        },
        {
          node: "Privacy Policy",
          link: "/privacy",
        },
      ],
    },
  ]

  const { themeMode } = useTheme()

  return (
    <div
      className={`dark:bg-[black] bg-transparent pt-[250px] md:pt-6 pb-6 w-full flex justify-center ${
        className || ""
      } footer`}
    >
      <div className="w-[90%] xl:w-[1280px]">
        <div className="justify-start items-start flex md:hidden pt-6 pr-6">
          <Image
            src={
              themeMode === "light"
                ? "/assets/Landing/footer/mobile_logo.svg"
                : "/assets/Landing/footer/mobile_white_logo.svg"
            }
            width={58}
            height={10}
            alt="not found logo img"
          />
        </div>
        <div className="pt-6 pb-6 lg:p-12 grid grid-cols-10 md:grid-cols-5">
          <div className="justify-start items-start hidden md:flex">
            <Image
              src={
                themeMode === "light"
                  ? "/assets/Landing/footer/logo.png"
                  : "/assets/Header/white_logo.svg"
              }
              width={103}
              height={18}
              alt="not found logo img"
            />
          </div>
          {Items.map((item: ItemData) => (
            <div
              key={item.key}
              className="font-quicksand flex justify-start text[black] dark:text-white col-span-2 md:col-span-1"
            >
              <div className="flex flex-col cursor-[pointer] text-[8px] md:text-[16px]">
                {item.list.map((row: LinkType) => (
                  <div key={row.link} className="pb-[10px]">
                    {row.link.search("https") >= 0 ? (
                      <a href={row.link} target="_blank" rel="noreferrer">
                        {row.node}
                      </a>
                    ) : (
                      <Link href={row.link}>{row.node}</Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <Newsletter />
        </div>
      </div>
    </div>
  )
}

export default Footer
