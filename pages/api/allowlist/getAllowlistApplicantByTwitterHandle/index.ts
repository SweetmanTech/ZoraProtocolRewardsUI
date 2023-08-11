import { createHandler, Query, Get } from "next-api-decorators"
import { getAllowListApplicantByTwitterHandle } from "../../../../helpers/db"

class GetAllowlistApplicantByTwitterHandle {
  @Get()
  async getAllowlistApplicantByTwitterHandle(@Query("twitterHandle") twitterHandle: string) {
    try {
      const applicant = await getAllowListApplicantByTwitterHandle(twitterHandle)
      return { ...applicant, twitterHandle }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      return { success: false, twitterHandle, err }
    }
  }
}

export default createHandler(GetAllowlistApplicantByTwitterHandle)
