/* eslint-disable class-methods-use-this */
import { createHandler, Post, Body, ValidationPipe } from "next-api-decorators"
import { AdminAuthGuard } from "../../../../middleware/auth.middleware"
import { updateStatus } from "../../../../helpers/db"
import { UpdateStatusDTO } from "../../../../DTO/updateStatus.dto"

class UpdateStatus {
  @Post()
  @AdminAuthGuard()
  async updateStatus(@Body(ValidationPipe) body: UpdateStatusDTO) {
    const { applicants, status } = body
    return updateStatus(applicants, status)
  }
}

export default createHandler(UpdateStatus)
