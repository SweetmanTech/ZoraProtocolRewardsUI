/* eslint-disable class-methods-use-this */
import { createHandler, Post, Body } from "next-api-decorators"
import { UpdateTokenIDDTO } from "../../../../DTO/updateTokenID.dto"
import { addTokenIdToAllowListApplicant } from "../../../../helpers/db"
import { AllowListAuthGuard } from "../../../../middleware/auth.middleware"

class AddTokenID {
  @Post()
  @AllowListAuthGuard()
  async addTokenID(@Body() body: UpdateTokenIDDTO) {
    const { tokenID, walletAddress } = body
    return addTokenIdToAllowListApplicant(walletAddress, tokenID)
  }
}

export default createHandler(AddTokenID)
