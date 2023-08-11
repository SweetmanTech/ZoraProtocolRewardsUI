import useZoraDeploy from "../../hooks/useZoraDeploy"

const DeployButton = () => {
  const { createEditionWithReferral } = useZoraDeploy()

  const handleClick = async () => {
    await createEditionWithReferral()
  }

  return (
    <button type="button" onClick={handleClick}>
      Deploy on Zora
    </button>
  )
}

export default DeployButton
