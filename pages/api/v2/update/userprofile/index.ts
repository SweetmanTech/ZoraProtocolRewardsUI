import { createHandler, Put, Body } from "next-api-decorators"
import { UserProfileDTO } from "../../../../../DTO/userprofile.dto"
import { updateUserProfile } from "../../../../../helpers/userProfile.db"

class UpdateUserProfile {
  @Put()
  async update(@Body() body: UserProfileDTO) {
    const result = await updateUserProfile(body)
    return result
  }
}

export default createHandler(UpdateUserProfile)
