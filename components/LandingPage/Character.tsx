import { FC, useEffect, useState } from "react"

import FadeInImage from "./FadeInImage"

interface CharacterProps {
  screenWidth: number
  bgImgWidth: number
  bgImgHeight: number
  offsetX: number
  offsetY: number
  characterWidth: number
  characterHeight: number
  characterRef?: any
  characterUrl: string
  xDirection: "left" | "right"
  yDirection: "top" | "bottom"
  isMobile: boolean
}

const Character: FC<CharacterProps> = ({
  screenWidth,
  bgImgWidth,
  bgImgHeight,
  offsetX,
  offsetY,
  characterWidth,
  characterHeight,
  characterRef,
  characterUrl,
  xDirection,
  yDirection,
  isMobile,
}) => {
  const [style, setStyle] = useState<any>()

  useEffect(() => {
    if (xDirection && yDirection) {
      const temp = {
        left: ``,
        right: ``,
        bottom: ``,
        top: ``,
      }

      temp[`${xDirection}`] = `${(isMobile ? bgImgWidth : screenWidth) * offsetX}px`
      temp[`${yDirection}`] = `${
        isMobile ? bgImgHeight * offsetY : ((screenWidth * bgImgHeight) / bgImgWidth) * offsetY
      }px`

      setStyle({ ...temp })
    }
  }, [xDirection, yDirection, screenWidth, bgImgHeight, bgImgWidth, offsetX, offsetY, isMobile])

  return (
    <div
      className="md:block hidden absolute
            z-[11]
            pointer-events-none"
      style={{
        display: isMobile ? "none" : "block",
        ...style,
      }}
      ref={characterRef}
    >
      <FadeInImage
        url={characterUrl}
        width={isMobile ? characterWidth : (characterWidth * screenWidth) / bgImgWidth}
        height={isMobile ? characterHeight : (characterHeight * screenWidth) / bgImgWidth}
      />
    </div>
  )
}

export default Character
