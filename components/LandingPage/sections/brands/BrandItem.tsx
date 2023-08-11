import { FC, ReactNode, useRef } from "react"
import { useReadLocalStorage } from "usehooks-ts"
import Title from "./Title"
import Desc from "./Desc"
import FadeInImage from "../../FadeInImage"

import useGradualFadeEffect from "../../../../hooks/useGradualFade"

interface BrandItemProps {
  imageUrl: string
  imageWidth: number
  imageHeight: number
  title: ReactNode
  text: ReactNode
}

const BrandItem: FC<BrandItemProps> = ({ imageHeight, imageWidth, imageUrl, title, text }) => {
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
    <div
      className="flex justify-center items-end md:flex-col md:items-center 
        mb-0 md:mb-12 md:mb-0 gap-4 md:gap-0"
    >
      <div ref={imageRef}>
        <FadeInImage url={imageUrl} width={imageWidth} height={imageHeight} />
      </div>
      <div>
        <div ref={titleRef}>
          <Title> {title}</Title>
        </div>
        <div ref={contentRef}>
          <Desc> {text} </Desc>
        </div>
      </div>
    </div>
  )
}

export default BrandItem
