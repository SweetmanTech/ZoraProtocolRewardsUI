import { useMediaQuery, useReadLocalStorage } from "usehooks-ts"
import { useRef, FC } from "react"
import SectionTitle from "../SectionTitle"
import SectionContent from "../SectionContent"
import FadeInImage from "../FadeInImage"
import useGradualFadeEffect from "../../../hooks/useGradualFade"

interface Props {
  contentHeight: number
  characterHeight: number
  desktopImageRef: any
}

const Cre8orsWay: FC<Props> = ({ contentHeight, characterHeight, desktopImageRef }) => {
  const isMobile = useMediaQuery("(max-width: 750px)")

  const isScrollUp = useReadLocalStorage<boolean>("isScrollUp")

  const titleRef = useRef()
  const contentRef = useRef()
  const mobileImageRef = useRef()

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
        domObject: !isMobile ? desktopImageRef.current : mobileImageRef.current,
        type: "child",
      },
    ],
    isScrollUp,
  })

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-0 md:gap-y-4 relative">
      <div
        className="md:hidden relative
        md:col-span-2
      "
        style={{
          height: `${characterHeight}px`,
        }}
        ref={mobileImageRef}
      >
        <div
          className="absolute"
          style={{
            left: `${985 * 0.095}px`,
            bottom: `${665 * 0.11}px`,
          }}
        >
          <FadeInImage url="/assets/Landing/profile.svg" width={215.07} height={429.83} />
        </div>
      </div>
      <div
        className="col-span-1
          md:col-span-2
          flex flex-col items-center md:items-end justify-end md:justify-center
          dark:bg-[black] !bg-transparent
          dark:shadow-[0_0_10px_10px_rgba(0,0,0)] shadow-none md:!shadow-none"
        style={{
          height: `${contentHeight}px`,
        }}
      >
        <div ref={titleRef}>
          <SectionTitle
            text="Cre8ors are Way More than Just Profile Pictures"
            className="md:text-right md:!leading-[63px] w-[325px] md:w-[550px]"
          />
        </div>
        <div ref={contentRef}>
          <SectionContent className="md:text-right mx-0 my-0 md:mx-10 w-[345px] md:w-[550px]">
            {isMobile ? (
              <>
                {`They're AiPEPs, or Artificially Intelligent`} <br />
                Protocol-Enabled Pictures. As AI evolves,
                <br /> so does your NFT. Holders get full rights
                <br /> to all IP their AiPEP generates. PFPs that <br />
                work for you, forever.
              </>
            ) : (
              <>
                {`They're AiPEPs, or Artificially Intelligent Protocol-Enabled Pictures.`} <br />
                {`As AI evolves, so does your NFT. Holders get full rights to all IP their AiPEP
                  generates. PFPs that work for you, forever.`}
              </>
            )}
          </SectionContent>
        </div>
      </div>
    </div>
  )
}

export default Cre8orsWay
