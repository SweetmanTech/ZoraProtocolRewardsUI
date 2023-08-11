import Modal from "../../../../shared/Modal"
import MintLoading from "../MintLoading"

const MintingModal = () => (
  <Modal isVisible onClose={null} showCloseButton>
    <div
      className="px-14 py-8 samsungS8:px-20 samsungS8:py-10 rounded-lg
                      flex-col flex justify-center items-center
                      bg-[url('/assets/Mint/MintNow/MintCoreModal/combination_bg.png')]
                      bg-cover bg-black dark:bg-white 
                      xl:w-[803px] xl:h-[569px]"
    >
      <MintLoading />
    </div>
  </Modal>
)

export default MintingModal
