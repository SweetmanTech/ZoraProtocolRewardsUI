import { useUserProvider } from "../../../../providers/UserProvider"
import Media from "../../../../shared/Media"
import Tooltip from "../../../../shared/Tooltip"

const PreSimilarProfiles = () => {
  const { similarProfiles } = useUserProvider()

  return (
    <div className="flex flex-col items-end">
      <div
        className="text-[22px] font-bold font-quicksand
                leading-[99.3%] text-black
                pt-[20px] pb-[20px]
                text-right"
      >
        SIMILAR PROFILES
      </div>
      <div
        className={`flex flex-wrap flex-row-reverse
        max-w-[210px] gap-x-[10px] gap-y-[10px] min-h-[120px]`}
      >
        {similarProfiles.map((profile) => (
          // eslint-disable-next-line react/no-array-index-key, no-underscore-dangle
          <div key={profile._id} className="flex justify-end">
            <Tooltip
              // eslint-disable-next-line no-underscore-dangle
              id={profile._id}
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default PreSimilarProfiles
