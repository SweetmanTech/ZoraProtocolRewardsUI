import { createHandler, Post, Body } from "next-api-decorators"
import { ContactFormDTO } from "../../../DTO/contactform.dto"
/* eslint-disable class-methods-use-this */
import { addMessage } from "../../../helpers/db"

class AllData {
  @Post()
  async addMessageToDB(@Body() body: ContactFormDTO) {
    const result = await addMessage(body)
    return result
  }
}

export default createHandler(AllData)
