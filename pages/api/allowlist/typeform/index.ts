import { error } from "console"
import { createHandler, Post, Body } from "next-api-decorators"
import { addAllowListApplicant, typeformResponseExists } from "../../../../helpers/db"
import { ApplicantDTO } from "../../../../DTO/applicant.dto"

const getResponse = async (responseId) => {
  const headers = {
    Authorization: `Bearer ${process.env.TF_TOKEN_READ_RESPONSES}`,
  }
  const url = `https://api.typeform.com/forms/${process.env.NEXT_PUBLIC_TYPEFORM_ID}/responses`
  return fetch(`${url}?included_response_ids=${responseId}`, { headers })
}

const idToKey = {
  "7Q1OU08DnwDd": "walletAddress",
  ht0M1DEcNdDa: "reason",
  "4OB9BFA7WtRq": "twitterHandle",
  gRvt5M4h61ag: "outcomeChoice",
}

const fieldsOfInterest = Object.keys(idToKey)
type ResponseData = {
  responseId?: string
  walletAddress?: string
  reason?: string
  twitterHandle?: string
  outcomeChoice?: string
  creatorType?: string
}
const parseCre8orType = (outcome: { id: string; ref: string; title: string }) =>
  outcome.title.split("\n").pop()
class TypeformResponseHandler {
  @Post()
  async addApplicantToDB(@Body() body: { responseId: string }) {
    const { responseId } = body
    const typeformExits = await typeformResponseExists(responseId)
    if (typeformExits) return new Error("Response already exists")

    const response = await getResponse(responseId)
    const data = await response.json()
    if (!data?.items[0]?.answers) return new Error("No response found")
    const responsesOfInterest = data?.items[0].answers.filter((item) =>
      fieldsOfInterest.includes(item.field.id),
    )
    const responseData: ResponseData = {}
    responseData.responseId = responseId
    for (let i = 0; i < responsesOfInterest.length; i += 1) {
      const field = responsesOfInterest[i]
      responseData[idToKey[field.field.id]] = field?.choice?.label || field.text
    }
    const cre8or = parseCre8orType(data?.items[0]?.outcome)
    responseData.creatorType = cre8or
    try {
      await addAllowListApplicant(responseData as ApplicantDTO)
    } catch (e) {
      error("Something went wrong: ", e.message)
    }

    return responseData
  }
}

export default createHandler(TypeformResponseHandler)
