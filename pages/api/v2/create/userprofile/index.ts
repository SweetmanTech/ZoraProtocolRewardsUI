import { createHandler, Post, Body } from "next-api-decorators"
import { UserProfileDTO } from "../../../../../DTO/userprofile.dto"
import { addUserProfile } from "../../../../../helpers/userProfile.db"

class CreateUserProfile {
  @Post()
  async create(@Body() body: UserProfileDTO) {
    const result = await addUserProfile(body)
    return result
  }
}

export default createHandler(CreateUserProfile)
