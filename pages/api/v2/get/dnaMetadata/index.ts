import { createHandler, Get, Query } from "next-api-decorators"
import axios from "axios"
import _ from "lodash"
import getAlchemyBaseUrl from "../../../../../lib/alchemy/getAlchemyBaseUrl"
import { getAllowListApplicantByWalletAddress } from "../../../../../helpers/db"

const mapEvilToGood = (evil: string) => {
  switch (evil) {
    case "The Delegator":
      return "musician"
    case "The Pragmatic":
      return "engineer"
    case "The Kinesthetic":
      return "dancer"
    case "The Deviser":
      return "director"
    case "The Communicator":
      return "writer"
    case "The Catalyst":
      return "thespian"
    case "The Idealist":
      return "photographer"
    case "The Generator":
      return "designer"
    default:
      return "OTHER"
  }
}
const DNA_CARDS = {
  designer: "bafybeih2rqxqohp2bcam3hk37fmqwx6viooehj3sfqd5k5l7ajf56fml4q",
  dancer: "bafybeiflc2upm6uf7qceepukpdfgwvfflpnfk2mqrsmobq3ubeauqetvga",
  director: "bafybeigkfaaqgpdjtebhb55av3imfr4lg54jdhfrpboldylxu7ai73ow3m",
  engineer: "bafybeibc2ng3fgdtqzvndgwrdiw3eeiyxkqm2kbxhduhezfc7xrxtz3xdy",
  musician: "bafybeiaay37ooho2mffpzdpaxyaxo3mygvq4z66dcgwjvv74zhmtdcsda4",
  photographer: "bafybeiai7oy5govoicchs5djl6pmjnqu7pqekyxkhzxbdsn4vawye33lbu",
  thespian: "bafybeiha2fxgeokomi4xkefy2odu24ei6fnhmkmnm434rygnau62ogcaou",
  writer: "bafybeiedtc4lf33nfadcjrzjmhp6h7rxe6ivwijsozndtu5kwrdvib6uzm",
}
class DnaMetaData {
  @Get()
  async get(@Query("tokenId") tokenId: string) {
    const base = getAlchemyBaseUrl(process.env.NEXT_PUBLIC_TESTNET ? 5 : 1)
    const baseURL = `${base}nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}/getOwnersForToken`
    const url = `${baseURL}?contractAddress=${process.env.NEXT_PUBLIC_CRE8ORS_ADDRESS}&tokenId=${tokenId}`

    const config = {
      method: "get",
      url,
    }

    const result = await axios(config)
    const owner = result?.data?.owners[0]
    if (owner === "0x0000000000000000000000000000000000000000") return null

    const data = await getAllowListApplicantByWalletAddress(owner)
    let dnaCard = null
    if (!data) {
      dnaCard = _.sample(Object.values(DNA_CARDS))
    }
    if (data?.creatorType) {
      const cre8orType = mapEvilToGood(data?.creatorType)
      dnaCard =
        cre8orType === "OTHER"
          ? _.sample(Object.values(DNA_CARDS))
          : DNA_CARDS[mapEvilToGood(data?.creatorType)]
    }
    const metadataObject = {
      name: "Cre8ors DNA Cards",
      description: "Against all odds, we shall live in color. ",
      image: `ipfs://${dnaCard}`,
    }
    return metadataObject
  }
}

export default createHandler(DnaMetaData)
