import { FC } from "react"
import Media from "../../shared/Media"

interface DNALoadingProps {
  className?: string
}
const DNALoading: FC<DNALoadingProps> = ({ className }) => (
  <div
    className={`relative lg:absolute 
    w-full h-full flex justify-center
    pt-[30px] lg:pt-[105px]
    z-[1] ${className || ""}`}
  >
    <Media
      type="image"
      link="/assets/Profile/dna_animation.gif"
      blurLink="/assets/Profile/dna_animation.gif"
      containerClasses="w-[250px] h-[250px] lg:w-[697px] lg:h-[697px]"
    />
  </div>
)

export default DNALoading
