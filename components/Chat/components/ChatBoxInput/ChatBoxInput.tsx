const ChatBoxInput = ({ newMessage, handleNewMessageChange, handleSendMessage }) => (
  <div className="w-full focus:outline-none px-4">
    <input
      className="w-full h-10 p-2 text-black border-[3px] border-black rounded-md focus:border-black focus:ring-0"
      type="text"
      value={newMessage}
      placeholder="Aa"
      onChange={(e) => handleNewMessageChange(e)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.stopPropagation()
          e.preventDefault()
          handleSendMessage()
        }
      }}
    />
  </div>
)

export default ChatBoxInput
