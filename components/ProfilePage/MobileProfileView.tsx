import { useState } from "react"
import Media from "../../shared/Media"
import ProfileInformation from "./Desktop/Reveal/ProfileInformation"
import SimilarProfiles from "./Mobile/Reveal/SimilarProfiles"
import WalletCollection from "./WalletCollection"
// import TwitterLocation from "./Mobile/Reveal/TwitterLocation"
import PFPImage from "./Mobile/Reveal/PFPImage"

const MobileProfileView = () => {
  const [expandedMore, setExpandedMore] = useState(false)

  return (
    <div
      className="relative w-full
        bg-[url('/assets/Profile/background.png')] bg-cover
        rounded-[10px]
        overflow-hidden"
    >
      <div
        className="absolute z-[1] left-0 top-0 w-full h-full
            bg-gradient-to-l from-[#000000db] via-[transparent] to-[transparent]"
      />
      <div
        className="absolute z-[1] left-0 top-0 w-full h-full
            bg-gradient-to-t from-[#000000db] via-[transparent] to-[transparent]"
      />
      <div
        className={`relative z-[3] left-0 top-0 w-full h-full
            flex flex-col
            pt-6`}
      >
        <div className="font-eigerdals text-[40px] text-center">Stargirl</div>
        {/* <TwitterLocation /> */}
        <div className="w-full flex justify-center items-center px-10 gap-x-[10px] pt-[15px]">
          <div
            className="w-[26px] h-[26px] bg-[#DBDBDB] 
                        flex items-center justify-center
                        rounded-[3px] cursor-pointer"
          >
            <Media
              type="image"
              link="/assets/Profile/home.svg"
              blurLink="/assets/Profile/home.png"
              containerClasses="w-[17px] h-[17px]"
            />
          </div>
          <div
            className="w-[26px] h-[26px] bg-[#DBDBDB] 
                        flex items-center justify-center
                        rounded-[3px] cursor-pointer"
          >
            <Media
              type="image"
              link="/assets/Profile/three_dot.svg"
              blurLink="/assets/Profile/three_dot.png"
              containerClasses="w-[17px] h-[17px]"
            />
          </div>
          <button
            className="w-[26px] h-[26px] bg-[#DBDBDB]
                        flex items-center justify-center
                        rounded-[2px] cursor-pointer"
            type="button"
          >
            <Media
              type="image"
              link="/assets/Profile/edit.svg"
              blurLink="/assets/Profile/edit.png"
              containerClasses="w-[17px] h-[17px]"
            />
          </button>
        </div>
        <PFPImage />

        <ProfileInformation />
        <SimilarProfiles />

        <WalletCollection
          handleExpandMore={(expanded: boolean) => setExpandedMore(expanded)}
          expandMore={expandedMore}
        />
      </div>
    </div>
  )
}

export default MobileProfileView
