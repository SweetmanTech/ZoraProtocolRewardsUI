import { useMediaQuery } from "usehooks-ts"
import { useMeasure } from "react-use"
import Image from "next/image"
import { useState } from "react"
import SectionContainer from "../SectionContainer"
import Title from "../../Common/Title"
import Content from "../../Common/Content"
import Character from "../Character"
import Media from "../../../shared/Media"
import Timer from "./Timer"
import { Button } from "../../../shared/Button"
import InfographicModal from "../InfographicModal"

const PreMintBoard = () => {
  const isXl = useMediaQuery("(max-width: 1150px")

  const [containerRef, containerSizes] = useMeasure()
  const [timerRef, timerSizes] = useMeasure()
  const [openInfographic, setOpenInfoGraphic] = useState(false)

  return (
    <>
      <InfographicModal
        isModalVisible={openInfographic}
        toggleIsVisible={() => setOpenInfoGraphic(!openInfographic)}
      />
      <SectionContainer>
        <div
          className="relative w-full min-h-[100vh] 
        pb-0 samsungS8:pb-[85px] xl:pb-0 
        flex justify-center 
        items-center samsungS8:items-end xl:items-center z-[1]"
          ref={containerRef}
        >
          <div className="flex flex-col justify-between items-center mt-[70px] xl:mt-0 xl:h-[470px]">
            <div className="xl:!hidden w-full flex justify-center pb-[35px]">
              <Media
                link="/assets/Mint/MintNow/mobile_character.png"
                blurLink="/assets/Mint/MintNow/mobile_character.png"
                type="image"
                containerClasses="w-[223px] h-[450px]"
                containerStyle={{
                  height: `${((containerSizes.height - timerSizes.height) / 3) * 2}px`,
                  width: `${
                    ((((containerSizes.height - timerSizes.height) / 3) * 2) / 450) * 233
                  }px`,
                }}
              />
            </div>
            <div ref={timerRef} className="flex justify-center flex-col items-center">
              <div className="flex items-center gap-x-[25px] pb-[8px] samsungS8:pb-[20px] xl:pb-0">
                <Title
                  text="Mint Your Cre8or"
                  className="!text-[33px] xs:!text-[39px] xl:!text-[65px]"
                />
                {!isXl && (
                  <button
                    className="cursor-pointer w-[25px] h-[25px] xl:w-[40px] xl:h-[40px] overflow-hidden rounded-full relative"
                    type="button"
                    onClick={() => setOpenInfoGraphic(true)}
                  >
                    <Image
                      className="absolute w-[100%] h-[100%]"
                      src="/assets/Mint/help.png"
                      layout="fill"
                      alt="not found image"
                      unoptimized
                    />
                  </button>
                )}
              </div>
              <Timer />
              <Content
                content="Passports: August 8 @ 8am EST • Cre8orlist: August 9 @ 8am EST • Public Sale : August 10 8am EST"
                className="!text-[6px] xl:!text-[13px] pt-[10px] samsungS8:pt-[20px] xl:pb-0"
              />
              <Button
                id="apply_now_board"
                className="mt-[10px] samsungS8:mt-[25px] xl:mt-[90px]
              rounded-[12px]
              text-[16px] xl:text-[30px]
              !px-0 !py-0
              xl:w-[308px] xl:h-[88px]
              w-[145px] h-[35px]"
                onClick={() => window.open("https://everythingcorp.cre8ors.com/quiz", "_blank")}
              >
                Apply now
              </Button>
              <div
                className="pt-[15px] xs:pt-[20px] xl:pt-[27px] 
            flex justify-center items-center gap-x-[10px]"
              >
                <Content
                  className="!text-[15px] xl:!text-[18px]"
                  content="Scroll down to learn more"
                />
                <Media
                  link="/assets/Mint/MintNow/down-arrow.svg"
                  type="image"
                  containerClasses="w-[15px] h-[15px]"
                  blurLink="/assets/Mint/MintNow/down-arrow.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="xl:block hidden">
            <Character
              link="/assets/Mint/MintNow/character.png"
              originWidth={345.89}
              originHeight={692.14}
              className="!absolute bottom-0 left-0"
              screenWidth={1440}
            />
          </div>
        </div>
      </SectionContainer>
    </>
  )
}

export default PreMintBoard
