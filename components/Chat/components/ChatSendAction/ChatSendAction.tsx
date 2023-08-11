import { Button } from "../../../../shared/Button"
import Icon from "../../../../shared/Icon"

const ChatSendAction = ({ handleSendMessage, newMessage }) => (
  <Button
    id="chat_send_btn"
    className="!px-2 !py-[8px] !bg-[black] !scale-[1]"
    onClick={() => handleSendMessage()}
    disabled={newMessage.length === 0}
  >
    <Icon name="arrowUp" raw color="white" size={20} />
  </Button>
)

export default ChatSendAction
