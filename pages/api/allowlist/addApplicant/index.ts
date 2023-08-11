import { createHandler, Post, Body } from "next-api-decorators"
import { addAllowListApplicant } from "../../../../helpers/db"
import { AdminAuthGuard } from "../../../../middleware/auth.middleware"

class AddApplicant {
  @Post()
  @AdminAuthGuard()
  async addApplicantToDB(
    @Body()
    body: {
      walletAddress: string
      reason: string
      twitterHandle: string
      creatorType: string
      status: string
    },
  ) {
    const response = await addAllowListApplicant(body)
    return response
  }
}

export default createHandler(AddApplicant)
