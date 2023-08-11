import { FC } from "react"
import Media from "../../shared/Media"

interface CharacterProps {
  originWidth: number
  originHeight: number
  screenWidth: number
  link: string
  className?: string
}

const Character: FC<CharacterProps> = ({
  screenWidth,
  originWidth,
  originHeight,
  link,
  className,
}) => (
  <Media
    link={link}
    type="image"
    containerStyle={{
      width: `${(screenWidth / 1440) * originWidth}px`,
      height: `${(screenWidth / 1440) * originHeight}px`,
    }}
    containerClasses={`${className}`}
    blurLink={link}
  />
)

export default Character
