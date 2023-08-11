import { useEffect, useRef } from "react"

interface IClickOutsideHook {
  id: string
  shouldRegister: boolean
  onOutsideClick: () => any
}

function useClickOutside({ id, shouldRegister, onOutsideClick }: IClickOutsideHook) {
  const ref = useRef<HTMLDivElement | null>(null)

  const handleMouseClick = async (e: MouseEvent) => {
    const node = e.target as any

    if (id !== node?.id) return

    await onOutsideClick()
  }

  useEffect(() => {
    if (!shouldRegister) {
      document.removeEventListener("mousedown", handleMouseClick)
      return
    }

    document.addEventListener("mousedown", handleMouseClick)

    return () => {
      document.removeEventListener("mousedown", handleMouseClick)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldRegister])

  return { ref }
}

export default useClickOutside
