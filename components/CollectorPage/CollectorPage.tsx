import { useEffect, useState } from "react"
import { BigNumber } from "ethers"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import ImageCard from "./ImageCard"
import balanceOfParticipationRewards from "../../lib/balanceOfParticipationRewards"
import truncateEthAddress from "../../lib/truncateEthAddress"
import PFP from "../PFP"
import getAnniversary from "../../lib/getAnniversary"
import epochToReadableDate from "../../lib/epochToReadableDate"
import getTwitterHandle from "../../lib/getTwitterHandle"
import getEns from "../../lib/getEns"

const NUMBER_OF_TOKENS = "0"

function CollectorPage() {
  const router = useRouter()
  const { collectorId } = router.query
  const collectorIdAsString = collectorId as string
  const [balance, setBalance] = useState(NUMBER_OF_TOKENS)
  const [anniversary, setAnniversary] = useState(null as string)
  const [twitter, setTwitter] = useState(null as string)
  const [ens, setEns] = useState({} as any)

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(collectorIdAsString)
    toast.success("copied to clipboard!")
  }

  useEffect(() => {
    const init = async () => {
      const response = await balanceOfParticipationRewards(collectorIdAsString)
      if (response.error) return
      setBalance(response.toString())
      const epoch = await getAnniversary(collectorIdAsString)
      const readable = epochToReadableDate(epoch)
      setAnniversary(readable)
      const handle = await getTwitterHandle(collectorIdAsString)
      setTwitter(handle)
      const ensRecord = await getEns(collectorIdAsString)
      setEns(ensRecord)
    }

    init()
  }, [collectorIdAsString])

  return (
    <div className="mt-3 flex flex-col">
      <div className="flex flex-col items-center justify-around text-4xl text-white pt-10 h-[75vh]">
        <div className="flex items-center gap-11">
          <PFP address={collectorIdAsString || "0x0"} />
          <div>
            <div>CRE8OR Profile</div>
            <button onClick={handleCopyClick} type="button">
              {ens?.title || truncateEthAddress(collectorIdAsString)}
            </button>
            {anniversary && <div className="text-sm">Joined {anniversary}</div>}
            {twitter && (
              <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noreferrer">
                <div className="text-sm">Twitter: {twitter}</div>
              </a>
            )}
          </div>
        </div>
        {BigNumber.from(balance).gt(0) && (
          <div className="flex flex-col items-center gap-5">
            <ImageCard
              imageUrl="https://nftstorage.link/ipfs/bafybeiaoglcj47pklfmwnxp6sd352y4fndr3ojopof7f3ciiaogshcz3au"
              title={`Participation Rewards: ${balance.toString()}`}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default CollectorPage
