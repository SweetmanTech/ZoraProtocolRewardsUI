import { FC } from "react"
import Media from "../../shared/Media"
import Content from "../Common/Content"
import Title from "../Common/Title"

interface LoadingProps {
  content: string
}

const Loading: FC<LoadingProps> = ({ content }) => (
  <div
    className="max-w-[1280px] flex-grow flex flex-col justify-end md:flex-row items-center 
            pb-[180px] samsungS8:pb-[220px] xs:pb-[290px] md:pb-0 relative z-[100]"
  >
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      <div className="flex justify-start items-center">
        <div
          className="dark:bg-black rounded-[20px] px-[50px] py-[40px] md:py-[80px] md:px-20 
        w-[280px] samsungS8:w-[320px] xl:min-w-[517px]"
        >
          <Title
            text="LOADING..."
            className="leading-[102.3%]
                      !text-[28px] samsungS8:!text-[30px] xs:!text-[33px] md:!text-[51px]
                      text-center fade_in_text"
          />
          <div className="flex justify-center py-[30px]">
            <Media
              link="/assets/Common/loading.svg"
              type="image"
              containerClasses="w-[200px] h-[200px]"
            />
          </div>
          <Content
            content={content}
            className="text-center
                        leading-[103.3%]
                        samsungS8:!text-[18px] md:!text-[26px] !font-bold"
          />
        </div>
      </div>
    </div>
  </div>
)

export default Loading
