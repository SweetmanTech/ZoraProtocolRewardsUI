import Modal from "../../../../shared/Modal"

const BestMintingModal = ({ isModalVisible, toggleIsVisible }) => (
  <Modal
    isVisible={isModalVisible}
    onClose={toggleIsVisible}
    showCloseButton
    containerClassName="!rounded-[15px] samsungS8:!rounded-[20px] overflow-hidden"
    closeButtonClassName="!top-[10px] !right-[15px]"
    modalClassName="backdrop-blur-[4px]"
  >
    <div
      className="px-16 py-8 samsungS8:px-20 samsungS8:py-10 rounded-lg
                      flex-col flex justify-center items-center
                      bg-[url('/assets/Mint/MintNow/MintCoreModal/combination_bg.png')]
                      bg-cover bg-black dark:bg-white"
    >
      <pre
        className="font-quicksand font-bold
        text-[15px] text-center"
      >
        {`For best minting\nexperience, please\nuse desktop.`}
      </pre>
    </div>
  </Modal>
)

export default BestMintingModal
