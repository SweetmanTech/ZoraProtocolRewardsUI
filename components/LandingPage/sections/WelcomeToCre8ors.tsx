import { useMediaQuery, useReadLocalStorage } from "usehooks-ts"
import { FC, useRef } from "react"
import SectionTitle from "../SectionTitle"
import SectionContent from "../SectionContent"

import { Button } from "../../../shared/Button"
import FadeInImage from "../FadeInImage"
import useFadeIntersection from "../../../hooks/useFadeIntersection"
import Input from "../../../shared/Input"
import Icon from "../../../shared/Icon"
import Avatar from "../../../shared/Avatar"
import AvatarGroup from "../../../shared/AvatarGroup"
import useGradualFadeEffect from "../../../hooks/useGradualFade"

interface Props {
  value: string
  onChange: (val: string) => void
  onSubscribe: (e: any) => void
  contentHeight: number
  characterHeight: number
  desktopImageRef: any
  isSubscribed: boolean
}

const WelcomeToCre8ors: FC<Props> = ({
  value,
  onChange,
  onSubscribe,
  contentHeight,
  characterHeight,
  desktopImageRef,
  isSubscribed,
}) => {
  const isScrollUp = useReadLocalStorage<boolean>("isScrollUp")

  const isMobile = useMediaQuery("(max-width: 490px)")
  const isIphone = useMediaQuery("(max-width: 390px)")

  const inputRef = useRef()
  const avatarsRef = useRef()
  const titleRef = useRef()
  const contentRef = useRef()
  const mobileImageRef = useRef()

  useFadeIntersection({
    ref: inputRef,
  })

  useFadeIntersection({
    ref: avatarsRef,
  })

  useGradualFadeEffect({
    elements: [
      {
        domObject: avatarsRef.current,
        type: "self",
      },
      {
        domObject: inputRef.current,
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
    <div className="md:grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-0 md:gap-y-4">
      <div
        className="md:hidden relative
          md:col-span-2
          items-center justify-center
          flex"
        style={{
          height: `${characterHeight}px`,
          transform: `translateY(${isIphone ? 20 : 30}px)`,
        }}
        ref={mobileImageRef}
      >
        <FadeInImage
          url="/assets/Landing/creativity.svg"
          width={isIphone ? 145 : 226.65}
          height={isIphone ? 304 : 476.86}
        />
      </div>

      <div
        className="col-span-1
          md:col-span-2
          flex flex-col justify-start items-center md:items-start justify-start md:justify-center
          !bg-transparent dark:!bg-[black] md:dark:!bg-[transparent]
          shadow-none dark:shadow-[0_0_10px_10px_rgba(0,0,0)] md:!shadow-none"
        style={{
          height: `${contentHeight}px`,
        }}
      >
        <div ref={titleRef}>
          <SectionTitle
            text="Welcome to the Next Generation of Creativity"
            className="w-[260px] md:w-[550px] md:text-left md:!mt-0"
          />
        </div>
        <div ref={contentRef}>
          <SectionContent className="!text-[12.5px] samsungS8:!text-[14px] xs:!text-[16px] md:!text-[18px] !mt-2 md:m-0">
            {isMobile ? (
              <>
                Cre8ors is a next-gen brand made for the <br /> metaverse; powered by our curated
                collective <br />
                of web3 creators, IP co-creation protocols <br /> and AI-enabled NFTs.
              </>
            ) : (
              <>
                Cre8ors is a next-gen media brand made for the metaverse; <br />
                powered by our curated collective of web3 creators, <br />
                IP co-creation protocols and AI-enabled NFTs.
              </>
            )}
          </SectionContent>
        </div>
        <div
          ref={inputRef}
          className="appear mt-2 md:mt-0 mb-6 md:mx-12 flex justify-center md:justify-start"
        >
          <div className="w-[290px] xs:w-[350px] md:w-[416px]">
            <Input
              id="newsletter_input"
              endAdornment={
                <Button
                  id="subscribe_btn"
                  className={`rounded-tl-[0px] rounded-bl-[0px] 
                    !px-[15px] 
                    capitalize text-[14px]
                    border-[none]
                    ${isSubscribed && "!text-[#5EE884]"}`}
                  onClick={onSubscribe}
                >
                  {isSubscribed ? "Subscribed!" : "Subscribe"}
                </Button>
              }
              startAdornment={<Icon name="email" raw color="#b5b4b4" size={17} />}
              value={value}
              onChange={onChange}
              placeholder="Your Email"
              className="font-quicksand text-[8px] w-[150px] xs:text-[12px] xs:w-[200px] md:text-[16px] md:w-[250px]"
              containerClassName="hover:scale-[1.1] scale-[1] transition duration-[250ms]"
              hasDoubleAnimation
            />
          </div>
        </div>
        <div
          ref={avatarsRef}
          className="mt-2 md:ml-12 md:mt-3
            font-quicksand font-medium 
            flex flex-col md:flex-row items-center gap-y-[5px] gap-x-[10px] 
            dark:text-white
            appear"
        >
          <AvatarGroup count={3}>
            <Avatar url="/assets/Landing/avatars/avatar_1.svg" />
            <Avatar url="/assets/Landing/avatars/avatar_2.svg" />
            <Avatar url="/assets/Landing/avatars/avatar_3.svg" />
          </AvatarGroup>
          <div className="flex items-center text-[14px] gap-2 text-[#6F6F6F] light">
            <div className="highlight !text-[#916FE2] font-bold">Join 2K+</div> web3 creators.
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeToCre8ors
