import { toast } from "react-toastify"
import { useNetwork, useSwitchNetwork } from "wagmi"
import { mainnet, polygon, goerli, polygonMumbai } from "@wagmi/core/chains"

function useCheckNetwork() {
  const { chain: activeChain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()

  const checkNetwork = () => {
    if (activeChain?.id !== parseInt(process.env.NEXT_PUBLIC_CHAIN_ID, 10)) {
      switchNetwork(parseInt(process.env.NEXT_PUBLIC_CHAIN_ID, 10))
      const allChains = [mainnet, goerli, polygon, polygonMumbai]
      const myChain = allChains.find(
        (blockchain) => blockchain.id === parseInt(process.env.NEXT_PUBLIC_CHAIN_ID, 10),
      )
      toast.error(`Please connect to ${myChain.name} and try again`)

      return false
    }

    return true
  }

  return { checkNetwork }
}

export default useCheckNetwork
