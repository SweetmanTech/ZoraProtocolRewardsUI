import LoadingPage from "../LoadingPage"
import LoginPage from "../LoginPage"
import { useAdminProvider } from "../../providers/AdminProvider"

const Auth = ({ children }) => {
  const { userIsLoggedIn, user } = useAdminProvider()

  return (
    <>
      {user?.loading && <LoadingPage />}
      {!userIsLoggedIn && !user?.loading && <LoginPage />}
      {userIsLoggedIn && !user?.loading && children}
    </>
  )
}

export default Auth
