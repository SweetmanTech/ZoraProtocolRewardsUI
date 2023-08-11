import { useRef } from "react"
import useFadeIntersection from "../../hooks/useFadeIntersection"

interface SectionContentProps {
  children: React.ReactNode
  className?: string
}

const SectionContent: React.FC<SectionContentProps> = ({ children, className }) => {
  const ref = useRef()

  useFadeIntersection({
    ref,
  })

  return (
    <div
      ref={ref}
      className={`appear 
        m-6 md:mx-12 
        md:mb-8 md:mt-6 
        text-[14px] xs:text-[16px] leading-[103.3%] 
        md:text-[18px] md:leading-[108.8%] 
        text-center md:text-left text-[black]
        font-medium font-quicksand
        dark:text-[white] dark:drop-shadow-[0_4px_2px_rgba(0,0,0,0.75)] 
        ${className || ""}`}
    >
      {children}
    </div>
  )
}

export default SectionContent
