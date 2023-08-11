import { FC } from "react"
import Modal from "../../shared/Modal"
import Media from "../../shared/Media"

interface SettingSmartWalletModalProps {
  isModalVisible: boolean
  toggleIsVisible: () => void
}
const SettingSmartWalletModal: FC<SettingSmartWalletModalProps> = ({
  isModalVisible,
  toggleIsVisible,
}) => (
  <Modal
    isVisible={isModalVisible}
    onClose={toggleIsVisible}
    containerClassName="rounded-[20px] md:rounded-[56px] overflow-hidden bg-black
      drop-shadow-[2px_3px_2px_rgba(255,255,255,0.25)]"
    modalClassName="!z-[110]"
  >
    <div
      className="px-4 py-10 samsungS8:p-6 xs:p-8 xl:p-6 
          rounded-lg
          flex-col flex justify-center items-center
          md:w-[692px] md:h-[528px]
          bg-black"
    >
      <pre
        className="font-eigerdals 
        text-[30px] md:text-[60px] text-white uppercase
        text-white uppercase
        text-center
        leading-[93.3%]"
      >
        {`Setting up\nSmart Wallet...`}
      </pre>
      <div
        className="font-eigerdals 
        text-[30px] md:text-[65px] text-white uppercase
        text-white uppercase"
      />
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
    </div>
  </Modal>
)

export default SettingSmartWalletModal
