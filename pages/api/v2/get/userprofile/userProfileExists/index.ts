import { createHandler, Get, Query } from "next-api-decorators"
import { userProfileExists } from "../../../../../../helpers/userProfile.db"

class UserProfileExists {
  @Get()
  async get(@Query("walletAddress") walletAddress: string) {
    const doc = await userProfileExists(walletAddress)
    return doc
  }
}

export default createHandler(UserProfileExists)
