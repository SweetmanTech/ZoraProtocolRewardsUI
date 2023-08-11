import { createHandler, Query, Get } from "next-api-decorators"
import { getAllowListApplicant } from "../../../../helpers/db"

class GetApplicant {
  @Get()
  async getAllowlistApplicantByTwitterHandle(@Query("address") address: string) {
    try {
      const applicant = await getAllowListApplicant(address)
      return { ...applicant, address }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      return { success: false, address, err }
    }
  }
}

export default createHandler(GetApplicant)
