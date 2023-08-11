import { createHandler, Post, Body } from "next-api-decorators"
import { addParticipant } from "../../../../helpers/db"
/* eslint-disable class-methods-use-this */
import { ParticipantDTO } from "../../../../DTO/participant.dto"
import { ParticipantsAuthGuard } from "../../../../middleware/auth.middleware"

class AddNewRecord {
  @Post()
  @ParticipantsAuthGuard()
  async handle(@Body() body: ParticipantDTO) {
    const participants = await addParticipant(body)
    return participants
  }
}

export default createHandler(AddNewRecord)
