import Media from "../../shared/Media"
import PreProfileInformation from "./Desktop/PreReveal/PreProflileInformation"
import TwitterLocation from "./Mobile/Reveal/TwitterLocation"
import PreSimilarProfiles from "./Mobile/PreReveal/PreSimilarProfiles"
import PreWalletCollection from "./PreWalletCollection"
import DNALoading from "./DNALoading"
import { useUserProvider } from "../../providers/UserProvider"
import { useProfileProvider } from "../../providers/ProfileContext"

const PreMobileProfileView = () => {
  const { userInfo } = useUserProvider()
  const { isEditable, editedUserName, setEditedUserName, setIsEditable, isHiddenEditable } =
    useProfileProvider()

  return (
    <div
      className="relative 
          w-[300px]
          samsungS8:w-[325px]
          xs:w-[360px]
          bg-[white]
          rounded-[10px]
          overflow-hidden"
    >
      <div
        className={`relative z-[3] left-0 top-0 w-full h-full
              flex flex-col
              pt-6`}
      >
        {isEditable ? (
          <div className="flex justify-center">
            <input
              className="relative z-[105] 
          text-[40px] leading-[99.3%] 
          font-eigerdals font-bold
          w-[190px]
          ring-0 outline-none
          border-[lightgray] border-[1px]
          bg-[#D9D9D9]
          px-[10px] py-[2px]
          rounded-[4px]"
              onChange={(e) => setEditedUserName(e.target.value)}
              value={editedUserName}
            />{" "}
          </div>
        ) : (
          <div className="flex justify-center ">
            <div
              className="font-eigerdals text-[27px] samsungS8:text-[30px] xs:text-[33px] text-center
          leading-[100%]"
            >
              {`${userInfo?.username.slice(0, 15)}${userInfo?.username.length > 15 ? "..." : ""}`}
            </div>
          </div>
        )}
        <TwitterLocation />
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
          {!isHiddenEditable && (
            <button
              className="w-[26px] h-[26px] bg-[#DBDBDB]
                          flex items-center justify-center
                          rounded-[2px] cursor-pointer"
              type="button"
              onClick={() => setIsEditable(!isEditable)}
            >
              <Media
                type="image"
                link="/assets/Profile/edit.svg"
                blurLink="/assets/Profile/edit.png"
                containerClasses="w-[17px] h-[17px]"
              />
            </button>
          )}
        </div>
        <DNALoading />

        <PreProfileInformation />
        <PreSimilarProfiles />

        <PreWalletCollection />
      </div>
    </div>
  )
}

export default PreMobileProfileView
