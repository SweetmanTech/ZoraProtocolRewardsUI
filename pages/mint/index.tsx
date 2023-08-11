import MintPage from "../../components/MintPage"
import SeoHead from "../../components/SeoHead"
import { MintProvider } from "../../providers/MintProvider"

const Mint = () => (
  <MintProvider>
    <SeoHead
      title="Cre8ors"
      description="Minting Now."
      image="https://maroon-quickest-ocelot-736.mypinata.cloud/ipfs/Qmbur4p1Pz3E2cJgEq59QFHtggN6fyAzQK1ehhHV6EjWtm"
    />
    <MintPage type="mint" />
  </MintProvider>
)

export default Mint
