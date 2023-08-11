import { useMeasure } from "react-use"
import { useRef } from "react"
import { useMediaQuery } from "usehooks-ts"
import Image from "next/image"
import Layout from "../Layout"
import SectionTitle from "../LandingPage/SectionTitle"
import SectionContent from "../LandingPage/SectionContent"
import { Button } from "../../shared/Button"
import Media from "../../shared/Media"
import Footer from "../Footer"
import { useTheme } from "../../providers/ThemeProvider"
import createTweet from "../../lib/createTweet"

const ClaimSuccessPage = () => {
  const [containerRef, { width }] = useMeasure()

  const isResponsive = useMediaQuery("(max-width: 1429px)")
  const isMobile = useMediaQuery("(max-width: 768px)")

  const { themeMode } = useTheme()

  const titleRef = useRef()
  const contentRef = useRef()
  const buttonRef = useRef()

  const text = `Welcome to the future of creativity. Just secured my @cre8orsnft passport...
    
Check to see if you're eligible here: https://magiceden.io/launchpad/eth/cre8ors_passports`

  return (
    <Layout type="base">
      <div
        className="relative overflow-y-auto min-h-[100vh] overflow-x-hidden z-[1] w-[100vw]"
        ref={containerRef}
      >
        {width && (
          <div
            className="relative z-[6] flex flex-col items-center pt-[80px]"
            style={{
              width: `${width}px`,
              height: isResponsive ? `auto` : `${(1048 / 1579) * width}px`,
              minHeight: isResponsive ? "100vh" : "",
              backgroundImage:
                // eslint-disable-next-line no-nested-ternary
                themeMode === "light"
                  ? "url('/assets/Claim/white_background.svg')"
                  : isMobile
                  ? "url('/assets/Claim/mobile_dark_background.svg')"
                  : "url('/assets/Claim/background.svg')",
              backgroundSize: isResponsive
                ? `cover`
                : `${width * 1.04}px ${(1048 / 1579) * width * 1.04}px`,
              backgroundPosition: isResponsive
                ? `center center`
                : `bottom 0px right -${themeMode === "light" ? 0 : width * 0.04}px`,
            }}
          >
            <div className="max-w-[1280px] flex-grow flex flex-col justify-end md:flex-row items-center pb-[10px] md:pb-[50px]">
              <div className="flex justify-center md:hidden mb-[10px]">
                {width && (
                  <Media
                    type="image"
                    link="/assets/Claim/Success/pass.svg"
                    containerClasses="rounded-[10px] overflow-hidden z-[1] w-[273px] h-[273px]"
                  />
                )}
              </div>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                  <div ref={titleRef}>
                    <SectionTitle
                      text="Congratulations! Passport Minted"
                      className="!mx-[0px] !mt-6 !mb-4 xs:!mx-0 sm:!m-6 w-[290px] samsungS8:w-[375px] 
                        !text-[30px] samsungS8:!text-[33px] lg:!text-[64px] lg:w-[550px] md:text-left 
                        md:leading-[106.3%]"
                    />
                  </div>
                  <div className="!px-0 sm:!pl-6" ref={contentRef}>
                    <SectionContent
                      className="w-[290px] samsungS8:w-[375px] 
                      md:w-[550px] !m-[8px] !mt-[30px] sm:!mt-[20px] md:!mt-[0px] md:text-left
                      !mx-0"
                    >
                      <div className="px-0 font-medium">
                        {isMobile ? (
                          <>
                            Welcome to Cre8ors, a next-gen media
                            <br />
                            brand powered by our curated collective
                            <br />
                            of web3 creators, IP co-creation protocols
                            <br />
                            and AI-enabled NFTs. You&apos;re one of 888
                            <br />
                            passport holders.
                          </>
                        ) : (
                          <>
                            Welcome to Cre8ors, a next-gen media brand powered by our
                            <br />
                            curated collective of web3 creators, IP co-creation protocols
                            <br />
                            and AI-enabled NFTs. You&apos;re one of 888 passport holders.
                          </>
                        )}
                      </div>
                    </SectionContent>
                  </div>
                  <div className="!px-0 sm:!pl-6 flex justify-center md:justify-start mt-[30px] md:mt-[40px]">
                    <div
                      ref={buttonRef}
                      className="flex flex-col md:flex-row items-center md:gap-[15px]"
                    >
                      <Button
                        id="follow_for_btn"
                        className="py-0 h-[49px] md:w-[291px] !px-0 hidden md:flex"
                        onClick={() => createTweet(text)}
                      >
                        <Image
                          src={
                            themeMode === "light"
                              ? "/assets/Claim/Success/twitter.svg"
                              : "/assets/Claim/Success/dark_twitter.svg"
                          }
                          width={21}
                          height={17}
                          alt="not found image"
                        />
                        Flex Passport
                      </Button>
                      <Button
                        id="view_passport_btn"
                        className="py-0 h-[49px] w-[291px] md:w-[284px] !px-0"
                        onClick={() =>
                          window.open("https://opensea.io/collection/cre8ors-passports", "_blank")
                        }
                      >
                        <Image
                          src={
                            themeMode === "light"
                              ? "/assets/Claim/Success/opensea.svg"
                              : "/assets/Claim/Success/dark_opensea.svg"
                          }
                          width={themeMode === "light" ? 33 : 34}
                          height={themeMode === "light" ? 33 : 34}
                          alt="not found  image"
                        />
                        View Passport
                      </Button>
                      <Button
                        id="follow_for_btn"
                        className="mt-[20px] md:mt-[40px] py-0 h-[49px] w-[291px] !px-0 md:hidden"
                        onClick={() =>
                          window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank")
                        }
                      >
                        <Image
                          src={
                            themeMode === "light"
                              ? "/assets/Claim/Success/twitter.svg"
                              : "/assets/Claim/Success/dark_twitter.svg"
                          }
                          width={21}
                          height={17}
                          alt="not found image"
                        />
                        Flex Passport
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="justify-center md:flex hidden md:translate-y-[-30px]">
                  {width && (
                    <Media
                      type="image"
                      link="/assets/Claim/Success/pass.svg"
                      containerClasses="rounded-[10px] overflow-hidden z-[1]"
                      containerStyle={{
                        width: isResponsive ? `${(width / 1440) * 465}px` : "465px",
                        height: isResponsive ? `${(width / 1440) * 464}px` : "464px",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
            <Footer className="!pt-0 !bg-transparent" />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default ClaimSuccessPage
