import { createHandler, Get, Query } from "next-api-decorators"

import { getSimilarProfiles } from "../../../../../../helpers/userProfile.db"

class SimilarProfiles {
  @Get()
  async get(@Query("walletAddress") walletAddress: string) {
    const doc = await getSimilarProfiles(walletAddress)
    return doc
  }
}

export default createHandler(SimilarProfiles)
