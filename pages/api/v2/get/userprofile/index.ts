import { Query, createHandler, Get } from "next-api-decorators"
import { getUserProfile } from "../../../../../helpers/userProfile.db"

class GetUserProfile {
  @Get()
  async get(@Query("walletAddress") walletAddress: string) {
    const doc = await getUserProfile(walletAddress)
    return doc
  }
}

export default createHandler(GetUserProfile)
