import { useMediaQuery } from "usehooks-ts"
import BrandItem from "./brands/BrandItem"

interface ItemData {
  image: string
  mobile_image: string
  width: number
  height: number
  mobile_width: number
  mobile_height: number
  title: React.ReactNode
  text: React.ReactNode
  key: string
}

interface BrandsProps {
  className?: string
}

const Brands = ({ className }: BrandsProps) => {
  const isMobile = useMediaQuery("(max-width: 490px)")

  const Items = [
    {
      key: "brand-extend",
      image: "/assets/Landing/brands/extend.svg",
      mobile_image: "/assets/Landing/brands/mobile_extend.svg",
      width: 133,
      height: 155,
      mobile_width: 98,
      mobile_height: 114,
      title: (
        <>
          Extended <br />
          Trait Banners
        </>
      ),
      text: <>All Cre8ors come with an extended banner that fits within any social header.</>,
    },
    {
      key: "brand-lamp",
      image: "/assets/Landing/brands/lamp.svg",
      mobile_image: "/assets/Landing/brands/mobile_lamp.svg",
      width: 147,
      height: 141,
      mobile_width: 109,
      mobile_height: 104,
      title: (
        <>
          On-Chain <br /> Co-Creation
        </>
      ),
      text: (
        <>
          Collaborate, license, and <br /> get paid with our CR8 protocol and dApps.
        </>
      ),
    },
    {
      key: "brand-chain",
      image: "/assets/Landing/brands/chain.svg",
      mobile_image: "/assets/Landing/brands/mobile_chain.svg",
      width: 131,
      height: 150,
      mobile_width: 99,
      mobile_height: 113,
      title: (
        <>
          Stake in the <br /> Warehouse
        </>
      ),
      text: (
        <>
          Soft-staking to unlock AI training, collect badges,
          <br /> and earn rewards.
        </>
      ),
    },
    {
      key: "brand-networking",
      image: "/assets/Landing/brands/networking.svg",
      mobile_image: "/assets/Landing/brands/mobile_networking.svg",
      width: 167,
      height: 139,
      mobile_width: 117,
      mobile_height: 97,
      title: (
        <>
          Next-Level <br /> Networking
        </>
      ),
      text: (
        <>
          Connect with the <br /> community from the <br /> comfort of your phone.
        </>
      ),
    },
  ]

  return (
    <div className={`w-full ${className || ""}`}>
      <div
        className="grid grid-cols-1 md:grid-cols-4 
          pt-[400px] pb-[50px]
          gap-y-20 md:gap-y-0 
          md:pt-[15rem] md:pb-[15rem] w-full
          dark:bg-black md:!bg-transparent
          dark:shadow-[0_0_10px_10px_rgba(0,0,0)] shadow-none md:!shadow-none"
      >
        {Items.map((item: ItemData) => (
          <BrandItem
            imageUrl={!isMobile ? item.image : item.mobile_image}
            imageWidth={!isMobile ? item.width : item.mobile_width}
            imageHeight={!isMobile ? item.height : item.mobile_height}
            title={item.title}
            text={item.text}
            key={item.key}
          />
        ))}
      </div>
    </div>
  )
}

export default Brands
