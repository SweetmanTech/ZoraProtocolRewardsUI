import Image from "next/image"
import { useState } from "react"
import { useTheme } from "../../providers/ThemeProvider"
import { Button } from "../../shared/Button"
import SectionTitle from "../LandingPage/SectionTitle"
import Layout from "../Layout"
import Input from "../../shared/Input"
import createTweet from "../../lib/createTweet"
import VerifyButton from "./VerifyButton"

const AllowListVerifyPage = () => {
  const { themeMode } = useTheme()
  const [twitterUrl, setTwitterUrl] = useState("")

  const onChangeTwitterUrl = (e: any) => {
    setTwitterUrl(e.target.value)
  }

  const handleTweetClick = () => {
    createTweet(
      `I just applied for the @cre8orsNFT allowlist by taking a personality test. Check it out https://everythingcorp.cre8ors.com`,
    )
  }

  return (
    <Layout type="contained">
      <div
        className="relative w-[100%] min-h-[100vh]
                pt-[150px] md:pt-[200px]
                flex flex-col items-center gap-y-[40px] md:gap-y-[50px]
            "
      >
        <SectionTitle
          text="Move up your application"
          className="mx-[8px] xs:m-6 
                    w-[100%] xs:w-[500px] md:w-[650px]
                    text-[25px] samsungS8:!text-[36px] xs:!text-[40px] md:!text-[65px] mb-4
                    text-center
                    md:leading-[102.3%]"
        />
        <div className="grid gird-cols-1 md:grid-cols-2 gap-y-[20px] md:gap-x-[120px]">
          <div
            className="flex items-center min-w-[306px]
                    justify-center md:justify-start
                    text-black dark:text-white
                    text-[15px] samsungS8:text-[19px] font-medium font-quicksand"
          >
            Step 1: Share your application
          </div>
          <div className="flex justify-center md:justify-start">
            <Button
              id="send_tweet_btn"
              onClick={handleTweetClick}
              className="!uppercase
                            md:w-[291px] md:h-[46px]
                            w-[280px] h-[40px]"
            >
              <Image
                src={
                  themeMode === "light"
                    ? "/assets/Claim/Success/twitter.svg"
                    : "/assets/Claim/Success/dark_twitter.svg"
                }
                width={21}
                height={17}
                alt="not found image"
              />
              Send Tweet
            </Button>
          </div>
        </div>
        <div className="grid gird-cols-1 md:grid-cols-2 gap-y-[20px] md:gap-x-[120px]">
          <div
            className="flex items-center min-w-[306px]
                    justify-center md:justify-start
                    text-[15px] samsungS8:text-[19px] 
                    text-black dark:text-white
                    font-medium font-quicksand"
          >
            Step 2: Copy & Paste Tweet URL
          </div>
          <div className="flex justify-center md:justify-start">
            <Input
              id="newsletter_input"
              value={twitterUrl}
              onChange={onChangeTwitterUrl}
              placeholder="Copy & Paste Link To Tweet"
              className="font-quicksand 
                                text-[12px] xs:text-[14px] 
                                !rounded-[5px]
                                bg-[white] md:bg-[#D0C6C6] dark:bg-[white]
                                h-[40px] md:h-[46px] w-[100%]"
              containerClassName="hover:scale-[1.1] scale-[1] transition duration-[250ms] 
                            md:w-[291px] md:h-[40px]
                            w-[280px] h-[40px]
                            bg-[white] md:bg-[#D0C6C6] dark:bg-[white]
                            !rounded-[5px]"
              hasDoubleAnimation
            />
          </div>
        </div>
        <VerifyButton tweet={twitterUrl} />
      </div>
    </Layout>
  )
}

export default AllowListVerifyPage
