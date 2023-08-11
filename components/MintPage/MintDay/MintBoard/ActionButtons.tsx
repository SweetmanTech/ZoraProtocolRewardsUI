import { useAccount } from "wagmi"
import { useEffect, useMemo, useRef, useState } from "react"
import _ from "lodash"
import { Contract } from "ethers"
import { Button } from "../../../../shared/Button"
import WalletConnectButton from "../../../WalletConnectButton"
import { useMintProvider } from "../../../../providers/MintProvider"
import useShakeEffect from "../../../../hooks/useShakeEffect"
import { isWhitelisted } from "../../../../lib/merkle/isWhitelisted"
import useCre8orlistMint from "../../../../hooks/mintDay/useCre8orlistMint"
import SuccessModal from "../Modals/SuccessModal"
import minterUtilitiesAbi from "../../../../lib/abi-minter-utilities.json"
import getDefaultProvider from "../../../../lib/getDefaultProvider"
import MintingModal from "../Modals/MintingModal"
import FreeMintModal from "../Modals/FreeMintModal"
import usePublicMint from "../../../../hooks/mintDay/usePublicMint"

const MintBoardButtons = () => {
  const [isMinting, setIsMinting] = useState(false)
  const [isSuccessfulMint, setIsSuccessfulMint] = useState(false)
  const [isFreeMintModalOpen, setIsFreeMintModalOpen] = useState(false)
  const [quantityLeft, setQuantityLeft] = useState()
  const { isConnected, address } = useAccount()
  const { mint } = useCre8orlistMint()
  const { mint: publicMint } = usePublicMint()

  const provider = useMemo(() => getDefaultProvider(process.env.NEXT_PUBLIC_TESTNET ? 5 : 1), [])
  const { cart, leftQuantityCount, hasPassport, hasUnclaimedFreeMint, hasFriendAndFamily } =
    useMintProvider()
  const shakeRef = useRef()
  const isPassportMint = hasPassport && hasUnclaimedFreeMint
  const isFreeMint = isPassportMint || hasFriendAndFamily
  const canNotClickMint = useMemo(
    () => _.sum(cart) === 0 || leftQuantityCount === 0,
    [leftQuantityCount, cart],
  )

  useShakeEffect({
    ref: shakeRef,
    isEnabled: canNotClickMint,
  })

  const getRemainingMint = async () => {
    const contract = new Contract(
      process.env.NEXT_PUBLIC_MINTER_UTILITY,
      minterUtilitiesAbi,
      provider,
    )
    const quantity = await contract.quantityLeft(
      process.env.NEXT_PUBLIC_COLLECTION_HOLDER,
      process.env.NEXT_PUBLIC_FRIENDS_AND_FAMILY_ADDRESS,
      process.env.NEXT_PUBLIC_CRE8ORS_ADDRESS,
      address,
    )
    setQuantityLeft(quantity)
  }

  const onSuccess = async () => {
    await getRemainingMint()
    setIsSuccessfulMint(true)
  }

  const handleClick = async () => {
    if (isWhitelisted(address)) {
      setIsMinting(true)
      await mint(cart, onSuccess)
      setIsMinting(false)
      return
    }
    setIsMinting(true)
    await publicMint(cart, onSuccess)
    setIsMinting(false)
  }

  useEffect(() => {
    if (isFreeMint) {
      setIsFreeMintModalOpen(true)
    }
  }, [isFreeMint])

  return (
    <div className="flex justify-center">
      {isConnected ? (
        <div ref={shakeRef}>
          <Button
            id="mint_btn_mint_page"
            className="mt-[20px] xl:mt-[40px] 
          xl:w-[308px] xl:h-[88px] 
          w-[133px] h-[38px]
          text-[14px] xl:text-[30px] 
          rounded-[5px] xl:rounded-[15px]"
            onClick={handleClick}
          >
            {leftQuantityCount === 0 ? "Max Minted" : "Mint Now"}
          </Button>
        </div>
      ) : (
        <WalletConnectButton>
          <div
            className="px-0 py-0
          mt-[40px] uppercase
          xl:w-[328px] xl:h-[88px] 
          w-[153px] h-[38px]
          text-[14px] xl:text-[30px] 
          rounded-[5px] xl:rounded-[15px]
          hover:scale-[1.1] scale-[1] transition duration-[300ms]
          bg-[black] dark:bg-[white] 
          shadow-[0px_4px_4px_rgb(0,0,0,0.25)] dark:shadow-[0px_4px_4px_rgb(255,255,255,0.25)]
          flex items-center justify-center gap-[10px]
          font-bold font-quicksand"
          >
            Connect Wallet
          </div>
        </WalletConnectButton>
      )}
      {isSuccessfulMint && (
        <SuccessModal
          isModalVisible={isSuccessfulMint}
          toggleIsVisible={() => {
            setIsSuccessfulMint(false)
          }}
          quantityLeft={quantityLeft}
        />
      )}
      {isMinting && <MintingModal />}
      {isFreeMintModalOpen && (
        <FreeMintModal handleClose={() => setIsFreeMintModalOpen(false)} onSuccess={onSuccess} />
      )}
    </div>
  )
}

export default MintBoardButtons
