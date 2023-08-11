import { useProfileProvider } from "../../providers/ProfileContext"
import Media from "../../shared/Media"
import { CRE8OR } from "./types"
import { useWalletCollectionProvider } from "../../providers/WalletCollectionProvider"
import ProfileToken from "./ProfileToken"

const OwnerWalletContents = ({ setOpenUnlockModal, setOpenTrainModal }) => {
  const { isEditable } = useProfileProvider()

  const { ownedNfts, setSelectedTokenIdForUnlock, setSelectedTokenIdForTrain } =
    useWalletCollectionProvider()

  return (
    <div
      className="grid grid-cols-3 xs:grid-cols-4 lg:grid-cols-6 
                  gap-x-[5px] lg:gap-x-[15px] gap-y-[5px] 
                  pt-[15px] mt-[20px]
                  h-[140px] lg:h-[287px] 
                  overflow-y-auto overflow-x-hidden
                  pr-2"
    >
      {ownedNfts.map((data, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i} className="flex flex-col items-center gap-y-[5px]">
          <ProfileToken token={data} />
          <div
            className="text-[6px] samsungS8:text-[7px] xs:text-[8px] lg:text-[12px] font-quicksand font-bold text-white
                              w-[30px] samsungS8:w-[40px] lg:!w-[90px] text-center
                              flex flex-col items-center gap-y-[2px]"
          >
            <div className="w-full break-words uppercase">
              {data.type === CRE8OR ? "CRE8ORS" : data.label}
              {data.type === CRE8OR ? ` #${data.tokenId}` : ""}
            </div>
            {isEditable && data.type === CRE8OR && data.isLocked !== undefined && (
              <div>
                {data.isLocked ? (
                  <button
                    type="button"
                    onClick={() => {
                      setOpenUnlockModal(true)
                      setSelectedTokenIdForUnlock(data.tokenId)
                    }}
                  >
                    <Media
                      type="image"
                      containerClasses="w-[13.54px] h-[16.83px]"
                      link="/assets/Profile/locked.svg"
                      blurLink="/assets/Profile/locked.png"
                    />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setOpenTrainModal(true)
                      setSelectedTokenIdForTrain(data.tokenId)
                    }}
                    type="button"
                  >
                    <Media
                      type="image"
                      containerClasses="w-[14.8px] h-[17px]"
                      link="/assets/Profile/unlocked.svg"
                      blurLink="/assets/Profile/unlocked.png"
                    />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default OwnerWalletContents
