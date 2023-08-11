import { FC } from "react"

interface SectionContainerProps {
  children?: any
}

const SectionContainer: FC<SectionContainerProps> = ({ children }) => (
  <div className="relative w-[100vw] flex justify-center">
    <div className="w-full max-w-[1280px]">{children[0] || children}</div>
    {children[1]}
  </div>
)

export default SectionContainer
