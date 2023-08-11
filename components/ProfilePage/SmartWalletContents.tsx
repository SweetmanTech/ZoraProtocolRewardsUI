/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useMemo, useState } from "react"
import { useProfileProvider } from "../../providers/ProfileContext"
import getSmartWallet from "../../lib/getSmartWallet"
import getProfileFormattedCollection, { ALLNFTS } from "../../lib/getProfileFormattedCollection"
import getDefaultProvider from "../../lib/getDefaultProvider"
import Deploy6551AndMintDNAButton from "./Deploy6551AndMintButton"
import ProfileToken from "./ProfileToken"

const SmartWalletContents = () => {
  const { cre8orNumber, isHiddenEditable } = useProfileProvider()
  const [ownedNfts, setOwnedNfts] = useState([])
  const [hasSmartWallet, setHasSmartWallet] = useState(true)
  const provider = useMemo(() => getDefaultProvider(process.env.NEXT_PUBLIC_TESTNET ? 5 : 1), [])

  const getDNAByCre8orNumber = useCallback(async () => {
    if (!provider || !cre8orNumber) return

    const smartWalletAddress = await getSmartWallet(cre8orNumber)
    const code = await provider.getCode(smartWalletAddress)
    setHasSmartWallet(code !== "0x")
    const nftResponse = await getProfileFormattedCollection(smartWalletAddress, ALLNFTS)
    setOwnedNfts(nftResponse)
  }, [cre8orNumber, provider])

  useEffect(() => {
    getDNAByCre8orNumber()
  }, [getDNAByCre8orNumber])

  return (
    <div className="border-r-[2px] pr-[20px] lg:pr-[50px] border-r-[white]">
      <div
        className="mt-[35px]
                    relative
                    flex items-center justify-center
                    lg:px-4 lg:py-6 p-2
                    rounded-[8px] lg:rounded-[15px]
                    overflow-hidden
                    lg:w-[287px] lg:h-[287px]
                    samsungS8:w-[130px] samsungS8:h-[130px]
                    w-[120px] h-[120px]
                    after:content-[''] after:bg-[white] after:opacity-[0.3]
                    after:w-full after:h-full
                    after:absolute
                    after:left-0 after:top-0 after:z-[1]"
      >
        {!hasSmartWallet && !isHiddenEditable && (
          <Deploy6551AndMintDNAButton getDNAByCre8orNumber={getDNAByCre8orNumber} />
        )}
        <div
          className="absolute w-full h-full left-0 top-0 z-[2]
              bg-[url('/assets/Profile/dna_animation.gif')] bg-cover"
        />
        <div
          className="grid grid-cols-3 w-full relative z-[2]
              gap-y-[5px] lg:gap-y-[15px]"
        >
          {ownedNfts?.map((nft) => (
            <ProfileToken token={nft} key={nft.label} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SmartWalletContents
