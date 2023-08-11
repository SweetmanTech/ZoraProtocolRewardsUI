import { ConnectButton } from "@rainbow-me/rainbowkit"
import DeployButton from "../DeployButton"

const HomePage = () => (
  <div className="min-h-screen flex items-center justify-center text-white flex flex-col gap-10">
    <ConnectButton />
    <DeployButton />
  </div>
)

export default HomePage
