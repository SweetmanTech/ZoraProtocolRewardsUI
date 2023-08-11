import { Button } from "../../shared/Button"
import { useTheme } from "../../providers/ThemeProvider"
import Media from "../../shared/Media"

interface BurnModalProps {
  handleClose: () => void
}

const AllowListModal = ({ handleClose }: BurnModalProps) => {
  const { themeMode } = useTheme()

  return (
    <div
      className="bg-[white]
              w-[290px] samsungS8:w-[340px] md:!w-[400px]
              h-[400px] md:h-[452px] 
              dark:shadow-[0px_5px_9px_rgba(255,255,255,0.25)] shadow-[0px_5px_9px_rgba(0,0,0,0.25)]
              rounded-[20px] flex flex-col justify-center items-center gap-[20px] relative
              overflow-hidden"
    >
      <div
        className="absolute
        dark:bg-[url('/assets/Common/popup.png')] bg-[url('/assets/Common/allowlist_popup_bg.png')] 
        bg-center bg-cover
        w-[100%] h-[100%] z-[1]"
      />
      <div
        className="bg-white dark:bg-[black] absolute top-[10px] right-[10px] w-6 h-6 m-2 rounded-full cursor-pointer
        flex justify-center items-center z-[5]"
      >
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleClose}
        >
          <line
            x1="2.84836"
            y1="1.77502"
            x2="10.273"
            y2="9.19965"
            stroke="url(#paint0_linear_1383_155)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="2.72705"
            y1="9.1996"
            x2="10.1517"
            y2="1.77498"
            stroke="url(#paint1_linear_1383_155)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1383_155"
              x1="5.50001"
              y1="6.548"
              x2="4.7929"
              y2="7.2551"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.40625" stopColor={`${themeMode === "dark" ? "white" : "black"}`} />
              <stop offset="0.578125" stopColor="#8D8DDA" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1383_155"
              x1="7.50002"
              y1="6.54795"
              x2="8.20713"
              y2="7.25506"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.40625" stopColor={`${themeMode === "dark" ? "white" : "black"}`} />
              <stop offset="0.578125" stopColor="#8D8DDA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative w-full h-[100%] flex justify-center items-center z-[2] bg-[#00000061] dark:bg-[transparent]">
        <div className="text-[30px] font-aldrich text-white dark:text-black text-center leading-[80.3%]">
          Take the
          <br />
          Personality Test
        </div>
      </div>
      <div
        className="absolute top-0 left-0 w-[100%] h-[100%] z-[4] flex flex-col justify-between items-center
        pt-20 pb-12
      "
      >
        <Media
          type="image"
          link={
            themeMode === "light"
              ? "/assets/Common/modal_logo.png"
              : "/assets/Common/dark_modal_logo.png"
          }
          containerClasses="w-[234px] h-[65px]"
        />
        <Media
          type="image"
          link="/assets/Common/letter.png"
          containerClasses="w-[400px] h-[175px]"
        />
        <Button
          id="to_allowlist_btn"
          className="!bg-[white] !text-black dark:!bg-[black] dark:!text-[white]"
          onClick={() => {
            window.open("https://everythingcorp.cre8ors.com/quiz")
            handleClose()
          }}
        >
          Go
        </Button>
      </div>
    </div>
  )
}

export default AllowListModal
