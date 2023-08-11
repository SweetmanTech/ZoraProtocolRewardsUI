import { useState } from "react"
import Media from "../../shared/Media"
import PFPInformation from "./Desktop/Reveal/PFPInfomation"
import TwitterLocation from "./Desktop/Reveal/TwitterLocation"
import ProfileInformation from "./Desktop/Reveal/ProfileInformation"
import SimilarProfiles from "./Desktop/Reveal/SimilarProfiles"
import PFPImage from "./Desktop/Reveal/PFPImage"
import WalletCollection from "./WalletCollection"
import Tooltip from "../../shared/Tooltip"

const DesktopProfileView = () => {
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
      <PFPImage />
      <div
        className={`relative z-[3] left-0 top-0 w-full h-full
            flex flex-col
            pt-6`}
      >
        <div className="w-full flex justify-between items-center px-10">
          <div className="">
            <div className="font-eigerdals text-[75px]">Stargirl</div>
          </div>
          <div className="flex items-center gap-x-[10px]">
            <div
              className="w-[26px] h-[26px] bg-[white] 
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
            <Tooltip
              id="comming_soon_btn"
              message="BADGES,<br />EMBLEMS, &<br />AWARDS<br />COMING SOON"
              place="top"
              style={{
                backgroundColor: "#6C6C6C",
                color: "black",
                fontFamily: "quicksand",
                fontSize: "10px",
                fontWeight: "bold",
              }}
            >
              <div
                className="w-[26px] h-[26px] bg-[#6C6C6C] 
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
            </Tooltip>
          </div>
        </div>
        <div className="w-full flex justify-between items-start px-10">
          <div className="flex flex-col">
            <TwitterLocation />
            <div
              className={`flex ${
                expandedMore ? "items-end gap-x-[35px]" : "items-center"
              } pt-[20px]`}
            >
              <PFPInformation expandMore={expandedMore} />
            </div>
          </div>
          <div className="flex flex-col gap-y-[40px]">
            <ProfileInformation />
            <SimilarProfiles />
          </div>
        </div>
        <WalletCollection
          handleExpandMore={(expanded: boolean) => setExpandedMore(expanded)}
          expandMore={expandedMore}
        />
      </div>
    </div>
  )
}

export default DesktopProfileView
