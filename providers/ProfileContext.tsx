import { createContext, useState, useEffect, useMemo, useContext, useCallback } from "react"

import { useRouter } from "next/router"
import { BigNumber } from "ethers"
import { useUserProvider } from "./UserProvider"
import { updateUserInfo } from "../lib/userInfo"
import getNFTs from "../lib/alchemy/getNFTs"

const ProfileContext = createContext<Partial<any> | null>(null)

export const ProfileProvider = ({ children }) => {
  const router = useRouter()

  const { address } = router.query

  const { userInfo, getUserData, getUserSimilarProfiles } = useUserProvider()

  const [isHiddenEditable, setIsHiddenEditable] = useState(false)
  const [expandedMore, setExpandedMore] = useState<boolean>(false)
  const [isEditable, setIsEditable] = useState<boolean>(false)
  const [editedUserName, setEditedUserName] = useState("")
  const [editedTwitterHandle, setEditedTwitterHandle] = useState("")
  const [editedLocation, setEditedLocation] = useState("")
  const [editedAskedMeAbout, setEditedAskedMeAbout] = useState("")
  const [editedINeedHelpWith, setEditedINeedHelpWith] = useState("")
  const [editedBio, setEditedBio] = useState("")
  const [loading, setLoading] = useState(false)
  const [cre8orNumber, setCre8orNumber] = useState("")

  const saveProfile = async () => {
    setIsEditable(false)
    setLoading(true)
    const response = await updateUserInfo({
      address,
      twitterHandle: editedTwitterHandle,
      location: editedLocation,
      iNeedHelpWith: editedINeedHelpWith,
      askMeAbout: editedAskedMeAbout,
      bio: editedBio,
      username: editedUserName,
    })

    if (response) {
      await getUserData(address as string)
      await getUserSimilarProfiles(address as string)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (userInfo) {
      setEditedUserName(userInfo.username)
      setEditedTwitterHandle(userInfo.twitterHandle)
      setEditedLocation(userInfo.location)
      setEditedAskedMeAbout(userInfo.askMeAbout)
      setEditedINeedHelpWith(userInfo.iNeedHelpWith)
      setEditedBio(userInfo.bio)
    }
  }, [isEditable, userInfo])

  const getCre8orInformation = useCallback(async () => {
    if (!address) return null

    const response = await getNFTs(
      address as string,
      process.env.NEXT_PUBLIC_CRE8ORS_ADDRESS,
      process.env.NEXT_PUBLIC_TESTNET ? 5 : 1,
    )

    if (response?.ownedNfts.length) {
      const lastCre8or = response.ownedNfts[response.totalCount - 1]
      const tokenId = BigNumber.from(lastCre8or.id.tokenId).toString()
      return setCre8orNumber(tokenId)
    }

    return setCre8orNumber("")
  }, [address])

  useEffect(() => {
    getCre8orInformation()
  }, [getCre8orInformation])

  const provider = useMemo(
    () => ({
      cre8orNumber,
      editedAskedMeAbout,
      editedUserName,
      editedBio,
      editedINeedHelpWith,
      editedLocation,
      editedTwitterHandle,
      expandedMore,
      isEditable,
      isHiddenEditable,
      setExpandedMore,
      setEditedUserName,
      setEditedAskedMeAbout,
      setEditedBio,
      setEditedINeedHelpWith,
      setEditedTwitterHandle,
      setEditedLocation,
      setIsEditable,
      setIsHiddenEditable,
      saveProfile,
      loading,
    }),
    [
      cre8orNumber,
      editedAskedMeAbout,
      editedUserName,
      editedBio,
      editedINeedHelpWith,
      editedLocation,
      editedTwitterHandle,
      expandedMore,
      isEditable,
      isHiddenEditable,
      setExpandedMore,
      setEditedUserName,
      setEditedAskedMeAbout,
      setEditedBio,
      setEditedINeedHelpWith,
      setEditedTwitterHandle,
      setEditedLocation,
      setIsEditable,
      setIsHiddenEditable,
      saveProfile,
      loading,
    ],
  )

  return <ProfileContext.Provider value={provider}>{children}</ProfileContext.Provider>
}

export const useProfileProvider = () => useContext(ProfileContext)
