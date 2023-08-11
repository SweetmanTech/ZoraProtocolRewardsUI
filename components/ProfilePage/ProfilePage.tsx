import { useMediaQuery } from "usehooks-ts"
import { useAccount } from "wagmi"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Layout from "../Layout"
import PreDesktopProfileView from "./PreDesktopProfileView"
import PreMobileProfileView from "./PreMobileProfileView"
import { Button } from "../../shared/Button"
import { useProfileProvider } from "../../providers/ProfileContext"
import { useUserProvider } from "../../providers/UserProvider"
import { WallectCollectionProvider } from "../../providers/WalletCollectionProvider"
import Footer from "../Footer"

const ProfilePage = () => {
  const routerAddress = useRouter().query.address as string
  const isMobile = useMediaQuery("(max-width: 1024px)")

  const { isEditable, saveProfile, setIsEditable, setIsHiddenEditable } = useProfileProvider()

  const { getUserData, getUserSimilarProfiles } = useUserProvider()

  const { address } = useAccount()

  useEffect(() => {
    getUserData(routerAddress)
    getUserSimilarProfiles(routerAddress)

    if (address?.toLowerCase() !== routerAddress?.toLowerCase()) {
      setIsHiddenEditable(true)
      return
    }

    setIsHiddenEditable(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routerAddress, getUserData, getUserSimilarProfiles])

  return (
    <Layout type="base">
      <div className="flex justify-center">
        <div className="max-w-[1280px]">
          <WallectCollectionProvider>
            <div
              className="relative !z-[11] pt-[8rem] px-2 samsungS8:px-4 lg:px-10
                    w-full flex justify-center"
            >
              {isMobile ? (
                <>
                  {isEditable && (
                    <div className="flex justify-center mb-[20px]">
                      <div
                        className="w-[280px] h-[40px]
                              rounded-[20px] bg-white
                              flex items-center justify-center
                              gap-x-[10px]"
                      >
                        <div
                          className="text-black text-[12px]
                                  font-quicksand font-medium"
                        >
                          You are in editing mode.
                        </div>
                        <Button
                          id="save-btn"
                          className="!p-0 !w-[70px] !h-[30px] !rounded-[15px] 
                                  !text-[12px] !bg-[black] !text-white
                                  !font-quicksand !font-bold !uppercase"
                          onClick={saveProfile}
                        >
                          Save
                        </Button>
                        <Button
                          id="cancel-btn"
                          className="!p-0 !w-[30px] !h-[30px] !rounded-full 
                                  !text-[12px] !bg-[black] !text-white
                                  !font-quicksand !font-bold !uppercase"
                          onClick={() => setIsEditable(false)}
                        >
                          X
                        </Button>
                      </div>
                    </div>
                  )}
                  <PreMobileProfileView />
                </>
              ) : (
                <PreDesktopProfileView />
              )}
            </div>
          </WallectCollectionProvider>
          <Footer className="!pt-6 !pb-0 !bg-transparent relative !z-[10]" />
        </div>
      </div>
    </Layout>
  )
}

export default ProfilePage
