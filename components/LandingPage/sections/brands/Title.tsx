import { useRef } from "react"
import useFadeIntersection from "../../../../hooks/useFadeIntersection"

const Title = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef()

  useFadeIntersection({
    ref,
  })

  return (
    <div
      ref={ref}
      className="appear font-eigerdals font-[900] text-[30px] text-black dark:text-white text-left md:text-center mt-3 leading-[94.3%] dark:drop-shadow-[0_4px_2px_rgba(0,0,0,0.75)]"
    >
      {children}
    </div>
  )
}

export default Title
