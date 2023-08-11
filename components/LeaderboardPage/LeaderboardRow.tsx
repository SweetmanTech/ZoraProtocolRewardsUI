import Link from "next/link"
import { useEffect, useState } from "react"
import { useMediaQuery } from "usehooks-ts"
import retryGetEns from "../../lib/retryGetEns"
import truncateEthAddress from "../../lib/truncateEthAddress"
import PFP from "../PFP"

const LeaderboardRow = ({ address, numberOwned, rank, twitterHandle }) => {
  const [ensName, setEnsName] = useState(null as string)

  const isMobile = useMediaQuery("(max-width: 768px)")
  const isIphone = useMediaQuery("(max-width: 320px)")

  useEffect(() => {
    const init = async () => {
      const ensRecord = await retryGetEns(address)
      if (!ensRecord?.title) return
      setEnsName(ensRecord?.title)
    }

    if (!address) return
    init()
  }, [address])

  return (
    <tr key={address} className="text-center bg-white hover:bg-blue-300">
      <td
        className="text-[8px] xs:text-[11px] md:text-[16px]
        p-[5px] md:px-4 md:py-2 border-r-2 border-black"
      >
        #{rank}
      </td>
      <td
        className="text-[8px] text-[11px] md:text-[16px]
        p-[5px] md:px-4 md:py-2 border-r-2 border-black"
      >
        {numberOwned}
      </td>
      <td
        className="flex md:items-center gap-[2px] md:gap-3 
        w-full
        text-[8px] text-[11px] md:text-[16px]
        p-[5px] md:px-4 md:py-2 border-r-2 border-black"
      >
        <PFP
          address={address}
          height={isMobile ? 20 : 25}
          // eslint-disable-next-line no-nested-ternary
          width={isMobile ? (isIphone ? 15 : 20) : 25}
        />
        <Link href={`/collector/${address}`} type="button">
          {ensName || truncateEthAddress(address)}
        </Link>
      </td>
      <td
        className="text-[8px] text-[11px] md:text-[16px]
        p-[5px] md:px-4 md:py-2"
      >
        {twitterHandle ? (
          <a href={`https://twitter.com/${twitterHandle}`} target="_blank" rel="noreferrer">
            {twitterHandle}
          </a>
        ) : (
          "Not Connected"
        )}
      </td>
    </tr>
  )
}

export default LeaderboardRow
