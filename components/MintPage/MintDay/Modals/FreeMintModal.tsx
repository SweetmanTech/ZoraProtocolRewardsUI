import { useState } from "react"
import { Button } from "../../../../shared/Button"
import Modal from "../../../../shared/Modal"
import MintLoading from "../MintLoading"
import { useMintProvider } from "../../../../providers/MintProvider"
import usePassportMintDay from "../../../../hooks/mintDay/usePassportMintDay"

const FreeMintModal = ({ handleClose, onSuccess }) => {
  const [isMinting, setIsMinting] = useState(false)
  const { checkNetwork, freeMintCount, hasPassport, hasUnclaimedFreeMint, hasFriendAndFamily } =
    useMintProvider()
  const { freeMintPassportHolder, freeMintFamilyAndFriend } = usePassportMintDay()
  const isPassportMint = hasPassport && hasUnclaimedFreeMint

  const handleMint = async () => {
    if (!checkNetwork()) return
    if (isPassportMint) {
      setIsMinting(true)
      await freeMintPassportHolder(onSuccess)
      setIsMinting(false)
    }
    if (hasFriendAndFamily) {
      setIsMinting(true)
      await freeMintFamilyAndFriend(onSuccess)
      setIsMinting(false)
    }
    handleClose()
  }

  return (
    <Modal isVisible onClose={isMinting ? null : handleClose} showCloseButton>
      <div
        className="rounded-lg
                  flex-col flex justify-center items-center
                  bg-[url('/assets/Mint/MintNow/MintCoreModal/combination_bg.png')]
                  bg-cover bg-black dark:bg-white 
                  w-[250px] h-[200px]
                  samsungS8:w-[300px] samsungS8:h-[250px]
                  xs:w-[320px] xs:h-[250px]
                  xl:w-[750px] xl:h-[530px]"
      >
        {isMinting ? (
          <MintLoading />
        ) : (
          <>
            <pre
              className="font-eigerdals 
                      text-[22px] samsungS8:text-[25px] xs:text-[28px] xl:text-[65px] 
                      uppercase text-center
                      leading-[103.3%] dark:text-black text-white"
            >
              {`You have ${freeMintCount || 0}\nfree mint${freeMintCount > 1 ? "s" : ""}`}
            </pre>

            <pre
              className="font-quicksand 
                      text-[15px] xl:text-[32px]
                      text-center 
                      pt-0 xl:pb-[50px]
                      samsungS8:pb-[15px]
                      pb-[10px]
                      dark:text-black text-white"
            >
              (with 8-week lockup)
            </pre>

            <Button
              id="mint_now"
              className="xl:!w-[348px] xl:!h-[107px] 
                      !w-[150px] !h-[50px]
                      !font-eigerdals font-bold !bg-black 
                      text-[15px] xl:text-[44px] 
                      !rounded-[10px]
                      !text-black dark:!text-white
                      dark:!bg-black !bg-white"
              onClick={handleMint}
            >
              Mint Now
            </Button>
          </>
        )}
      </div>
    </Modal>
  )
}

export default FreeMintModal
