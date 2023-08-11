import { useEffect } from "react"

interface Props {
  ref: any
  isEnabled: boolean
}

const useShakeEffect = ({ ref, isEnabled }: Props) => {
  useEffect(() => {
    const refCurrent = ref.current

    const handleShakeEffect = (event: any) => {
      const currentTarget = event?.currentTarget

      if (currentTarget) {
        if (isEnabled) currentTarget.style.animation = "shake 0.3s ease-in-out"
        setTimeout(() => {
          currentTarget.style.animation = ""
        }, 300)
      }
    }

    if (isEnabled && refCurrent) {
      refCurrent.addEventListener("click", handleShakeEffect)
    } else if (!isEnabled && refCurrent) {
      refCurrent.removeEventListener("click", handleShakeEffect)
    }

    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener("click", handleShakeEffect)
      }
    }
  }, [isEnabled, ref])
}

export default useShakeEffect
