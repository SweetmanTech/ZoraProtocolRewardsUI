import { FC, useRef } from "react"
import useFadeIntersection from "../../hooks/useFadeIntersection"

interface TitleProps {
  text: string
  className?: string
}

const Title: FC<TitleProps> = ({ text, className }) => {
  const ref = useRef()

  useFadeIntersection({
    ref,
  })

  return (
    <pre
      className={`appear !font-eigerdals p-0 
        text-[32px] samsungS8:text-[35px] md:text-[65px] 
        text-black dark:text-white 
        dark:drop-shadow-[0_4px_2px_rgba(0,0,0,0.75)]
        ${className}`}
      ref={ref}
    >
      {text}
    </pre>
  )
}

export default Title
