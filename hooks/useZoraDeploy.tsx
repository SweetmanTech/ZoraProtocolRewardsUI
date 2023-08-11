import { Contract } from "ethers"
import { useNetwork } from "wagmi"
import abi from "../lib/abi-ZoraNFTCreatorProxy.json"
import { useEthersSigner } from "../lib/useEthersSigner"
import getZoraNFTCreatorProxyAddress from "../lib/getZoraNFTCreatorProxyAddress"

const useZoraDeploy = () => {
  const signer = useEthersSigner()
  const { chain } = useNetwork()

  const createEditionWithReferral = async () => {
    const zoraNFTCreatorProxyAddres = getZoraNFTCreatorProxyAddress(chain?.id)
    console.log("create contract", zoraNFTCreatorProxyAddres)
    const contract = new Contract(zoraNFTCreatorProxyAddres, abi, signer)
    const name = await contract.contractName()
    console.log("call createEditionWithReferral", name)
  }

  return {
    createEditionWithReferral,
  }
}

export default useZoraDeploy
