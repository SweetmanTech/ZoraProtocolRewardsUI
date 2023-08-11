/* eslint-disable class-methods-use-this */
import { createHandler, Get } from "next-api-decorators"

const getTypeformInfo = async () => {
  const headers = {
    Authorization: `Bearer ${process.env.TF_TOKEN_READ_RESPONSES}`,
  }
  const url = `https://api.typeform.com/forms/${process.env.NEXT_PUBLIC_TYPEFORM_ID}`
  return fetch(`${url}`, { headers })
}

interface ThankYouScreenProperties {
  show_button: boolean
  share_icons: boolean
  button_mode: string
  button_text: string
  description?: string
}
interface ThankYouScreenAttachment {
  type: string
  href: string
}
interface ThankYouScreen {
  id: string
  ref: string
  title: string
  type: string
  properties: ThankYouScreenProperties
  attachment: ThankYouScreenAttachment
}
const mapTitleToDescrition = (data: ThankYouScreen[]) => {
  const map = []
  data.forEach((item) => {
    map.push({
      title: item.title,
      description: item.properties.description,
    })
  })
  map.pop()
  return map
}
class TypeformInfoHandler {
  @Get()
  async getTypeformData() {
    const response = await getTypeformInfo()
    const data = await response.json()
    const mappedData = mapTitleToDescrition(data.thankyou_screens)
    return mappedData
  }
}

export default createHandler(TypeformInfoHandler)
