import { createHandler, Post, Body } from "next-api-decorators"

class Log {
  @Post()
  async log(@Body() body: any) {
    // eslint-disable-next-line no-console
    console.log(body)
    return body
  }
}

export default createHandler(Log)
