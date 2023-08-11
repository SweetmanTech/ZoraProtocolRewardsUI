import axios from "axios"
import { createHandler, Post, Body } from "next-api-decorators"

class SubscribeNewletter {
  @Post()
  async subscribe(@Body() body: { email: string }) {
    const postUrl = `https://api.beehiiv.com/v2/publications/${process.env.BEEHIVE_PUBLICATION_ID}/subscriptions`
    try {
      const response = await axios.post(
        postUrl,
        {
          email: body.email,
          referring_site: "https://cre8ors.com",
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.BEEHIVE_API_KEY}`,
            "Content-Type": "application/json",
          },
        },
      )
      return { status: "success", message: response.data }
    } catch (error) {
      return { status: "error", message: error.message }
    }
  }
}

export default createHandler(SubscribeNewletter)
