import { FC, useRef } from "react"
import useFadeIntersection from "../../hooks/useFadeIntersection"

interface ContentProps {
  content: string
  className?: string
}

const Content: FC<ContentProps> = ({ content, className }) => {
  const ref = useRef()

  useFadeIntersection({
    ref,
  })

  return (
    <pre
      className={`appear font-quicksand p-0 font-medium 
        text-[14px] samsungS8:text-[15px] md:text-[19px] 
        text-black dark:text-white ${className}`}
      ref={ref}
    >
      {content}
    </pre>
  )
}

export default Content
