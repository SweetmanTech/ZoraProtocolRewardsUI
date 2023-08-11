import { FC, useRef, useState } from "react"
import { useMediaQuery } from "usehooks-ts"
import Media from "../../../shared/Media"
import InfographicModal from "../InfographicModal"
import useShakeEffect from "../../../hooks/useShakeEffect"
import { useMintProvider } from "../../../providers/MintProvider"

interface MintCardProps {
  className?: string
  label: string
  mintPrice: string
  desc: string
  decreaseQuantity: (type: number) => void
  increaseQuantity: (type: number) => void
  type: number
  quantity: number
  height: number
}

const QuantityCard: FC<MintCardProps> = ({
  className,
  label,
  mintPrice,
  desc,
  increaseQuantity,
  decreaseQuantity,
  type,
  quantity,
  height,
}) => {
  const isXl = useMediaQuery("(max-width: 1150px)")
  const isIphone = useMediaQuery("(max-width: 330px)")
  const mobileMaxWidth = 186.66

  const [openInfographicModal, setOpenInfographicModal] = useState(false)

  const minusShakeRef = useRef()

  const { getCartTier } = useMintProvider()

  useShakeEffect({
    ref: minusShakeRef,
    isEnabled: getCartTier(type) === 0,
  })

  return (
    <>
      <div
        className={`relative 
                rounded-[5px] samsungS8:rounded-[10px] xl:rounded-[15px]
                gap-y-[0px]
                flex flex-col justify-center ${className}`}
        style={{
          // eslint-disable-next-line no-nested-ternary
          width: isXl ? (isIphone ? `130px` : `220px`) : "336px",
          height: isXl ? `${height}px` : "350px",
        }}
      >
        <button
          className="absolute top-[3px] samsungS8:top-[5px] right-[3px] xl:top-[10px] xl:right-[10px] cursor-pointer"
          type="button"
          onClick={() => setOpenInfographicModal(true)}
        >
          <Media
            link="/assets/Mint/MintNow/MintCard/help.png"
            type="image"
            containerStyle={{
              width: isXl ? `${(25 / mobileMaxWidth) * height}px` : "31px",
              height: isXl ? `${(25 / mobileMaxWidth) * height}px` : "31px",
            }}
          />
        </button>
        <div>
          <div
            className="font-bold font-quicksand
          text-center leading-[93.3%] xl:leading-[93.3%]"
            style={{
              fontSize: isXl ? `${(20 / mobileMaxWidth) * height}px` : "29px",
            }}
          >
            {label}
          </div>
          <div
            className="font-eigerdals font-bold
          text-center leading-[93.3%] xl:leading-[93.3%] 
          xl:pt-[15px] xl:pb-[20px]
          py-[3px] samsungS8:py-[5px]"
            style={{
              fontSize: isXl ? `${(30 / mobileMaxWidth) * height}px` : "59px",
            }}
          >
            {mintPrice} ETH
          </div>
        </div>
        <div className="flex items-center gap-x-[10px] justify-center">
          <Media
            link="/assets/Mint/MintNow/MintCard/tick.png"
            type="image"
            containerStyle={{
              width: isXl ? `${(20 / mobileMaxWidth) * height}px` : "35px",
              height: isXl ? `${(20 / mobileMaxWidth) * height}px` : "35px",
            }}
          />
          <div
            className="font-medium font-quicksand"
            style={{
              fontSize: isXl ? `${(13 / mobileMaxWidth) * height}px` : "19px",
            }}
          >
            {desc}
          </div>
        </div>
        <div className="flex justify-center pt-[3px] samsungS8:pt-[5px] xs:pt-[15px] xl:pt-[40px]">
          <div
            className="font-bold font-quicksand 
                            uppercase text-white dark:text-[black] 
                            rounded-[5px] samsungS8:rounded-[10px] 
                            bg-[black] dark:bg-[white] 
                            shadow-[0px_4px_4px_rgb(0,0,0,0.25)] dark:shadow-[0px_4px_4px_rgb(255,255,255,0.25)]
                            flex items-center justify-center gap-[10px]
                            cursor-pointer"
            style={{
              height: isXl ? `${(35 / mobileMaxWidth) * height}px` : "45px",
              width: isXl ? `${(103 / mobileMaxWidth) * height}px` : "170px",
            }}
          >
            <div
              className="flex gap-x-[5px] saumsungS8:gap-x-[10px] xl:gap-x-[30px]"
              style={{
                fontSize: isXl ? `${(18 / mobileMaxWidth) * height}px` : "25px",
              }}
            >
              <div ref={minusShakeRef}>
                <button
                  type="button"
                  style={{
                    width: isXl ? `${(20 / mobileMaxWidth) * height}px` : "40px",
                    color: getCartTier(type) === 0 ? "gray" : "black",
                  }}
                  onClick={() => decreaseQuantity(type)}
                >
                  -
                </button>
              </div>
              <div
                style={{
                  width: isXl ? `${(20 / mobileMaxWidth) * height}px` : "30px",
                }}
              >
                {quantity}
              </div>
              <button
                type="button"
                style={{
                  width: isXl ? `${(20 / mobileMaxWidth) * height}px` : "40px",
                }}
                onClick={() => {
                  increaseQuantity(type)
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <InfographicModal
        isModalVisible={openInfographicModal}
        toggleIsVisible={() => setOpenInfographicModal(!openInfographicModal)}
      />
    </>
  )
}

export default QuantityCard
