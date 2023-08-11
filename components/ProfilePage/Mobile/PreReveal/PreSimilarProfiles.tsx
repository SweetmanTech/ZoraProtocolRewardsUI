import { useUserProvider } from "../../../../providers/UserProvider"
import Media from "../../../../shared/Media"
import Tooltip from "../../../../shared/Tooltip"

const PreSimilarProfiles = () => {
  const { similarProfiles } = useUserProvider()

  return (
    <div className="flex flex-col items-center pb-[40px]">
      <div
        className="text-[22px] font-bold font-quicksand
                  leading-[99.3%] black-white
                  pt-[20px] pb-[20px]
                  text-center"
      >
        SIMILAR PROFILES
      </div>
      <div
        className={`flex flex-wrap justify-center
        max-w-[200px] gap-x-[10px] gap-y-[10px]`}
      >
        {similarProfiles?.map((profile) => (
          <Tooltip
            // eslint-disable-next-line no-underscore-dangle
            id={profile._id}
            // eslint-disable-next-line no-underscore-dangle
            key={profile._id}
            message={profile.username}
            place="top"
            style={{
              backgroundColor: "#DADADA",
              color: "black",
              fontFamily: "quicksand",
              fontSize: "10px",
              fontWeight: "bold",
            }}
          >
            <a href={`/profile/${profile.walletAddress}`} target="_blank" rel="noreferrer">
              <Media
                type="image"
                link={profile.avatarUrl}
                blurLink={profile.avatarUrl}
                containerClasses="w-[39px] h-[39px] rounded-full bg-[black]
                overflow-hidden"
              />
            </a>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}

export default PreSimilarProfiles
