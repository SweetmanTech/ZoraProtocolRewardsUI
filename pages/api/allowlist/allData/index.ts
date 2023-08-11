/* eslint-disable class-methods-use-this */
import { createHandler, Get } from "next-api-decorators"
import { AllowListAuthGuard } from "../../../../middleware/auth.middleware"
import { getAllAllowListApplicants } from "../../../../helpers/db"

class AllData {
  @Get()
  @AllowListAuthGuard()
  async getAllData() {
    const result = await getAllAllowListApplicants()
    return result
  }
}

export default createHandler(AllData)
