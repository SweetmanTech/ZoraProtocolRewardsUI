import { FC, ReactNode, useRef } from "react"
import { useMediaQuery, useWindowSize } from "usehooks-ts"
import { useScroll } from "framer-motion"
import useAutoPerfectCursor from "../../hooks/useAutoPerfectCursor"
import SectionContainer from "./SectionContainer"
import Character from "./Character"
import Brands from "./sections/Brands"

interface AutoPerfectAreaProps {
  children: ReactNode
  welcomeImageRef: any
  networkingImageRef: any
  profileImageRef: any
  openSoonImageRef: any
}

const AutoPerfectArea: FC<AutoPerfectAreaProps> = ({
  children,
  welcomeImageRef,
  networkingImageRef,
  profileImageRef,
  openSoonImageRef,
}) => {
  const cursorRef = useRef(null)
  const clipRef = useRef(null)
  const containerRef = useRef(null)

  const isMobile = useMediaQuery("(max-width: 768px)")
  const isIphone = useMediaQuery("(max-width: 390px)")

  const { width } = useWindowSize()

  const { scrollY } = useScroll({ container: containerRef })

  useAutoPerfectCursor({
    containerRef,
    cursorRef: !isMobile && cursorRef,
    clipRef,
    scrollY,
  })

  return (
    <div
      className="relative h-[100vh] overflow-y-scroll overflow-x-hidden z-[1]"
      ref={containerRef}
    >
      {!isMobile && (
        <div
          ref={cursorRef}
          className="hidden 
            rounded-full 
            w-[152px] h-[152px] z-[30] 
            absolute 
            border-[5px] border-[black] 
            dark:border-[white] 
            pointer-events-none p-1"
        />
      )}
      <div
        className="absolute 
          left-0 top-0 z-[20] 
          w-full
          pointer-events-none"
      >
        <SectionContainer
          style={{
            backgroundSize: !isMobile
              ? `${width}px ${Number((width / 1439) * 975).toFixed(2)}px`
              : "985px",
            height:
              // eslint-disable-next-line no-nested-ternary
              !isMobile ? `${Number((width / 1439) * 975)}px` : !isIphone ? "625px" : "420px",
          }}
          containerClassName="!bg-transparent"
        >
          <Character
            screenWidth={width}
            bgImgWidth={1439}
            bgImgHeight={975}
            offsetX={0.19}
            offsetY={0.14}
            characterWidth={318}
            characterHeight={670.72}
            characterRef={welcomeImageRef}
            characterUrl="/assets/Landing/creativity.svg"
            xDirection="right"
            yDirection="bottom"
            isMobile={isMobile}
          />
        </SectionContainer>
        <SectionContainer
          className="dark:bg-[center_bottom]
            bg-cover 
            h-[799px] md:h-[972px]
            mt-[110px] xs:mt-[170px] md:mt-[0px]"
          containerClassName="!bg-transparent"
        />
        <SectionContainer
          style={{
            backgroundSize: !isMobile
              ? `${width}px ${Number((width / 1439) * 975).toFixed(2)}px`
              : "985px",
            height: !isMobile ? `${Number((width / 1439) * 975)}px` : "625px",
            marginTop: isMobile ? `245px` : `0px`,
          }}
          containerClassName="!bg-transparent"
        >
          <Character
            screenWidth={width}
            bgImgWidth={1439}
            bgImgHeight={975}
            offsetX={0.18}
            offsetY={0.13}
            characterWidth={279.85}
            characterHeight={560.57}
            characterRef={networkingImageRef}
            characterUrl="/assets/Landing/networking.svg"
            xDirection="right"
            yDirection="bottom"
            isMobile={isMobile}
          />
          <Character
            screenWidth={width}
            bgImgWidth={1439}
            bgImgHeight={975}
            offsetX={0.05}
            offsetY={0.38}
            characterWidth={40}
            characterHeight={59}
            characterUrl="/assets/Landing/letter.svg"
            xDirection="right"
            yDirection="bottom"
            isMobile={isMobile}
          />
        </SectionContainer>

        <SectionContainer
          style={{
            backgroundSize: !isMobile
              ? `${width}px ${Number((width / 1439) * 973).toFixed(2)}px`
              : "985px",
            height: !isMobile ? `${Number((width / 1439) * 973)}px` : "665px",
            marginTop: isMobile ? `338px` : `0px`,
          }}
          containerClassName="!bg-transparent"
        >
          <Character
            screenWidth={width}
            bgImgWidth={1439}
            bgImgHeight={973}
            offsetX={0.1}
            offsetY={0.09}
            characterWidth={337}
            characterHeight={673}
            characterRef={profileImageRef}
            characterUrl="/assets/Landing/profile.svg"
            xDirection="left"
            yDirection="bottom"
            isMobile={isMobile}
          />
        </SectionContainer>

        <SectionContainer className="mt-[-1px]" containerClassName="!bg-transparent">
          <Brands className="opacity-0" />
        </SectionContainer>

        <SectionContainer
          style={{
            backgroundSize: !isMobile
              ? `${width}px ${Number((width / 1439) * 1079).toFixed(2)}px`
              : "910px",
            height: !isMobile ? `${Number((width / 1439) * 1079)}px` : "625px",
            marginTop: isMobile ? `-1px` : `0px`,
          }}
          containerClassName="!bg-transparent"
        >
          <Character
            screenWidth={width}
            bgImgWidth={1440}
            bgImgHeight={1079}
            offsetX={0.2}
            offsetY={0.04}
            characterWidth={478.97}
            characterHeight={931}
            characterRef={openSoonImageRef}
            characterUrl="/assets/Landing/opensoon.svg"
            xDirection="right"
            yDirection="bottom"
            isMobile={isMobile}
          />
          <Character
            screenWidth={width}
            bgImgWidth={1440}
            bgImgHeight={1079}
            offsetX={0.125}
            offsetY={0.2}
            characterWidth={73.91}
            characterHeight={105.35}
            characterRef={openSoonImageRef}
            characterUrl="/assets/Landing/painter.svg"
            xDirection="right"
            yDirection="bottom"
            isMobile={isMobile}
          />
        </SectionContainer>
      </div>
      <div
        ref={clipRef}
        className="absolute
          w-full
          z-[10] 
          top-0
          left-0
          opacity-0
          hidden
          md:!block
          h-[full]
          perfect_area
          z-[10]
          overflow-hidden"
      >
        {children}
      </div>
      <div className="relative z-[6]">{children}</div>
    </div>
  )
}

export default AutoPerfectArea
