import { Button } from "../../../../shared/Button"

const ChatBoxAction = ({ setOpenChat }) => (
  <div className="absolute right-[20px] top-[20px]">
    <Button
      id="chat_action_btn"
      className="!py-[2px] !px-4 hover:scale-[1.2] !bg-[black] !text-white !shadow-[0px_4px_4px_rgb(0,0,0,0.25)]"
      onClick={() => setOpenChat(false)}
    >
      -
    </Button>
  </div>
)

export default ChatBoxAction
