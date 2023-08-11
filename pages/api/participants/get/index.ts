import { createHandler, Get } from "next-api-decorators"
import * as _ from "lodash"
import { ParticipantsAuthGuard } from "../../../../middleware/auth.middleware"
/* eslint-disable class-methods-use-this */
import { getAllParticipants } from "../../../../helpers/db"

class GetParticipants {
  @Get()
  @ParticipantsAuthGuard()
  async handle() {
    const participants = await getAllParticipants()
    const addressToTwitter = _.reduce(
      participants,
      (acc, { walletAddress, twitterHandle }) => ({
        ...acc,
        [walletAddress.toLowerCase()]: twitterHandle,
      }),
      {},
    )
    return addressToTwitter
  }
}

export default createHandler(GetParticipants)
