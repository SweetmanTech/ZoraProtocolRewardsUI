import { useMediaQuery } from "usehooks-ts"
import { useEffect, useState } from "react"
import { useAccount } from "wagmi"
import { useRouter } from "next/router"
import axios from "axios"
import { TwitterTweetEmbed } from "react-twitter-embed"
import Layout from "../Layout"
import Status from "./Status"
import getApplicant from "../../lib/getApplicant"
import CustomConnectWallet from "../CustomConnectWallet"
import AllowlistStatusButton from "./AllowlistStatusButton"

const AllowListStatusPage = () => {
  const { address } = useAccount()
  const router = useRouter()
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [applicant, setApplicant] = useState({} as any)
  const status = applicant?.status
  const { responseId } = router.query

  useEffect(() => {
    if (!responseId) return
    const checkStatus = async () => {
      await axios.post("/api/allowlist/typeform", { responseId })
    }
    checkStatus()
  }, [responseId])

  useEffect(() => {
    const init = async () => {
      const response = await getApplicant(address)
      setApplicant(response)
    }
    if (!address) return
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address])

  return (
    <Layout type="contained">
      <div
        className="relative w-[100%] min-h-[100vh]
                  pt-[150px] md:pt-[250px]
                  flex flex-col items-center gap-y-[20px] md:gap-y-[20px]"
      >
        <pre
          className="!m-0
                      font-eigerdals font-bold
                      w-[100%]
                      !text-[30px] samsungS8:!text-[35px] xs:!text-[40px] md:!text-[50px] lg:!text-[65px] mb-4
                      text-center text-black dark:text-white
                      leading-[94.3%] md:leading-[102.3%]"
        >
          {isMobile ? "Allowlist\nApplications Status" : "Allowlist Applications Status"}
        </pre>
        <div
          className="!m-0
                      font-quicksand font-medium
                      w-[100%]
                      !text-[19px]
                      text-black dark:text-white
                      text-center
                      leading-[99.3%]"
        >
          {isMobile ? (
            <>
              Make sure the same wallet you
              <br />
              applied with is connected
            </>
          ) : (
            "Make sure the same wallet you applied with is connected."
          )}
        </div>
        {!address && <CustomConnectWallet />}
        {address && status && applicant?.tweetId && (
          <TwitterTweetEmbed tweetId={applicant?.tweetId} />
        )}
        {address && status && <Status status={status} />}

        {address && !status && (
          <AllowlistStatusButton
            onClick={() => router.push("https://everythingcorp.cre8ors.com/quiz")}
          />
        )}
        {address && status && !applicant?.isVerified && (
          <AllowlistStatusButton
            text="share on twitter"
            onClick={() => router.push("/status/verify")}
          />
        )}
        {address && status && !applicant?.isVerified && (
          <div>Move your application up by sharing it on Twitter</div>
        )}
      </div>
    </Layout>
  )
}

export default AllowListStatusPage
