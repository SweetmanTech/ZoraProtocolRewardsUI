import { useCallback, useContext, useEffect, useMemo, useState } from "react"
import { useInterval } from "usehooks-ts"
import { magic } from "../lib/magic"
import { AdminContext } from "./AdminContext"

export const useAdminProvider = () => useContext(AdminContext)

export const AdminProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [bearerToken, setBearerToken] = useState("")
  const autoRefreshTime: number = 1000 * 60 * 10 // 10 minutes

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault()

      const didToken = await magic.auth.loginWithMagicLink({
        email,
      })
      setBearerToken(didToken)
      // Send this token to our validation endpoint
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${didToken}`,
        },
      })

      // If successful, update our user state with their metadata and route to the dashboard
      if (res.ok) {
        const userMetadata = await magic.user.getMetadata()
        setUser(userMetadata)
        setUserIsLoggedIn(true)
      }
    },
    [email],
  )

  const logout = useCallback(() => {
    // Call Magic's logout method, reset the user state, and route to the login page
    magic.user.logout().then(() => {
      setUser({ user: null })
      setUserIsLoggedIn(false)
    })
  }, [])

  useEffect(() => {
    // Set loading to true to display our loading message within pages/index.js
    setUser({ loading: true })
    setLoading(true)
    // Check if the user is authenticated already
    magic.user.isLoggedIn().then(async (isLoggedIn) => {
      if (isLoggedIn) {
        // Pull their metadata, update our state, and route to dashboard
        const idToken = await magic.user.getIdToken()
        setBearerToken(idToken)
        magic.user.getMetadata().then((userData) => setUser(userData))
        setUserIsLoggedIn(true)
      } else {
        // If false, route them to the login page and reset the user state
        setUserIsLoggedIn(false)
        setUser({ user: null })
      }
    })
    // Add an empty dependency array so the useEffect only runs once upon page load
  }, [])

  useEffect(() => {
    if (user?.issuer) {
      setUserIsLoggedIn(true)
      setLoading(false)
    }
  }, [user])

  useInterval(
    async () => {
      const idToken = await magic.user.getIdToken()
      setBearerToken(idToken)
    },
    userIsLoggedIn ? autoRefreshTime : null,
  )

  const value = useMemo(
    () => ({
      user,
      setUser,
      userIsLoggedIn,
      setUserIsLoggedIn,
      handleLogin,
      email,
      setEmail,
      logout,
      loading,
      setLoading,
      bearerToken,
    }),
    [
      user,
      setUser,
      userIsLoggedIn,
      setUserIsLoggedIn,
      handleLogin,
      email,
      setEmail,
      logout,
      loading,
      setLoading,
      bearerToken,
    ],
  )
  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}
