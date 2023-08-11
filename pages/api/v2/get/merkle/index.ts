import { createHandler, Get, Query } from "next-api-decorators"
import { getMerkleList } from "../../../../../helpers/merkleList.db"

class GetMerkle {
  @Get()
  async getMerkle(@Query("root") root: string, @Query("walletAddress") walletAddress: string) {
    const merkleProofs = await getMerkleList(root)

    if (!merkleProofs.sucess) {
      return { sucess: false, message: "Merkle root not found" }
    }
    const { entries } = merkleProofs.result
    const userEntry = entries.find(
      (entry) => entry.minter.toLowerCase() === walletAddress.toLowerCase(),
    )

    if (!userEntry) {
      return { success: false, message: "User not found" }
    }
    return { success: true, proof: userEntry?.proof }
  }
}

export default createHandler(GetMerkle)
