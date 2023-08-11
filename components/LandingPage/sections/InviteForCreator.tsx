/* eslint no-nested-ternary: "error" */
import { useMediaQuery, useReadLocalStorage } from "usehooks-ts"
import { FC, useRef } from "react"
import SectionTitle from "../SectionTitle"
import SectionContent from "../SectionContent"
import FadeInImage from "../FadeInImage"
import useGradualFadeEffect from "../../../hooks/useGradualFade"

interface Props {
  deskTopHeight: number
  mobileHeight: number
}
const InviteForCreator: FC<Props> = ({ mobileHeight, deskTopHeight }) => {
  const isMobile = useMediaQuery("(max-width: 799px)")
  const isIphone = useMediaQuery("(max-width: 390px)")

  const isScrollUp = useReadLocalStorage<boolean>("isScrollUp")

  const titleRef = useRef()
  const contentRef = useRef()
  const imageRef = useRef()

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
        domObject: imageRef.current,
        type: "child",
      },
    ],
    isScrollUp,
  })

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-y-4">
        <div
          className={`flex flex-col justify-end md:justify-center items-center
            h-[${mobileHeight}px] md:h-[${deskTopHeight}px]`}
          ref={imageRef}
        >
          <FadeInImage
            url="/assets/Landing/invite.svg"
            // eslint-disable-next-line no-nested-ternary
            width={!isMobile ? 511 : !isIphone ? 348.41 : 290}
            // eslint-disable-next-line no-nested-ternary
            height={!isMobile ? 586 : !isIphone ? 399.68 : 332}
            style={{
              transform: `translateY(-${mobileHeight * 0.08}px)`,
            }}
          />
        </div>
        <div
          className="flex flex-col justify-center items-center md:items-end
            !bg-transparent dark:!bg-[black] md:dark:!bg-[transparent]
            shadow-none dark:shadow-[0_0_10px_10px_rgba(0,0,0)] md:!shadow-none
            mt-[-1px] md:mt-0"
        >
          <div ref={titleRef}>
            <SectionTitle
              text="An Invite-Only Community for Web3 Creators"
              className="w-[300px] md:w-[550px] md:text-right mb-4"
            />
          </div>
          <div ref={contentRef}>
            <SectionContent className="w-[300px] md:w-[550px] mt-0 md:mt-2 md:text-right">
              {isMobile ? (
                <>
                  Providing the network, resources and <br />
                  tools to help unleash your creative <br />
                  potential and financial freedom. We’re <br />
                  building the best creator community <br />
                  on the internet, together.
                </>
              ) : (
                <>
                  Providing the network, resources and tools to help unleash your <br />
                  creative potential and financial freedom. We’re building the <br />
                  best creator community on the internet, together.
                </>
              )}
            </SectionContent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InviteForCreator
