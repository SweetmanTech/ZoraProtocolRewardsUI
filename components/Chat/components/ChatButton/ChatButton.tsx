import Image from "next/image"
import customLoader from "../../../../lib/customLoader"
import { useChatProvider } from "../../../../providers/ChatProvider"

const ChatButton = () => {
  const { openChat, setOpenChat } = useChatProvider()
  return (
    !openChat && (
      <button type="button" onClick={() => setOpenChat(true)}>
        <Image
          src="/chatbox/CHATBUBBLE.svg"
          alt="Chat"
          width={40}
          height={40}
          loader={customLoader}
        />
      </button>
    )
  )
}

export default ChatButton
