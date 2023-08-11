/* eslint-disable class-methods-use-this */
import { ethers } from "ethers"
import { createHandler, Get, Query } from "next-api-decorators"

class GetTxLogs {
  @Get()
  async getTxLogs(@Query("txHash") txHash: string, @Query("chainId") chainId: string) {
    const provider = new ethers.providers.AlchemyProvider(
      Number(chainId),
      process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    )
    const txLogs = await provider.getTransactionReceipt(txHash)
    if (txLogs && txLogs.blockNumber) {
      return txLogs
    }
    return false
  }
}

export default createHandler(GetTxLogs)
