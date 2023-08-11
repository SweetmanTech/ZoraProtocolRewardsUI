import dynamic from "next/dynamic"
import ChatButton from "./components/ChatButton"
import { useChatProvider } from "../../providers/ChatProvider"
import ChatLogin from "./components/ChatLogin"

const ChatBox = dynamic(() => import("./components/ChatBox"), { ssr: true })

const Chat = () => {
  const { openChat, loggedIn } = useChatProvider()

  return (
    <div className="fixed z-40 bottom-4 right-8">
      <div className="flex space-x-4">
        <ChatButton />
        {openChat && loggedIn && <ChatBox />}
        {openChat && !loggedIn && <ChatLogin />}
      </div>
    </div>
  )
}

export default Chat
