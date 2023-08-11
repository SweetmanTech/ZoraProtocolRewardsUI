import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import * as Ably from "ably/promises"
import { configureAbly } from "@ably-labs/react-hooks"
import { useSession } from "next-auth/react"
import { useAccount } from "wagmi"
import { ChatContext } from "./ChatContext"
import truncateEthAddress from "../lib/truncateEthAddress"

export const useChatProvider = () => useContext(ChatContext)

export const ChatProvider = ({ children }) => {
  const [openChat, setOpenChat] = useState(false)
  const [messages, setMessages] = useState([])
  const [channel, setChannel] = useState<Ably.Types.RealtimeChannelPromise | null>(null)
  const [ably, setAbly] = useState<Ably.Types.RealtimePromise | null>(null)
  const [userType, setUserType] = useState<"twitter" | "wallet" | "anonymous" | null>(null)
  const messageEnd = useRef(null)
  const [user, setUser] = useState(null)
  const { data: session }: any = useSession()
  const { address } = useAccount()
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    setLoggedIn(session?.user || address || userType === "anonymous")
    if (session?.user) {
      setUser({
        name: session.user.handle,
        avatar: session.user.image,
      })
    } else if (address) {
      setUser({
        name: truncateEthAddress(address),
      })
    }
  }, [session, address, userType])
  useEffect(() => {
    messageEnd?.current?.scrollIntoView({ behaviour: "smooth" })
  })
  useEffect(() => {
    const tempAbly: Ably.Types.RealtimePromise = configureAbly({
      authUrl: "/api/createTokenRequest",
    })

    const tempChannel = tempAbly.channels.get(`[?rewind=60s]cre8ors`)
    tempChannel.subscribe((message: Ably.Types.Message) => {
      const history = messages.slice(-199)
      setMessages([...history, message])
    })
    setChannel(tempChannel)
    setAbly(tempAbly)

    return () => {
      tempChannel.unsubscribe()
    }
  }, [setChannel, setMessages, messages])

  const sendChatMessage = useCallback(
    (message) => {
      channel.publish({
        name: "cre8ors",
        data: JSON.stringify({ message, user }),
      })
    },
    [channel, user],
  )
  const value = useMemo(
    () => ({
      openChat,
      setOpenChat,
      sendChatMessage,
      messages,
      channel,
      ably,
      messageEnd,
      userType,
      setUserType,
      loggedIn,
      user,
    }),
    [
      openChat,
      setOpenChat,
      sendChatMessage,
      messages,
      channel,
      ably,
      messageEnd,
      userType,
      setUserType,
      loggedIn,
      user,
    ],
  )
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}
