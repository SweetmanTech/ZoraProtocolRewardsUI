import { FC } from "react"
import Icon from "../../../../../shared/Icon"
import ImageFallback from "../../../../../shared/ImageFallback"

interface FoundingMembersCardProps {
  profilePic?: string
  twitterHandle?: string
}
const FoundingMembersCard: FC<FoundingMembersCardProps> = ({ profilePic, twitterHandle }) => (
  <div
    className="overflow-hidden 
      bg-white rounded-2xl
      shadow-[3px_3px_4px_rgba(0,0,0,0.25)] dark:shadow-[3px_3px_4px_rgba(255,255,255,0.25)]"
  >
    <div className="flex flex-row items-center justify-between p-2">
      <div className="flex justify-start items-center gap-x-4">
        <div
          className="items-center justify-center 
            rounded-[10px] overflow-hidden
            bg-[black]
            w-[44px] h-[44px]"
        >
          <ImageFallback
            src={profilePic || "/assets/Common/missing.png"}
            fallbackSrc="/assets/Common/missing.png"
            width={44}
            height={44}
            className="w-[44px] h-[44px]"
          />
        </div>
        <div
          className="font-quicksand font-[700] 
          leading-[99.3%]
          text-[12px]
          md:hidden block"
        >
          @{twitterHandle || "twitter_handle"}
        </div>
      </div>
      <div
        className="font-quicksand font-[700] 
          leading-[99.3%]
          text-[12px]
          md:block hidden"
      >
        @{twitterHandle || "twitter_handle"}
      </div>
      <div
        className="!w-[26px] !h-[26px] 
          bg-[black] 
          flex items-center justify-center 
          rounded-full
          shadow-[3px_3px_4px_rgba(0,0,0,0.25)]"
      >
        <a href={`https://twitter.com/${twitterHandle}`} target="_blank" rel="noreferrer">
          <div className="cursor-pointer">
            <Icon name="twitter" color="white" raw size={16} />
          </div>
        </a>
      </div>
    </div>
  </div>
)
export default FoundingMembersCard
