import { useMediaQuery, useReadLocalStorage } from "usehooks-ts"
import { useRef, FC } from "react"
import Link from "next/link"
import SectionTitle from "../SectionTitle"
import SectionContent from "../SectionContent"
import { Button } from "../../../shared/Button"
import FadeInImage from "../FadeInImage"
import useFadeIntersection from "../../../hooks/useFadeIntersection"
import useGradualFadeEffect from "../../../hooks/useGradualFade"

interface Props {
  contentHeight: number
  characterHeight: number
  desktopImageRef: any
}

const OpenSoon: FC<Props> = ({ contentHeight, characterHeight, desktopImageRef }) => {
  const isMobile = useMediaQuery("(max-width: 490px)")
  const isScrollUp = useReadLocalStorage<boolean>("isScrollUp")

  const ref = useRef()

  const titleRef = useRef()
  const contentRef = useRef()
  const mobileImageRef = useRef()

  useFadeIntersection({
    ref,
  })

  useGradualFadeEffect({
    elements: [
      {
        domObject: ref.current,
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
    <div className="grid grid-cols-1 gap-0 md:grid-cols-2 ">
      <div
        className="md:hidden relative
          md:col-span-2
          flex justify-end flex-col items-center
          pb-[20px]"
        style={{
          height: `${characterHeight}px`,
        }}
      >
        <FadeInImage url="/assets/Landing/opensoon.svg" width={279} height={542.31} />
      </div>
      <div
        className="col-span-1
          md:col-span-2 
          flex flex-col justify-center items-center md:items-start 
          !bg-transparent dark:!bg-[black] md:dark:!bg-[transparent]
          shadow-none dark:shadow-[0_0_10px_10px_rgba(0,0,0)] md:!shadow-none
          mt-[-1px] md:mt-0"
        style={{
          height: `${contentHeight}px`,
        }}
      >
        <SectionTitle
          text="Allowlist Open Now"
          className="w-[210px] md:w-[350px] leading-[105%] mb-0 md:text-left md:leading-[100%]"
        />
        <SectionContent className="!mt-[10px]">
          {isMobile ? (
            <Link href="/faq" target="_blank" className="underline cursor-pointer">
              <span className="underline">For more info read the FAQ.</span>
            </Link>
          ) : (
            <Link href="/faq" target="_blank">
              <span className="underline cursor-pointer">For more info read the FAQ.</span>
            </Link>
          )}
        </SectionContent>
        <div ref={ref} className="appear lg:mx-12 flex justify-center md:justify-start">
          <Button
            id="welcome_reserve_btn"
            className={`w-[242px] ${isMobile ? "py-[8px]" : ""}`}
            hasDoubleAnimation
          >
            <a target="_blank" rel="noreferrer" href="https://everythingcorp.cre8ors.com/quiz">
              Apply now
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OpenSoon
