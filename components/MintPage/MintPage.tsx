import { FC, useState } from "react"
import { useMediaQuery } from "usehooks-ts"
import Layout from "../Layout"
import Cre8orsWay from "./Sections/Cre8orsWay"
import PFPs from "./Sections/PFPs"
import Archetypes from "./Sections/Archetypes"
import InHouse from "./Sections/InHouse"
import Collaborate from "./Sections/Collaborate"
import Footer from "../Footer"
import MintBoard from "./MintDay/MintBoard"
import PreMintBoard from "./PreMint/PreMintBoard"
import BestMintingModal from "./MintDay/Modals/BestMintingModal"

interface MintPageProps {
  type: "premint" | "mint"
}

const MintPage: FC<MintPageProps> = ({ type }) => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [openBestMintingModal, setOpenBestMintingModal] = useState(true)

  return (
    <>
      <Layout type="base">
        <div className="relative h-screen overflow-y-auto overflow-x-hidden">
          {type === "premint" && <PreMintBoard />}
          {type === "mint" && <MintBoard />}
          <Cre8orsWay />
          <PFPs />
          <Archetypes />
          <InHouse />
          <Collaborate />
          <Footer className="pt-0" />
        </div>
      </Layout>
      {type === "mint" && isMobile && (
        <BestMintingModal
          isModalVisible={openBestMintingModal}
          toggleIsVisible={() => setOpenBestMintingModal(!openBestMintingModal)}
        />
      )}
    </>
  )
}

export default MintPage
