import Ably from "ably/promises"

const ablyHandler = async (req, res) => {
  const client = new Ably.Realtime(process.env.ABLY_API_KEY)
  const tokenRequestData = await client.auth.createTokenRequest({ clientId: req.query.clientId })
  res.status(200).json(tokenRequestData)
}

export default ablyHandler
