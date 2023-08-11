import { useRef } from "react"
import { useMediaQuery } from "usehooks-ts"
import useFadeIntersection from "../../hooks/useFadeIntersection"

interface SectionTitleProps {
  text: string
  className?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text, className }) => {
  const ref = useRef()

  const isResponsive = useMediaQuery("(max-width: 985px)")

  useFadeIntersection({
    ref,
  })

  return (
    <div
      ref={ref}
      className={`appear 
        m-6 md:mx-12 md:mt-12 md:mb-4 
        text-[33px] xs:text-[36px] leading-[94.3%] 
        md:text-[64px] md:leading-[85%] text-center dark:text-[white] text-[black] 
        font-eigerdals dark:drop-shadow-[0_4px_2px_rgba(0,0,0,0.75)] 
        ${className || ""}`}
      style={{
        fontSize: isResponsive ? "30px" : "64px",
      }}
    >
      {text}
    </div>
  )
}

export default SectionTitle
