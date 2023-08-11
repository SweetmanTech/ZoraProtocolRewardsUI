import { useState } from "react"
import { useChatProvider } from "../../../../providers/ChatProvider"
import ChatBoxAction from "../ChatBoxAction"
import UserInfo from "../UserInfo"
import MyMessage from "../MyMessage"
import OtherMessage from "../OtherMessage"
import ChatSendAction from "../ChatSendAction"
import ChatBoxInput from "../ChatBoxInput"
/* eslint-disable @next/next/no-img-element */
const ChatBox = () => {
  const [newMessage, setNewMessage] = useState("")
  const { messages, ably, messageEnd, sendChatMessage, setOpenChat } = useChatProvider()

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value)
  }
  const handleSendMessage = () => {
    sendChatMessage(newMessage)
    setNewMessage("")
  }

  return (
    <div className="flex flex-col bg-white rounded-[20px] overflow-hidden border shadow-[3px_4px_4px_rgba(0,0,0,0.25)] lg:md:w-[400px] w-72 lg:md:h-[600px] h-96">
      <div className="flex items-center justify-between px-2 py-2 shadow-[3px_4px_4px_rgba(0,0,0,0.25)]">
        <UserInfo />
        <ChatBoxAction setOpenChat={setOpenChat} />
      </div>

      <div className="flex-1 h-full px-4 py-4 overflow-y-auto">
        {messages.map((message) => {
          if (message.connectionId === ably.connection.id) {
            return <MyMessage message={JSON.parse(message.data)} key={message} />
          }
          return <OtherMessage message={JSON.parse(message.data)} key={message} />
        })}
        <div
          ref={(element) => {
            messageEnd.current = element
          }}
        />
      </div>

      <div className="flex items-center p-2 shadow-[3px_-4px_4px_rgba(0,0,0,0.25)]">
        <ChatBoxInput
          handleNewMessageChange={handleNewMessageChange}
          newMessage={newMessage}
          handleSendMessage={handleSendMessage}
        />
        <ChatSendAction handleSendMessage={handleSendMessage} newMessage={newMessage} />
      </div>
    </div>
  )
}
// <!-- end chat box -->

export default ChatBox
