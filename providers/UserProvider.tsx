import { useContext, createContext, ReactNode, FC, useState, useCallback, useMemo } from "react"

import { useAccount } from "wagmi"
import { getSimilarProfiles, getUserInfo } from "../lib/userInfo"

interface userProps {
  getUserData: (address?: string) => Promise<void>
  getUserSimilarProfiles: (address?: string) => Promise<void>
  userInfo: any
  similarProfiles: any
}

interface Props {
  children: ReactNode
}

const UserContext = createContext<Partial<userProps> | null>(null)

export const UserProvider: FC<Props> = ({ children }) => {
  const { address } = useAccount()
  const [userInfo, setUserInfo] = useState<any>(null)
  const [similarProfiles, setSimilarProfiles] = useState<any>([])

  const getUserSimilarProfiles = useCallback(
    async (walletAddress?: string) => {
      if (walletAddress || address) {
        const data: any = await getSimilarProfiles(walletAddress || address)

        if (!data?.similarProfiles.length) return setSimilarProfiles([])

        return setSimilarProfiles(data?.similarProfiles)
      }

      return setUserInfo(null)
    },
    [address],
  )

  const getUserData = useCallback(
    async (walletAddress?: string) => {
      if (walletAddress || address) {
        const info: any = await getUserInfo(walletAddress || address)

        if (!info?.doc) return setUserInfo(null)

        return setUserInfo(info.doc)
      }

      return setUserInfo(null)
    },
    [address],
  )

  const provider = useMemo(
    () => ({
      similarProfiles,
      userInfo,
      getUserData,
      getUserSimilarProfiles,
    }),
    [similarProfiles, userInfo, getUserData, getUserSimilarProfiles],
  )

  return <UserContext.Provider value={provider}>{children}</UserContext.Provider>
}

export const useUserProvider = () => useContext(UserContext)
