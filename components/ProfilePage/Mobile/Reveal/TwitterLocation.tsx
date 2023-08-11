import Media from "../../../../shared/Media"

import { useProfileProvider } from "../../../../providers/ProfileContext"
import { useUserProvider } from "../../../../providers/UserProvider"

const TwitterLocation = () => {
  const { userInfo } = useUserProvider()
  const {
    isEditable,
    editedTwitterHandle,
    editedLocation,
    setEditedLocation,
    setEditedTwitterHandle,
  } = useProfileProvider()

  return (
    <div className="flex items-center justify-center gap-x-[10px] pt-[5px]">
      <div className="flex items-center gap-x-[5px]">
        <Media
          type="image"
          link="/assets/Profile/black_twitter.svg"
          blurLink="/assets/Profile/black_twitter.png"
          containerClasses="w-[20px] h-[16px]"
        />
        {isEditable ? (
          <input
            className="relative z-[105] 
        text-[12px] leading-[99.3%] 
        font-quicksand font-bold
        w-[80px]
        ring-0 outline-none
        border-[lightgray] border-[1px]
        bg-[#D9D9D9]
        px-[3px] py-[2px]
        rounded-[4px]"
            onChange={(e) => setEditedTwitterHandle(e.target.value)}
            value={editedTwitterHandle}
          />
        ) : (
          <p className="font-quicksand font-bold text-[12px] leading-[99.3%]">
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
          containerClasses="w-[23px] h-[23px]"
        />
        {isEditable ? (
          <input
            className="relative z-[105] 
        text-[12px] leading-[99.3%] 
        font-quicksand font-bold
        w-[90px]
        ring-0 outline-none
        border-[lightgray] border-[1px]
        bg-[#D9D9D9]
        px-[3px] py-[2px]
        rounded-[4px]"
            onChange={(e) => setEditedLocation(e.target.value)}
            value={editedLocation}
          />
        ) : (
          <p className="font-quicksand font-bold text-[12px] leading-[99.3%]">
            {userInfo?.location || ""}
          </p>
        )}
      </div>
    </div>
  )
}

export default TwitterLocation
