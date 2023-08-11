import { FC } from "react"
import Content from "../Common/Content"
import Title from "../Common/Title"
import ProfileForm from "./ProfileForm"

interface SaveProfileProps {
  handleStep: (step: string) => void
}

const SaveProfile: FC<SaveProfileProps> = ({ handleStep }) => (
  <div
    className="max-w-[1280px] flex-grow flex flex-col justify-start md:justify-end md:flex-row items-center 
          md:pb-0 relative z-[100]"
  >
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      <div className="flex justify-center items-center">
        <div className="dark:bg-black rounded-[20px] px-[30px] samsungS8:px-[50px] py-[30px] md:py-[40px] md:px-10">
          <Title
            text="ALMOST DONE!"
            className="leading-[102.3%]
                      !text-[28px] samsungS8:!text-[30px] xs:!text-[33px] md:!text-[51px]
                      text-center fade_in_text"
          />
          <Content
            content="Let's set up your profile."
            className="text-center
                        leading-[103.3%]
                        samsungS8:!text-[18px] md:!text-[26px] !font-bold"
          />
          <div className="w-full pt-[30px]">
            <ProfileForm handleStep={handleStep} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SaveProfile
