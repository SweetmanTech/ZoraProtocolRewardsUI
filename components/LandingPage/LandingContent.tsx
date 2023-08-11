import { useMediaQuery, useWindowSize } from "usehooks-ts"
import WelcomeToCre8ors from "./sections/WelcomeToCre8ors"
import InviteForCreator from "./sections/InviteForCreator"
import Networking from "./sections/Networking"
import Cre8orsWay from "./sections/Cre8orsWay"
import Brands from "./sections/Brands"
import OpenSoon from "./sections/OpenSoon"
import { useTheme } from "../../providers/ThemeProvider"
import SectionContainer from "./SectionContainer"

interface LandingContentProps {
  onChangeEmail: (e: any) => void
  email: string
  handleClick: (e: any) => void
  isSubscribed: boolean
  welcomImageRef: any
  networkingImageRef: any
  profileImageRef: any
  openSoonImageRef: any
}

const LandingContent = ({
  email,
  onChangeEmail,
  handleClick,
  isSubscribed,

  welcomImageRef,
  networkingImageRef,
  profileImageRef,
  openSoonImageRef,
}: LandingContentProps) => {
  const { themeMode } = useTheme()

  const { width } = useWindowSize()
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isIphone = useMediaQuery("(max-width: 390px)")

  return (
    <>
      <SectionContainer
        className="z-[5]"
        backgroundImage="
          bg-[url('/assets/Landing/backgrounds/overlook.png')] 
          dark:bg-[url('/assets/Landing/backgrounds/color_overlook.png')]"
        backgroundPosition="bg-[right_-50px_bottom] md:bg-[right_bottom]"
        style={{
          backgroundSize: !isMobile
            ? `${width}px ${Number((width / 1439) * 975).toFixed(2)}px`
            : "985px",
          height:
            // eslint-disable-next-line no-nested-ternary
            !isMobile ? `${Number((width / 1439) * 975)}px` : !isIphone ? "625px" : "420px",
        }}
      >
        <WelcomeToCre8ors
          value={email}
          onChange={onChangeEmail}
          onSubscribe={handleClick}
          isSubscribed={isSubscribed}
          // eslint-disable-next-line no-nested-ternary
          contentHeight={!isMobile ? Number((width / 1439) * 975) : !isIphone ? 310 : 290}
          characterHeight={!isIphone ? 602 : 390}
          desktopImageRef={welcomImageRef}
        />
      </SectionContainer>

      <SectionContainer
        className="dark:bg-[center_bottom]
          bg-cover 
          h-[799px] md:h-[972px] 
          mt-[110px] xs:mt-[170px] md:mt-[0px]
          z-[4]"
        containerClassName={themeMode === "light" ? `` : "fade_bg"}
        backgroundImage="
          bg-[url('/assets/Landing/backgrounds/timessquare.png')]
          dark:bg-[url('/assets/Landing/backgrounds/color_timessquare.png')]"
        backgroundPosition="bg-[center_bottom] bg-cover"
      >
        <InviteForCreator mobileHeight={799} deskTopHeight={972} />
      </SectionContainer>

      <div className="relative z-[3]">
        <SectionContainer
          className="bg-[right_-50px_bottom] md:bg-[right_bottom]"
          containerClassName={themeMode === "light" ? `` : "fade_bg"}
          backgroundImage="
            bg-[url('/assets/Landing/backgrounds/trainstation.png')]
            dark:bg-[url('/assets/Landing/backgrounds/color_trainstation.png')]"
          backgroundPosition="bg-[right_-50px_bottom] md:bg-[right_bottom]"
          style={{
            backgroundSize: !isMobile
              ? `${width}px ${Number((width / 1439) * 975).toFixed(2)}px`
              : "985px",
            height: !isMobile ? `${Number((width / 1439) * 975)}px` : "625px",
            marginTop: isMobile ? `245px` : `0px`,
          }}
        >
          <Networking
            contentHeight={!isMobile ? Number((width / 1439) * 973) : 380}
            characterHeight={625}
            desktopImageRef={networkingImageRef}
          />
        </SectionContainer>
      </div>

      <div className="relative z-[2]">
        <SectionContainer
          containerClassName={themeMode === "light" ? `` : "fade_bg"}
          backgroundImage="
            bg-[url('/assets/Landing/backgrounds/replicate.png')]
            dark:bg-[url('/assets/Landing/backgrounds/color_replicate.svg')]"
          style={{
            backgroundSize: !isMobile
              ? `${width}px ${Number((width / 1439) * 973).toFixed(2)}px`
              : "985px",
            height: !isMobile ? `${Number((width / 1439) * 973)}px` : "665px",
            marginTop: isMobile ? `380px` : `0px`,
          }}
        >
          <Cre8orsWay
            contentHeight={!isMobile ? Number((width / 1439) * 973) : 160}
            characterHeight={665}
            desktopImageRef={profileImageRef}
          />
        </SectionContainer>
      </div>

      <div className="relative z-[1]">
        <SectionContainer
          className="mt-[-1px]"
          containerClassName={themeMode === "light" ? `` : "fade_bg"}
          backgroundImage="
            bg-[url('/assets/Landing/backgrounds/path.png')]
            dark:bg-[url('/assets/Landing/backgrounds/color_path.png')]"
        >
          <Brands />
        </SectionContainer>
      </div>

      <div className="relative z-[0]">
        <SectionContainer
          className="bg-center"
          containerClassName={themeMode === "light" ? `` : "fade_bg"}
          backgroundImage="
            bg-[url('/assets/Landing/backgrounds/factory.png')]
            dark:bg-[url('/assets/Landing/backgrounds/color_factory.png')]"
          style={{
            backgroundSize: !isMobile
              ? `${width}px ${Number((width / 1439) * 1079).toFixed(2)}px`
              : "910px",
            height: !isMobile ? `${Number((width / 1439) * 1079)}px` : "625px",
            marginTop: isMobile ? `-1px` : `0px`,
          }}
        >
          <OpenSoon
            contentHeight={!isMobile ? Number((width / 1440) * 1079) : 120}
            characterHeight={625}
            desktopImageRef={openSoonImageRef}
          />
        </SectionContainer>
      </div>
    </>
  )
}

export default LandingContent
