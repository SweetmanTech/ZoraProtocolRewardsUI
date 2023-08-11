import { useMediaQuery } from "usehooks-ts"
import SectionContainer from "../SectionContainer"
import Title from "../../Common/Title"
import Content from "../../Common/Content"
import Media from "../../../shared/Media"

const Archetypes = () => {
  const pfpList = [
    {
      id: "pfp1",
      blurLink: "/assets/Mint/PFP/musician.png",
      link: "/assets/Mint/PFP/musician.svg",
    },
    {
      id: "pfp2",
      blurLink: "/assets/Mint/PFP/writer.png",
      link: "/assets/Mint/PFP/writer.svg",
    },
    {
      id: "pfp3",
      blurLink: "/assets/Mint/PFP/photographer.png",
      link: "/assets/Mint/PFP/photographer.svg",
    },
    {
      id: "pfp4",
      blurLink: "/assets/Mint/PFP/designer.png",
      link: "/assets/Mint/PFP/designer.svg",
    },
    {
      id: "pfp5",
      blurLink: "/assets/Mint/PFP/engineer.png",
      link: "/assets/Mint/PFP/engineer.svg",
    },
    {
      id: "pfp6",
      blurLink: "/assets/Mint/PFP/dancer.png",
      link: "/assets/Mint/PFP/dancer.svg",
    },
    {
      id: "pfp7",
      blurLink: "/assets/Mint/PFP/director.png",
      link: "/assets/Mint/PFP/director.svg",
    },
    {
      id: "pfp8",
      blurLink: "/assets/Mint/PFP/thespain.png",
      link: "/assets/Mint/PFP/thespain.svg",
    },
  ]

  const isXl = useMediaQuery("(max-width: 1150px)")

  return (
    <SectionContainer>
      <div className="relative w-full pt-[85px] xl:pt-0 xl:h-[1200px] flex-col flex justify-center">
        <div className="flex xl:hidden justify-center">
          <div className="grid grid-cols-4 gap-y-[20px] pb-[35px] w-[300px] samsungS8:w-[340px]">
            {pfpList.map((pfp) => (
              <Media
                key={pfp.id}
                link={pfp.link}
                blurLink={pfp.link}
                type="image"
                containerClasses="w-[79px] h-[110px]"
              />
            ))}
          </div>
        </div>
        <div>
          <Title
            text={
              isXl
                ? `An Intelligent PFP,\nHybrid Token +\nSmart Wallet`
                : "An Intelligent PFP,\nHybrid Token + Smart Wallet"
            }
            className="leading-[103.3%] text-center
                    !text-[22px] xs:!text-[27px] xl:!text-[65px]"
          />
          <Content
            content={
              isXl
                ? `Cre8ors PFP’s are a new interactive ERC-721ACH hybrid token\nthat comes with ownership of its own ERC-6551 smart wallet.\nEach PFP comes with a creative DNA card NFT inside. This card\nrepresents your Cre8ors archetype trait. Trade your cards and\nchange your traits without the need to sell your entire PFP.`
                : `Cre8ors PFP’s are a new interactive ERC-721ACH hybrid token that comes with ownership of its own\nERC-6551 smart wallet. Each PFP comes with a creative DNA card NFT inside. This card represents your\nCre8ors archetype trait. Trade your cards and change your traits without the need to sell your entire PFP.`
            }
            className="leading-[103.3%] text-center
                  pt-[10px] xl:pt-[27px]
                  !text-[10px] samsungS8:!text-[11px] xs:!text-[12px] xl:!text-[19px]"
          />
        </div>
        <div className="hidden xl:flex justify-center">
          <div className="grid grid-cols-4 gap-y-[20px] pt-[35px] w-[760px]">
            {pfpList.map((pfp) => (
              <Media
                key={pfp.id}
                link={pfp.link}
                blurLink={pfp.blurLink}
                type="image"
                containerClasses="w-[212px] h-[294px]"
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Archetypes
