import { useMeasure } from "react-use"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useMediaQuery, useReadLocalStorage } from "usehooks-ts"
import { useAccount } from "wagmi"
import { ILogObj, Logger } from "tslog"
import { useRouter } from "next/router"
import Layout from "../Layout"
import SectionTitle from "../LandingPage/SectionTitle"
import SectionContent from "../LandingPage/SectionContent"
import { Button } from "../../shared/Button"
import Media from "../../shared/Media"
import Footer from "../Footer"
import { useTheme } from "../../providers/ThemeProvider"
import useGradualFadeEffect from "../../hooks/useGradualFade"
import Popover from "../../shared/Popover"
import ConnectWallet from "./ConnetWallet"
import Mint from "./Mint"
import { getLatestClaimTicket } from "../../lib/alchemy/getClaimTickets"
import NoTicket from "./NoTicket"
import claimTicketAbi from "../../lib/abi-cre8ors.json"
import claimExchangeAbi from "../../lib/abi-passport-adapter.json"
import { approveClaimTicket, exchangeClaimTicket, getIsApproved } from "../../lib/exchange"
import { ModalStatus } from "./contants"
import { useEthersSigner } from "../../hooks/useEthersSigner"

const log: Logger<ILogObj> = new Logger({ hideLogPositionForProduction: true })
const ClaimPage = () => {
  const router = useRouter()
  const { address } = useAccount()
  const signer = useEthersSigner()
  const [containerRef, { width }] = useMeasure()
  const [latestClaimTicketId, setLatestClaimTicketId] = useState<number | string>(null)
  const [ticketCount, setTicketCount] = useState(0)
  const isResponsive = useMediaQuery("(max-width: 1429px)")
  const isScrollUp = useReadLocalStorage<boolean>("isScrollUp")
  const isMobile = useMediaQuery("(max-width: 768px)")
  const { themeMode } = useTheme()
  const titleRef = useRef()
  const contentRef = useRef()
  const buttonRef = useRef()

  const [modalStatus, setModalStatus] = useState(ModalStatus.INITIAL)

  const handleMint = async () => {
    if (!signer) return
    try {
      setModalStatus(ModalStatus.MINTING)
      await exchangeClaimTicket(signer, claimExchangeAbi, latestClaimTicketId)
      router.push("/claim/success")
    } catch (error) {
      log.error(error)
      setModalStatus(ModalStatus.APPROVED)
    }
  }

  const handleBurn = async () => {
    if (!signer) return
    try {
      if (modalStatus === ModalStatus.CANBURN) {
        setModalStatus(ModalStatus.APPROVING)
        await approveClaimTicket(signer, claimTicketAbi, latestClaimTicketId)
      }

      handleMint()
    } catch (error) {
      log.error(error)
      setModalStatus(ModalStatus.CANBURN)
    }
  }

  const checkAlreadyApproved = useCallback(async () => {
    if (address && latestClaimTicketId !== null && ticketCount > 0) {
      const isApproved = await getIsApproved(claimTicketAbi, latestClaimTicketId)

      setModalStatus(isApproved ? ModalStatus.APPROVED : ModalStatus.CANBURN)
    }
  }, [latestClaimTicketId, address, ticketCount])

  const hasNoClaimTicket = useMemo(
    () => address && (latestClaimTicketId === null || ticketCount === 0),
    [latestClaimTicketId, address, ticketCount],
  )
  const getTicketInformation = useCallback(async () => {
    if (!address) return
    const { ticket: ticketToBurn, noOfTickets } = await getLatestClaimTicket(address)
    setLatestClaimTicketId(ticketToBurn?.id?.tokenId || null)
    setTicketCount(noOfTickets)
  }, [address])

  useEffect(() => {
    getTicketInformation()
  }, [getTicketInformation])

  useEffect(() => {
    checkAlreadyApproved()
  }, [checkAlreadyApproved])

  useGradualFadeEffect({
    elements: [
      {
        domObject: contentRef.current,
        type: "child",
      },
      {
        domObject: titleRef.current,
        type: "child",
      },
      {
        domObject: buttonRef.current,
        type: "child",
      },
    ],
    isScrollUp,
  })

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
            <div className="max-w-[1280px] flex-grow flex flex-col justify-end md:flex-row items-center pb-[50px] md:pb-0 relative z-[100]">
              <div className="flex justify-center md:hidden">
                {width && (
                  <Media
                    type="image"
                    link="/assets/Claim/ticket.svg"
                    containerClasses="rounded-[10px] overflow-hidden z-[1]"
                    containerStyle={{
                      width: isResponsive ? `${(width / 430) * 264}px` : "458px",
                      height: isResponsive ? `${(width / 430) * 300}px` : "521px",
                    }}
                  />
                )}
              </div>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <div className="flex flex-col items-center justify-center md:items-start">
                  <div ref={titleRef}>
                    <SectionTitle
                      text="Burn Ticket, Mint Passport"
                      className="mx-[8px] xs:m-6 w-[240px] samsungS8:w-[270px] lg:w-[450px]
                      !text-[30px] samsungS8:!text-[33px] lg:!text-[64px]  md:text-left mb-4
                      md:leading-[102.3%]"
                    />
                  </div>
                  <div className="flex justify-center" ref={contentRef}>
                    <SectionContent className="w-[290px] samsungS8:w-[300px] md:w-[550px] m-[8px] mt-[30px] xs:mt-[20px] md:mt-[55px] md:text-left">
                      <div className="pl-0 font-medium xs:pl-4">
                        1. Connect wallet
                        <br />
                        2. Burn ticket
                        <br />
                        3. Mint Passport
                        <br />
                      </div>
                    </SectionContent>
                  </div>
                  <div className="px-12 flex justify-center md:justify-start md:mt-[15px]">
                    <Popover className="w-full" id="connect_popver_claim">
                      <div ref={buttonRef}>
                        <Button
                          id="redeem_passport_btn"
                          className="mt-[20px] md:mt-[40px] lg:px-[70px]"
                          onClick={() => {
                            if (modalStatus === ModalStatus.APPROVED) handleMint()
                          }}
                        >
                          Mint Passport
                        </Button>
                      </div>
                      {({ toggleModal }) => (
                        <div>
                          {modalStatus !== ModalStatus.INITIAL && (
                            <Mint
                              handleClose={toggleModal}
                              handleBurn={handleBurn}
                              handleMint={handleMint}
                              modalStatus={modalStatus}
                            />
                          )}
                          {hasNoClaimTicket && <NoTicket handleClose={toggleModal} />}
                          {!address && <ConnectWallet handleClose={toggleModal} />}
                        </div>
                      )}
                    </Popover>
                  </div>
                </div>
                <div className="justify-center md:flex hidden md:translate-y-[30px]">
                  {width && (
                    <Media
                      type="image"
                      link="/assets/Claim/ticket.svg"
                      containerClasses="rounded-[10px] overflow-hidden z-[1]"
                      containerStyle={{
                        width: isResponsive ? `${(width / 1440) * 458}px` : "458px",
                        height: isResponsive ? `${(width / 1440) * 521}px` : "521px",
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

export default ClaimPage
