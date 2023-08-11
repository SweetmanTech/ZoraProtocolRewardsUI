import { useState } from "react"
import useZoraDeploy from "../../hooks/useZoraDeploy"

const DeployButton = () => {
  const [loading, setLoading] = useState(false)
  const { createEditionWithReferral } = useZoraDeploy()

  const handleClick = async () => {
    if (loading) return
    setLoading(true)
    await createEditionWithReferral()
    setLoading(false)
  }

  return (
    <button type="button" onClick={handleClick} className="border border-white rounded-xl p-3">
      {loading ? "Deploying..." : "Deploy on Zora"}
    </button>
  )
}

export default DeployButton
