/* eslint no-nested-ternary: "error" */
import axios from "axios"
import { toast } from "react-toastify"
import { useState, useRef } from "react"
import { useMediaQuery, useWindowSize } from "usehooks-ts"
import Brands from "./sections/Brands"
import AutoPerfectArea from "./AutoPerfectArea"
import LandingContent from "./LandingContent"
import Layout from "../Layout"
import Footer from "../Footer"
import SectionContainer from "./SectionContainer"
import MintLiveModal from "./MintLiveModal"

const LandingPage = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const welcomeImageRef = useRef(null)
  const networkingImageRef = useRef(null)
  const profileImageRef = useRef(null)
  const openSoonImageRef = useRef(null)

  const isMobile = useMediaQuery("(max-width: 758px)")
  const isIphone = useMediaQuery("(max-width: 390px)")

  const [openMintLiveModal, setOpenMintLiveModal] = useState(true)

  const { width } = useWindowSize()

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value)
  }

  const handleClick = async (e: any) => {
    e.preventDefault()
    await axios.post("/api/newsletter", { email })
    toast.success("Subscribed!")
    setEmail("")
    setIsSubscribed(true)
  }

  return (
    <Layout type="base">
      <AutoPerfectArea
        welcomeImageRef={welcomeImageRef}
        networkingImageRef={networkingImageRef}
        profileImageRef={profileImageRef}
        openSoonImageRef={openSoonImageRef}
      >
        <div className="relative overflow-hidden">
          <div className="absolute z-[1] left-0 top-0 w-full">
            <div className="relative">
              <div className="absolute left-0 top-0 dark:backdrop-blur-[5.5px] z-[10] w-full h-full z-[10]" />
              <div>
                <SectionContainer
                  className="dark:bg-[url('/assets/Landing/backgrounds/overlook.png')]
                    z-[5]"
                  style={{
                    backgroundSize:
                      // eslint-disable-next-line no-nested-ternary
                      !isMobile
                        ? `${width}px ${Number((width / 1439) * 975).toFixed(2)}px`
                        : !isIphone
                        ? "985px"
                        : "620px",
                    height:
                      // eslint-disable-next-line no-nested-ternary
                      !isMobile
                        ? `${Number((width / 1439) * 975)}px`
                        : !isIphone
                        ? "625px"
                        : "420px",
                  }}
                />
                <SectionContainer
                  className="dark:bg-[url('/assets/Landing/backgrounds/timessquare.png')] 
                    dark:bg-[center_bottom]
                    bg-cover 
                    h-[799px] md:h-[972px]
                    mt-[110px] xs:mt-[170px] md:mt-[0px]
                    z-[4]
                  "
                />
                <SectionContainer
                  className="dark:bg-[url('/assets/Landing/backgrounds/trainstation.png')] 
                    bg-[right_-50px_bottom] md:bg-[right_bottom]"
                  style={{
                    backgroundSize: !isMobile
                      ? `${width}px ${Number((width / 1439) * 975).toFixed(2)}px`
                      : "985px",
                    height: !isMobile ? `${Number((width / 1439) * 975)}px` : "625px",
                    marginTop: isMobile ? `245px` : `0px`,
                  }}
                />
                <SectionContainer
                  className="dark:bg-[url('/assets/Landing/backgrounds/replicate.png')]"
                  style={{
                    backgroundSize: !isMobile
                      ? `${width}px ${Number((width / 1439) * 973).toFixed(2)}px`
                      : "985px",
                    height: !isMobile ? `${Number((width / 1439) * 973)}px` : "665px",
                    marginTop: isMobile ? `380px` : `0px`,
                  }}
                />
                <SectionContainer className="md:dark:bg-[url('/assets/Landing/backgrounds/path.png')] mt-[-1px]">
                  <Brands className="opacity-0" />
                </SectionContainer>
                <SectionContainer
                  className="dark:bg-[url('/assets/Landing/backgrounds/factory.png')] 
                    bg-center"
                  style={{
                    backgroundSize: !isMobile
                      ? `${width}px ${Number((width / 1439) * 1079).toFixed(2)}px`
                      : "910px",
                    height: !isMobile ? `${Number((width / 1439) * 1079)}px` : "625px",
                    marginTop: isMobile ? `-1px` : `0px`,
                  }}
                />
              </div>
              <div
                className="absolute left-0 top-0 
                dark:hidden w-full h-[calc(100%+500px)]
                bg-[url('/assets/Layout/whitepaper.svg')] bg-cover bg-[center_center]"
              />
            </div>
          </div>
          <div className="relative z-[2]">
            <LandingContent
              email={email}
              onChangeEmail={onChangeEmail}
              handleClick={handleClick}
              isSubscribed={isSubscribed}
              welcomImageRef={welcomeImageRef}
              networkingImageRef={networkingImageRef}
              profileImageRef={profileImageRef}
              openSoonImageRef={openSoonImageRef}
            />
            <Footer />
          </div>
        </div>
      </AutoPerfectArea>
      <MintLiveModal
        isModalVisible={openMintLiveModal}
        toggleIsVisible={() => setOpenMintLiveModal(!openMintLiveModal)}
      />
    </Layout>
  )
}

export default LandingPage
