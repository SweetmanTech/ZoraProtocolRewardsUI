import { Contract } from "ethers"
import { toast } from "react-toastify"
import handleTxError from "./handleTxError"

export const processStaking = async (
  contract: Contract,
  tokenId: string | number,
  onSuccess: any,
  stake?: boolean,
  setIsProcessing?: (state: boolean) => void,
) => {
  try {
    setIsProcessing(true)
    const tx = await contract.toggleCre8ing([tokenId])
    await tx.wait()
    setIsProcessing(false)
    toast.success(`Successfully ${stake ? "staked" : "unstaked"}!`)
    await onSuccess()
  } catch (err) {
    handleTxError(err)
  }
}
