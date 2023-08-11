import { createHandler, Get, Query } from "next-api-decorators"

import { userNameExists } from "../../../../../../helpers/userProfile.db"

class UsernameExists {
  @Get()
  async get(@Query("username") username: string) {
    const doc = await userNameExists(username)
    return doc
  }
}

export default createHandler(UsernameExists)
