import Media from "../../../../shared/Media"

const PFPImage = () => (
  <div
    className="absolute w-full flex justify-center
        pt-[105px]
        z-[2]"
  >
    <Media
      type="image"
      link="/assets/Profile/pfp.svg"
      blurLink="/assets/Profile/pfp.png"
      containerClasses="w-[697px] h-[697px]"
    />
  </div>
)

export default PFPImage
