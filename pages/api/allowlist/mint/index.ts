/* eslint-disable class-methods-use-this */
import axios from "axios"
import { createHandler, Post, Body, ValidationPipe } from "next-api-decorators"
import { ethers } from "ethers"
import { getAllowListApplicant, updateAllowListApplicantResponseIds } from "../../../../helpers/db"
import { ApplicantDTO } from "../../../../DTO/applicant.dto"
import abi from "../../../../lib/abi-allow-list.json"
import { AllowListAuthGuard } from "../../../../middleware/auth.middleware"

const getAddress = async (address?: string) => {
  if (!address) return null
  if (ethers.utils.isAddress(address)) return address
  const provider = new ethers.providers.AlchemyProvider(1, process.env.NEXT_PUBLIC_ALCHEMY_API_KEY)
  return provider.resolveName(address)
}
class Mint {
  @Post()
  @AllowListAuthGuard()
  async mint(@Body(ValidationPipe) body: ApplicantDTO) {
    try {
      const contractAddress = process.env.NEXT_PUBLIC_ALLOWLIST_CONTRACT_ADDRESS
      const result = await getAllowListApplicant(body.walletAddress)
      if (result) {
        await updateAllowListApplicantResponseIds(body.walletAddress, {
          creatorType: body.creatorType,
          responseId: body.responseId,
        })
      }
      const { walletAddress, reason } = body
      const response = await axios.post(process.env.DEFENDER_AUTOTASK_WEBHOOK, {
        description: reason,
        recipient: await getAddress(walletAddress),
        abi,
        contractAddress,
      })
      const txReceipt = JSON.parse(response.data.result).hash
      return { txReceipt }
    } catch (err) {
      throw new Error(err)
    }
  }
}
export default createHandler(Mint)
