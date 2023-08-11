import { useMediaQuery } from "usehooks-ts"
import { FC } from "react"
import { useMintProvider } from "../../../../providers/MintProvider"
import QuantityCard from "../QuantityCard"

interface QuantityCardsProps {
  height: number
}

const QuantityCards: FC<QuantityCardsProps> = ({ height }) => {
  const isXs = useMediaQuery("max-width: 393px")

  const { addToCart, removeFromCart, getCartTier } = useMintProvider()

  const increaseQuantity = (type: number) => {
    addToCart(type)
  }

  const decreaseQuantity = (type: number) => {
    removeFromCart(type)
  }
  return (
    <>
      <QuantityCard
        label="Tier I"
        mintPrice=".05"
        desc="8 Month Lockup"
        className="bg-[#E93F45]"
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        quantity={getCartTier(1)}
        type={1}
        height={(height - (isXs ? 320 : 285)) / 3}
      />
      <QuantityCard
        label="Tier II"
        mintPrice=".10"
        desc="8 Week Lockup"
        className="bg-[#F4EE05]"
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        quantity={getCartTier(2)}
        type={2}
        height={(height - (isXs ? 320 : 285)) / 3}
      />
      <QuantityCard
        label="Tier III"
        mintPrice=".15"
        desc="No Lockup"
        className="bg-[#08E1E6]"
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        quantity={getCartTier(3)}
        type={3}
        height={(height - (isXs ? 320 : 285)) / 3}
      />
    </>
  )
}

export default QuantityCards
