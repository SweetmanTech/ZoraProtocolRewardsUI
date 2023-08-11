import { useRouter } from "next/router"
import Modal from "../../shared/Modal"
import Media from "../../shared/Media"
import { Button } from "../../shared/Button"
import { useTheme } from "../../providers/ThemeProvider"

const MintLiveModal = ({ isModalVisible, toggleIsVisible }) => {
  const { themeMode } = useTheme()
  const router = useRouter()

  return (
    <Modal
      isVisible={isModalVisible}
      onClose={toggleIsVisible}
      showCloseButton
      containerClassName="rounded-[15px] xl:!rounded-[30px] !overflow-hidden bg
        drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] dark:drop-shadow-[4px_4px_4px_rgba(255,255,255,0.25)]"
    >
      <div
        className="absolute left-0 bottom-0
        w-[28.6%] aspect-[230/484]"
      >
        <Media
          type="image"
          link="/assets/Landing/modal/man.svg"
          blurLink="/assets/Landing/modal/man.png"
          containerClasses="w-full h-full"
        />
      </div>
      <div
        className="absolute right-0 bottom-0
        w-[47.6%] aspect-[382/435]"
      >
        <Media
          type="image"
          link="/assets/Landing/modal/woman.svg"
          blurLink="/assets/Landing/modal/woman.png"
          containerClasses="w-full h-full"
        />
      </div>
      <div
        className="px-4 py-8 samsungS8:p-8 xl:px-14 xl:py-8
                    rounded-[15px] xl:!rounded-[30px]
                    flex-col flex justify-center items-center
                    bg-[url('/assets/Landing/modal/live_mint_bg.png')]
                    bg-cover bg-black dark:bg-white 
                    xl:w-[803px] xl:h-[569px]"
      >
        <Media
          type="image"
          link={
            themeMode === "light"
              ? "/assets/Landing/modal/white_logo.svg"
              : "/assets/Landing/modal/logo.svg"
          }
          blurLink="/assets/Landing/modal/logo.png"
          containerClasses="xl:w-[448px] xl:h-[82px]
          xs:w-[280px] xs:h-[51.25px]
          w-[250px] h-[45.7px]"
        />
        <div
          className="font-eigerdals font-bold
          text-[30px] xl:text-[80px] 
        text-white dark:text-black
        uppercase
        leading-[103.3%]
        pb-[30px] samsungS8:pb-[80px] pt-[10px]"
        >
          Mint is live!
        </div>
        <Button
          id="go_mint_btm"
          className="!p-0 
            xl:!w-[348px] xl:!h-[107px]
            !w-[150px] !h-[50px]
            dark:!bg-[black] !bg-[white]
            dark:!text-[white] !text-[black]
            !rounded-[10px]
            uppercase"
          onClick={() => router.push("/mint")}
        >
          <div
            className="font-eigerdals !font-[900]
            text-[30px] xl:text-[65px]"
          >
            Go
          </div>
        </Button>
      </div>
    </Modal>
  )
}

export default MintLiveModal
