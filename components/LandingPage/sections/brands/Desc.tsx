import { useRef } from "react"
import useFadeIntersection from "../../../../hooks/useFadeIntersection"

const Desc = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef()

  useFadeIntersection({
    ref,
  })

  return (
    <div
      ref={ref}
      className="appear font-quicksand font-medium text-[18px] text-black dark:text-white text-left md:text-center w-[220px] md:w-[250px] mt-3 leading-[94.3%] dark:drop-shadow-[0_4px_2px_rgba(0,0,0,0.75)]"
    >
      {children}
    </div>
  )
}

export default Desc
