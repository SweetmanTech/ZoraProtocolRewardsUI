import { useMediaQuery } from "usehooks-ts"
import { FC } from "react"
import Title from "../Common/Title"
import Content from "../Common/Content"
import { Button } from "../../shared/Button"
import { STATUS } from "./Status"

interface StartTrainingProps {
  handleStep: (step: string) => void
}

const StartTraining: FC<StartTrainingProps> = ({ handleStep }) => {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div
      className="max-w-[1280px] flex-grow flex flex-col justify-end md:flex-row items-center 
            pb-[180px] samsungS8:pb-[220px] xs:pb-[290px] md:pb-0 relative z-[100]"
    >
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <div className="flex justify-center items-center md:justify-start">
          <div className="dark:bg-[#00000069] rounded-[20px] pt-[40px] pb-[20px] md:py-[40px]">
            <Title
              text={`The Warehouse\nis Where All the\nCre8ors... Create`}
              className="leading-[102.3%]
                      !px-6 md:!px-12 md:!pb-6
                      text-center md:text-left fade_in_text"
            />
            <div className="flex justify-center md:justify-start fade_in_text">
              <Content
                content={
                  !isMobile
                    ? `Just outside the Black & White city stands The Warehouse.\nAn abandoned imagination factory that the Cre8ors call\nhome. This is their safe haven and HQ. A place for free-\nthinking, art, ingenuity and experimentation.`
                    : `Just outside the Black & White city\nstands The Warehouse. An abandoned\nimagination factory that the Cre8ors\ncall home. This is their safe haven and\nHQ. A place for free-thinking, art,\ningenuity and experimentation.`
                }
                className="leading-[102.3%]
                            !p-4 md:!px-12 md:!pb-6
                            text-center md:text-left"
              />
            </div>
            <div className="flex justify-center md:justify-start fade_in_text">
              <Content
                content={
                  isMobile
                    ? `Enter the warehouse by training\n(soft-staking) your Cre8or to\nbegin unlocking AI, badges, and\nearning rewards (like new dApps,\nmerch, and more.)`
                    : `Enter the warehouse by training (soft-staking) your\nCre8ors to begin unlocking AI, badges, and earning\nrewards(like access to new dApps, merch, and more.)`
                }
                className="leading-[102.3%] 
                            !p-4 md:!px-12 md:!pb-6
                            text-center md:text-left"
              />
            </div>
            <div
              className="relative w-full !p-4 md:!px-12
                        flex justify-center md:justify-start fade_in_text"
            >
              <Button
                id="stake_btn"
                className="w-[200px] md:h-[46px] rounded-[6px]"
                onClick={() => handleStep(STATUS.SELECT)}
              >
                Start Training
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartTraining
