import Media from "../../../../shared/Media"
import Tooltip from "../../../../shared/Tooltip"
import { useUserProvider } from "../../../../providers/UserProvider"
import { useProfileProvider } from "../../../../providers/ProfileContext"

const PreTwitterLocation = () => {
  const { userInfo } = useUserProvider()
  const {
    isEditable,
    editedTwitterHandle,
    editedLocation,
    setIsEditable,
    setEditedLocation,
    setEditedTwitterHandle,
    isHiddenEditable,
  } = useProfileProvider()

  return (
    <div className="flex items-center gap-x-[15px]">
      <div className="flex items-center gap-x-[5px]">
        <Media
          type="image"
          link="/assets/Profile/black_twitter.svg"
          blurLink="/assets/Profile/black_twitter.png"
          containerClasses="w-[23px] h-[19px]"
        />
        {isEditable ? (
          <input
            className="relative z-[105] 
        text-[22px] leading-[99.3%] 
        font-quicksand font-bold
        w-[186px]
        ring-0 outline-none
        border-[lightgray] border-[1px]
        bg-[#D9D9D9]
        px-[10px] py-[2px]
        rounded-[4px]"
            onChange={(e) => setEditedTwitterHandle(e.target.value)}
            value={editedTwitterHandle}
          />
        ) : (
          <p className="font-quicksand font-bold text-[22px] leading-[99.3%]">
            <a
              href={`https://twitter.com/${userInfo?.twitterHandle}`}
              target="_blank"
              rel="noreferrer"
            >
              @{userInfo?.twitterHandle}
            </a>
          </p>
        )}
      </div>
      <div className="flex items-center gap-x-[5px]">
        <Media
          type="image"
          link="/assets/Profile/black_location.svg"
          blurLink="/assets/Profile/black_location.png"
          containerClasses="w-[26px] h-[26px]"
        />
        {isEditable ? (
          <input
            className="relative z-[105] 
        text-[22px] leading-[99.3%] 
        font-quicksand font-bold
        w-[186px]
        ring-0 outline-none
        border-[lightgray] border-[1px]
        bg-[#D9D9D9]
        px-[10px] py-[2px]
        rounded-[4px]"
            onChange={(e) => setEditedLocation(e.target.value)}
            value={editedLocation}
          />
        ) : (
          <p className="font-quicksand font-bold text-[22px] leading-[99.3%]">
            {userInfo?.location}
          </p>
        )}
      </div>
      {!isHiddenEditable && !isEditable && (
        <Tooltip
          id="edit_profile"
          message="EDIT PROFILE"
          place="right"
          style={{
            backgroundColor: "#DADADA",
            color: "black",
            fontFamily: "quicksand",
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          <button
            className="w-[26px] h-[26px] bg-[white]
                hover:scale-[1.3] scale-[1] transition duration-[300ms]
                flex items-center justify-center
                drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]
                rounded-[2px] cursor-pointer"
            type="button"
            onClick={() => setIsEditable(true)}
          >
            <Media
              type="image"
              link="/assets/Profile/edit.svg"
              blurLink="/assets/Profile/edit.png"
              containerClasses="w-[17px] h-[17px]"
            />
          </button>
        </Tooltip>
      )}
    </div>
  )
}

export default PreTwitterLocation
