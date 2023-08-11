import { signIn } from "next-auth/react"
import WalletConnectButton from "../../../WalletConnectButton"
import ChatBoxAction from "../ChatBoxAction"
import { useChatProvider } from "../../../../providers/ChatProvider"
import { Button } from "../../../../shared/Button"

const ChatLogin = () => {
  const { setOpenChat, setUserType } = useChatProvider()
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-2 bg-white rounded-[20px] shadow-[3px_4px_4px_rgba(0,0,0,0.25)] w-[400px] h-[450px] relative">
      <ChatBoxAction setOpenChat={() => setOpenChat(false)} />
      <div className="text-[35px] leading-[103.3%] text-center font-eigerdals pt-[20px] pb-[25px]">
        Login to <br /> start chatting
      </div>
      <Button
        id="login_with_twitter_in_chat_box"
        className="!capitalize min-w-[150px] !bg-[black] !text-white !shadow-[0px_4px_4px_rgb(0,0,0,0.25)]"
        onClick={() => {
          setUserType("twitter")
          signIn("twitter", { callbackUrl: `${window.location.pathname}` })
        }}
      >
        Twitter
      </Button>
      <WalletConnectButton>
        <Button
          id="wallet_connect_btn_in_chat_box"
          onClick={() => setUserType("wallet")}
          className="!capitalize min-w-[150px] !bg-[black] !text-white !shadow-[0px_4px_4px_rgb(0,0,0,0.25)]"
        >
          Wallet
        </Button>
      </WalletConnectButton>
      <Button
        id="annoymouse"
        onClick={() => setUserType("anonymous")}
        className="!capitalize min-w-[150px] !bg-[black] !text-white !shadow-[0px_4px_4px_rgb(0,0,0,0.25)]"
      >
        Annoymous
      </Button>
    </div>
  )
}

export default ChatLogin
