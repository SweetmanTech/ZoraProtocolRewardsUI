import { useMediaQuery } from "usehooks-ts"
import SectionContainer from "../SectionContainer"
import Title from "../../Common/Title"
import Content from "../../Common/Content"
import Media from "../../../shared/Media"
import ApplyAllowListButton from "../ApplyAllowListButton"

const Cre8orsWay = () => {
  const avatarList = [
    {
      id: "avatar1",
      link: "/assets/Mint/Cre8orsWay/avatar1.png",
    },
    {
      id: "avatar2",
      link: "/assets/Mint/Cre8orsWay/avatar2.png",
    },
    {
      id: "avatar3",
      link: "/assets/Mint/Cre8orsWay/avatar3.png",
    },
    {
      id: "avatar4",
      link: "/assets/Mint/Cre8orsWay/avatar4.png",
    },
    {
      id: "avatar5",
      link: "/assets/Mint/Cre8orsWay/avatar5.png",
    },
    {
      id: "avatar6",
      link: "/assets/Mint/Cre8orsWay/avatar6.png",
    },
    {
      id: "avatar7",
      link: "/assets/Mint/Cre8orsWay/avatar7.png",
    },
    {
      id: "avatar8",
      link: "/assets/Mint/Cre8orsWay/avatar8.png",
    },
    {
      id: "avatar9",
      link: "/assets/Mint/Cre8orsWay/avatar9.png",
    },
  ]

  const isXl = useMediaQuery("(max-width: 1150px)")

  return (
    <SectionContainer>
      <div className="relative w-full pt-[85px] xl:h-[calc(100vh+100px)] flex justify-center items-center">
        <div
          className="grid 
                grid-cols-1 xl:grid-cols-2 
                xl:gap-[20px] 2xl:gap-x-[150px]"
        >
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-y-[20px] gap-x-[5px] xl:gap-x-[10px]">
              {avatarList.map((avatar) => (
                <Media
                  key={avatar.id}
                  link={avatar.link}
                  blurLink={avatar.link}
                  type="image"
                  containerClasses="xl:w-[170px] xl:h-[170px]
                                    w-[87px] h-[87px]
                                    rounded-full overflow-hidden
                                    border-[2px] xl:border-[5px] border-[white]"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center pt-[27px] xl:pt-0">
            <Title
              text={
                isXl
                  ? `Cre8ors Are Way More\nThan Just Profile Pictures`
                  : `Cre8ors Are Way\nMore Than Just\nProfile Pictures`
              }
              className="leading-[103.3%] 
                            text-center xl:text-right
                            !text-[22px] xs:!text-[27px] xl:!text-[65px]"
            />
            <Content
              content={
                isXl
                  ? `They’re a novel collection of 8,888 Artificially Intelligent\nProtocol-Enabled Pictures, or AiPEP’s that blend B&W AI\nphotography with colorful 2D-characters into one\nstand-out avatar. PFP’s will never be the same.`
                  : `They’re a novel collection of 8,888 Artificially Intelligent\nProtocol-Enabled Pictures, or AiPEP’s that blend B&W\nAI photography with colorful 2D-characters into one\nstand-out avatar. PFP’s will never be the same.`
              }
              className="leading-[103.3%] 
                            pt-[10px] xl:pt-[27px]
                            text-center xl:text-right
                            !text-[10px] samsungS8:!text-[11px] xs:!text-[12px] xl:!text-[19px]"
            />
            <ApplyAllowListButton id="apply_now_pfps" position="end" />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Cre8orsWay
