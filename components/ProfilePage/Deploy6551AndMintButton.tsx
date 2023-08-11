import { FC, useState } from "react"
import { Button } from "../../shared/Button"
import { useProfileProvider } from "../../providers/ProfileContext"
import SettingSmartWalletModal from "./SettingSmartWalletModal"
import useCheckNetwork from "../../hooks/useCheckNetwork"
import useCreateTBA from "../../hooks/useCreateTBA"

interface Deploy6551AndMintDNAButtonProps {
  getDNAByCre8orNumber: any
}

const Deploy6551AndMintDNAButton: FC<Deploy6551AndMintDNAButtonProps> = ({
  getDNAByCre8orNumber,
}) => {
  const { cre8orNumber } = useProfileProvider()
  const { checkNetwork } = useCheckNetwork()
  const { createTbaAndMintDna } = useCreateTBA()
  const [openLoadingModal, setOpenLoadingModal] = useState(false)

  const onClick = async () => {
    if (!checkNetwork()) return

    setOpenLoadingModal(true)
    await createTbaAndMintDna(cre8orNumber)
    getDNAByCre8orNumber()
    setOpenLoadingModal(false)
  }

  return (
    <>
      <Button
        onClick={onClick}
        id="deploy-wallet"
        className="absolute w-full h-full left-0 top-0 z-[3]"
      >
        setup smart wallet
      </Button>
      <SettingSmartWalletModal
        isModalVisible={openLoadingModal}
        toggleIsVisible={() => setOpenLoadingModal(!openLoadingModal)}
      />
    </>
  )
}

export default Deploy6551AndMintDNAButton
