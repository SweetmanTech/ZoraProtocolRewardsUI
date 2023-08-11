import { FC, useState } from "react"
import Modal from "../../shared/Modal"
import { Button } from "../../shared/Button"
import Media from "../../shared/Media"
import { useWalletCollectionProvider } from "../../providers/WalletCollectionProvider"
import { useEthersSigner } from "../../hooks/useEthersSigner"

interface TrainModalProps {
  isModalVisible: boolean
  toggleIsVisible: () => void
}
const TrainModal: FC<TrainModalProps> = ({ isModalVisible, toggleIsVisible }) => {
  const [loading, setLoading] = useState(false)
  const { selectedTokenIdForTrain, refetchProfileFormattedCollection } =
    useWalletCollectionProvider()
  const signer = useEthersSigner({ chainId: process.env.NEXT_PUBLIC_TESTNET ? 5 : 1 })

  const trainFunc = async () => {
    setLoading(true)
    if (selectedTokenIdForTrain !== null && signer) {
      await refetchProfileFormattedCollection()
    }
    toggleIsVisible()
    setLoading(false)
  }

  return (
    <Modal
      isVisible={isModalVisible}
      onClose={toggleIsVisible}
      containerClassName="rounded-[30px] md:rounded-[56px] overflow-hidden bg-black
      drop-shadow-[2px_3px_2px_rgba(255,255,255,0.25)]"
      modalClassName="!z-[110]"
    >
      <div
        className="px-4 py-10 samsungS8:p-6 xs:p-8 xl:p-6 rounded-lg
          flex-col flex justify-center items-center
          md:w-[692px] md:h-[528px]
          bg-black"
      >
        <div
          className="font-eigerdals 
        text-[30px] md:text-[65px] text-white uppercase
        text-white uppercase"
        >
          {loading ? "Loading...." : "Soft-staking"}
        </div>
        {loading ? (
          <>
            <Media
              type="image"
              link="/assets/Common/loading.svg"
              blurLink="/assets/Common/loading.svg"
              containerClasses="w-[100px] md:w-[150px] h-[130px] md:h-[250px]"
            />
            <pre
              className="font-quicksand 
              text-[18px] md:text-[33px]
              font-bold text-white
              text-center leading-[99.3%]
              w-[260px] md:w-full"
            >
              {`Approve transaction in\nwallet.`}
            </pre>
          </>
        ) : (
          <>
            <pre
              className="font-quicksand 
              text-[18px] md:text-[33px]
              font-bold text-white
              my-[30px] md:my-[60px]
              text-center leading-[99.3%]"
            >
              {`Train (soft-stake) your Cre8or\nto learn AI, earn badges, and\nreceive rewards!`}
            </pre>
            <Button
              id="unlock_btn"
              className="w-[200px] h-[50px]
              md:w-[397px] md:h-[77px]
              font-quicksand font-bold 
              text-[19px] md:text-[39px]
              rounded-[10px] md:rounded-[15px]
              !p-0"
              onClick={trainFunc}
            >
              start training
            </Button>
          </>
        )}
      </div>
    </Modal>
  )
}

export default TrainModal
