import { useMediaQuery, useReadLocalStorage } from "usehooks-ts"
import { FC, useRef } from "react"
import Image from "next/image"
import SectionTitle from "../SectionTitle"
import SectionContent from "../SectionContent"
import FadeInImage from "../FadeInImage"
import useGradualFadeEffect from "../../../hooks/useGradualFade"
import useFadeIntersection from "../../../hooks/useFadeIntersection"

interface ImageData {
  key: string
  image: string
  white_image: string
  width: number
  height: number
}

interface Props {
  contentHeight: number
  characterHeight: number
  desktopImageRef: any
}

const Networking: FC<Props> = ({ contentHeight, characterHeight, desktopImageRef }) => {
  const isMobile = useMediaQuery("(max-width: 799px)")

  const imagesList: Array<ImageData> = [
    {
      key: "columbia-networking",
      image: "/assets/Landing/networking/columbia.svg",
      white_image: "/assets/Landing/networking/columbia_white.svg",
      width: 51,
      height: 51,
    },
    {
      key: "fx-networking",
      image: "/assets/Landing/networking/fx.svg",
      white_image: "/assets/Landing/networking/fx_white.svg",
      width: 60,
      height: 62,
    },
    {
      key: "zynga-networking",
      image: "/assets/Landing/networking/zynga.svg",
      white_image: "/assets/Landing/networking/zynga_white.svg",
      width: 77,
      height: 78,
    },
    {
      key: "world-networking",
      image: "/assets/Landing/networking/world.svg",
      white_image: "/assets/Landing/networking/world_white.svg",
      width: 54,
      height: 54,
    },
    {
      key: "warner-networking",
      image: "/assets/Landing/networking/warner.svg",
      white_image: "/assets/Landing/networking/warner_white.svg",
      width: 77,
      height: 28,
    },
    {
      key: "espn-networking",
      image: "/assets/Landing/networking/espn.svg",
      white_image: "/assets/Landing/networking/espn_white.svg",
      width: 67,
      height: 41,
    },
    {
      key: "league-networking",
      image: "/assets/Landing/networking/league.svg",
      white_image: "/assets/Landing/networking/league_white.svg",
      width: 61,
      height: 32,
    },
    {
      key: "atlantic-networking",
      image: "/assets/Landing/networking/atlantic.svg",
      white_image: "/assets/Landing/networking/atlantic_white.svg",
      width: 48,
      height: 48,
    },
  ]

  const mobileImagesList: Array<ImageData> = [
    {
      key: "fx-networking",
      image: "/assets/Landing/networking/mobile_fx.svg",
      white_image: "/assets/Landing/networking/mobile_white_fx.svg",
      width: 35,
      height: 22,
    },
    {
      key: "zynga-networking",
      image: "/assets/Landing/networking/mobile_zynga.svg",
      white_image: "/assets/Landing/networking/mobile_white_zynga.svg",
      width: 51,
      height: 51,
    },
    {
      key: "warner-networking",
      image: "/assets/Landing/networking/mobile_warner.svg",
      white_image: "/assets/Landing/networking/mobile_white_warner.svg",
      width: 51,
      height: 18,
    },
    {
      key: "league-networking",
      image: "/assets/Landing/networking/mobile_league.svg",
      white_image: "/assets/Landing/networking/mobile_white_league.svg",
      width: 41,
      height: 41.8,
    },
    {
      key: "atlantic-networking",
      image: "/assets/Landing/networking/mobile_atlantic.svg",
      white_image: "/assets/Landing/networking/mobile_white_atlantic.svg",
      width: 32,
      height: 32,
    },
    {
      key: "world-networking",
      image: "/assets/Landing/networking/mobile_world.svg",
      white_image: "/assets/Landing/networking/mobile_white_world.svg",
      width: 36,
      height: 36,
    },
    {
      key: "columbia-networking",
      image: "/assets/Landing/networking/mobile_columbia.svg",
      white_image: "/assets/Landing/networking/mobile_white_columbia.svg",
      width: 34,
      height: 34,
    },
    {
      key: "espn-networking",
      image: "/assets/Landing/networking/mobile_espn.svg",
      white_image: "/assets/Landing/networking/mobile_white_espn.svg",
      width: 44,
      height: 26,
    },
    {
      key: "pga-networking",
      image: "/assets/Landing/networking/mobile_pga.svg",
      white_image: "/assets/Landing/networking/mobile_white_pga.svg",
      width: 35,
      height: 35,
    },
  ]

  const isScrollUp = useReadLocalStorage<boolean>("isScrollUp")

  const titleRef = useRef()
  const mobileImageRef = useRef()
  const contentRef = useRef()
  const logoRef = useRef()

  useFadeIntersection({
    ref: logoRef,
  })

  useGradualFadeEffect({
    elements: [
      {
        domObject: logoRef.current,
        type: "self",
      },
      {
        domObject: contentRef.current,
        type: "child",
      },
      {
        domObject: titleRef.current,
        type: "child",
      },
      {
        domObject: !isMobile ? desktopImageRef.current : mobileImageRef.current,
        type: "child",
      },
    ],
    isScrollUp,
  })

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-0 md:gap-y-4">
      <div
        className="md:hidden relative
          md:col-span-2"
        style={{
          height: `${characterHeight}px`,
        }}
        ref={mobileImageRef}
      >
        <div
          className="absolute"
          style={{
            right: `${645 * 0.18}px`,
            bottom: `${625 * 0.1}px`,
          }}
        >
          <FadeInImage url="/assets/Landing/networking.svg" width={226.65} height={476.86} />
        </div>
      </div>

      <div
        className="col-span-1
          md:col-span-2
          flex flex-col justify-end items-center md:items-start justify-start md:justify-center
          !bg-transparent dark:!bg-[black] md:dark:!bg-[transparent]
          shadow-none dark:shadow-[0_0_10px_10px_rgba(0,0,0)] md:!shadow-none
          mt-[-1px] md:mt-0"
        style={{
          height: `${contentHeight}px`,
        }}
      >
        <div ref={titleRef}>
          <SectionTitle
            text="Networking for Tastemakers and Trendsetters"
            className="md:text-left w-[336px] md:w-[550px]"
          />
        </div>
        <div ref={contentRef}>
          <SectionContent className="w-[326px] md:w-[600px] m-0">
            {isMobile ? (
              <>
                Cre8ors is built to help the world’s top
                <br /> creators connect with world-class brands. <br /> Some of our partnerships
                include:
              </>
            ) : (
              <>
                Cre8ors is built to help the world’s top creators connect <br /> with world-class
                brands. Some of our partnerships include:
              </>
            )}
          </SectionContent>
        </div>

        <div
          className="grid grid-cols-3 gap-4 md:grid-cols-4 
            md:gap-y-2 gap-y-6 
            mt-[20px]  md:mt-0
            w-[300px] md:w-[520px]
            md:pl-[10px]
            appear"
          ref={logoRef}
        >
          {[]
            .concat(isMobile ? [...mobileImagesList] : [...imagesList])
            .map((imageData: ImageData) => (
              <div key={imageData.key} className="flex justify-center items-center">
                <div className="dark dark:hidden dark_logo">
                  <Image
                    src={imageData.image}
                    width={imageData.width}
                    height={imageData.height}
                    alt="not found image"
                  />
                </div>
                <div className="hidden dark:block light_logo">
                  <Image
                    src={imageData.white_image}
                    width={imageData.width}
                    height={imageData.height}
                    alt="not found image"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Networking
