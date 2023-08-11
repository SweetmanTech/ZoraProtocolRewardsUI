import { createHandler, Post, Body, ValidationPipe } from "next-api-decorators"
import { TwitterApi } from "twitter-api-v2"
import { VerifyDTO } from "../../../../DTO/verify"
import {
  getAllowListApplicantByTwitterHandle,
  verifyAllowListApplicant,
} from "../../../../helpers/db"

const client = new TwitterApi(process.env.TWITTER_BEARER)

class Verify {
  @Post()
  async verify(@Body(ValidationPipe) body: VerifyDTO) {
    const { tweetUrl } = body
    const urlParts = tweetUrl.split("/")
    const urlIndex = urlParts.indexOf("twitter.com")
    const idIndex = urlParts.indexOf("status")
    const handle = urlParts[urlIndex + 1]
    let tweetId = urlParts[idIndex + 1]
    const questionIndex = tweetId.indexOf("?")
    if (questionIndex >= 0) {
      tweetId = tweetId.substring(0, questionIndex)
    }
    if (!tweetId) {
      return { success: false, tweetUrl, err: { title: "please use a valid tweet" } }
    }
    try {
      const readOnlyClient = client.readOnly
      const data = await readOnlyClient.v2.singleTweet(tweetId)
      const tweetBody = data?.data?.text?.toLowerCase?.()
      const isVerifiable =
        tweetBody.includes("everythingcorp.cre8ors.com") ||
        tweetBody.includes("@cre8orsnft allowlist")
      if (!isVerifiable) return { success: false, tweetUrl, err: { title: "tweet incorrect" } }
      let applicant = (await getAllowListApplicantByTwitterHandle(handle)) as any
      if (!applicant) {
        applicant = (await getAllowListApplicantByTwitterHandle(`@${handle}`)) as any
        if (!applicant) {
          return {
            success: false,
            tweetUrl,
            err: { title: `twitter handle "${handle}" has not taken the quiz yet` },
          }
        }
      }
      applicant = await verifyAllowListApplicant(applicant.walletAddress, true)
      return { ...applicant, tweetUrl }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      return { success: false, tweetUrl, err }
    }
  }
}

export default createHandler(Verify)
