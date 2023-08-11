import Media from "../../../../shared/Media"

const PFPImage = () => (
  <div className="w-full flex justify-center pt-[30px]">
    <Media
      type="image"
      link="/assets/Profile/pfp.svg"
      blurLink="/assets/Profile/pfp.png"
      containerClasses="w-[250px] h-[250px]"
    />
  </div>
)

export default PFPImage
