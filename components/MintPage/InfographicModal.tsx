import { FC } from "react"
import Modal from "../../shared/Modal"
import Media from "../../shared/Media"

interface InfographicModalProps {
  isModalVisible: boolean
  toggleIsVisible: () => void
}

const InfographicModal: FC<InfographicModalProps> = ({ isModalVisible, toggleIsVisible }) => (
  <Modal isVisible={isModalVisible} onClose={toggleIsVisible}>
    <Media
      type="image"
      containerClasses="w-[1000px] aspect-[17/10]
        rounded-[10px] overflow-hidden"
      link="/assets/Mint/infographic.png"
      blurLink="/assets/Mint/infographic.png"
    />
  </Modal>
)

export default InfographicModal
