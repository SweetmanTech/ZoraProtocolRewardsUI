import { createHandler, Delete, Query } from "next-api-decorators"
import { deleteAllowListApplicant } from "../../../../helpers/db"
import { AdminAuthGuard } from "../../../../middleware/auth.middleware"

class DeleteApplicant {
  @Delete()
  @AdminAuthGuard()
  async get(@Query("id") id: string) {
    await deleteAllowListApplicant(id)
  }
}

export default createHandler(DeleteApplicant)
