import { useMediaQuery } from "usehooks-ts"
import SectionContainer from "../SectionContainer"
import Title from "../../Common/Title"
import Content from "../../Common/Content"
import Media from "../../../shared/Media"
import ApplyAllowListButton from "../ApplyAllowListButton"

const InHouse = () => {
  const isXl = useMediaQuery("(max-width: 1150px)")

  return (
    <SectionContainer>
      <div className="relative w-full pt-[85px] xl:pt-0 xl:h-[960px] flex justify-center items-center">
        <div
          className="grid  
                grid-cols-1 xl:grid-cols-5 
               gap-x-0"
        >
          <div className="w-[100%] flex justify-center pb-[35px] col-span-2">
            <Media
              link={
                isXl
                  ? "/assets/Mint/InHouse/mobile_character.svg"
                  : "/assets/Mint/InHouse/character.svg"
              }
              blurLink={
                isXl
                  ? "/assets/Mint/InHouse/mobile_character.png"
                  : "/assets/Mint/InHouse/character.png"
              }
              type="image"
              containerClasses="xl:w-[470px] xl:h-[798px]
              w-[195.32px] h-[337.39px]"
            />
          </div>
          <div className="flex flex-col justify-center col-span-3 xl:pr-[50px] 2xl:pr-0">
            <Title
              text={
                isXl
                  ? `Not Just a JPEG. Think,\nPFP as a Service (PaaS)`
                  : `Not Just a JPEG.\nThink, PFP as a\nService (PaaS)`
              }
              className="leading-[103.3%] 
              text-center xl:text-right
              !text-[22px] xs:!text-[27px] xl:!text-[65px]"
            />
            <Content
              content={
                isXl
                  ? `We believe IP is one of the most valuable utilities for\nNFT holders, so why stop at just the artwork? Our in-\nhouse IP management and licensing department can\nhelp you license your Cre8ors IP. From the artwork to\nthe co-creations you make with the community,\nCre8ors mission is to unleash your creative potential\nand unlock financial freedom for our members.`
                  : `We believe IP is one of the most valuable utilities for NFT\nholders, so why stop at just the artwork? Our in-house IP\nmanagement and licensing department can help you license\nyour Cre8ors IP. From the artwork to the co-creations you make\nwith the community, Cre8ors mission is to unleash your creative\npotential and unlock financial freedom for our members.`
              }
              className="leading-[103.3%]
              pt-[10px] xl:pt-[27px]
              text-center xl:text-right
              !text-[10px] samsungS8:!text-[11px] xs:!text-[12px] xl:!text-[19px]"
            />
            <ApplyAllowListButton id="apply_button_paas" position="end" />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default InHouse
