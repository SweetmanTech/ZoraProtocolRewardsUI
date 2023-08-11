import Image from "next/image"
import { FC } from "react"
import { useMediaQuery } from "usehooks-ts"
import Icon from "../../../../../shared/Icon"

interface TeamMembersCardProps {
  name?: string
  role?: string
  favQuote?: string
  imgSrc?: string
  twitterHandle?: string
}
const TeamMembersCard: FC<TeamMembersCardProps> = ({
  name,
  role,
  favQuote,
  imgSrc,
  twitterHandle,
}) => {
  const isMobile = useMediaQuery("(max-width: 459px)")

  return (
    <div
      className="p-4 my-2 overflow-hidden 
        bg-white 
        md:h-[247px]
        w-[290px] samsungS8:w-[300px] xs:w-[380px]
        rounded-2xl font-quicksand 
        shadow-[3px_3px_4px_rgba(0,0,0,0.25)] dark:shadow-[3px_3px_4px_rgba(255,255,255,0.25)]"
    >
      <div className="flex justify-between items-center md:items-start">
        <div className="flex gap-3">
          <div className="w-[60px] h-[59px] md:w-[108px] md:h-[106px] rounded-[10px] overflow-hidden bg-[black]">
            <Image
              src={imgSrc || "/CRE8ORSLOGO_ICON.png"}
              alt="Profile picture"
              className="w-[60px] h-[59px] md:w-[108px] md:h-[106px]"
              width={!isMobile ? 108 : 60}
              height={!isMobile ? 106 : 59}
            />
          </div>
          <div className="max-w-[170px]">
            <div
              className="text-[27px] break-words	
                font-[900] font-eigerdals 
                leading-[100%]"
            >
              {name || "John Doe"}
            </div>
            <div className="text-[17px] leading-[100%] font-medium">{role || "Person Role"}</div>
          </div>
        </div>
        <div
          className="!w-[44px] !h-[44px] 
            bg-[black] 
            flex items-center justify-center 
            rounded-full
            shadow-[3px_3px_4px_rgba(0,0,0,0.25)]"
        >
          <a href={`https://twitter.com/${twitterHandle}`} target="_blank" rel="noreferrer">
            <div className="cursor-pointer">
              <Icon name="twitter" color="white" raw />
            </div>
          </a>
        </div>
      </div>
      <div className="hidden md:block pt-[20px]">
        <div
          className="text-[16px] 
            font-quicksand font-medium 
            text-[black]
            leading-[99.3%]"
        >
          {favQuote}
        </div>
      </div>
    </div>
  )
}
export default TeamMembersCard
