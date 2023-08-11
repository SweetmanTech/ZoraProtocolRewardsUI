import Media from "../../../shared/Media"
import { Button } from "../../../shared/Button"
import { useTheme } from "../../../providers/ThemeProvider"

interface ReserveProps {
  handleClose: () => void
}

const NoTicket = ({ handleClose }: ReserveProps) => {
  const { themeMode } = useTheme()

  return (
    <div
      className="dark:bg-[url('/assets/Common/popup.png')] bg-[url('/assets/Common/dark_popup.png')] 
              dark:bg-center bg-cover
              p-4 m-0 w-[290px] samsungS8:m-6 samsungS8:w-[340px] md:w-[400px] 
              h-[400px] md:h-[600px] 
              dark:shadow-[0px_5px_9px_rgba(255,255,255,0.25)] shadow-[0px_5px_9px_rgba(0,0,0,0.25)]
              rounded-[20px] flex flex-col justify-center items-center gap-[20px] relative"
    >
      <div
        className="dark:bg-[black] bg-white absolute top-[10px] right-[10px] w-6 h-6 m-2 rounded-full cursor-pointer
        flex justify-center items-center"
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
      <div
        className="font-eigerdals text-[30px] md:text-[36px] text-center leading-[99.3%]
      dark:text-black text-white
      drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]"
      >
        No Claim Tickets!
      </div>
      <Media
        link="/assets/Claim/ticket.svg"
        type="image"
        containerClasses="w-[300px] h-[150px] md:w-[280px] md:h-[300px]"
      />
      <Button
        type="button"
        id="go_btn_in_redeem"
        className="!uppercase w-[200px] 
        !bg-[white] !text-black dark:!bg-[black] dark:!text-[white]
        !shadow-[0px_4px_4px_rgb(255,255,255,0.25)] dark:!shadow-[0px_4px_4px_rgb(0,0,0,0.25)]
        z-[3] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <a href="https://reserve.cre8ors.com" target="_blank" rel="noreferrer">
          Reserve Now
        </a>
      </Button>
    </div>
  )
}

export default NoTicket
