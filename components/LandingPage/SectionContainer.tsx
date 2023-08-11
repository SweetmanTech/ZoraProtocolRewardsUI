import * as React from "react"
import Container from "../Layout/Container"

interface LayoutProps {
  containerClassName?: string
  className?: string
  children?: React.ReactNode
  backgroundImage?: string
  backgroundPosition?: string
  style?: any
}

const SectionContainer: React.FC<LayoutProps> = ({
  containerClassName,
  className,
  children,
  backgroundImage,
  backgroundPosition,
  style,
}) => (
  <div
    className={`relative 
      bg-transparent
      border-none
      w-[100%]
      ${containerClassName || ""}`}
  >
    <div
      className={`${backgroundImage}
        ${backgroundPosition}
        absolute
        w-full
        h-full
        top-0
        left-0
        opacity-0
        hidden
        md:!block
        z-[4]
        bg_area`}
      style={style}
    />
    <div
      className={`relative z-[6]
        ${className || ""}`}
      style={style}
    >
      <div className="relative z-[10] w-[100%] h-full">
        <Container>{children}</Container>
      </div>
    </div>
  </div>
)

export default SectionContainer
