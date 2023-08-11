import { useState, ReactNode, useEffect } from "react"

interface IPopoverFucChild {
  toggleModal: () => void
}

interface PopoverProps {
  id: string
  children?: [ReactNode, (props: IPopoverFucChild) => any]
  className?: string
  open?: boolean
}

export default function Popover({ id, open, children, className }: PopoverProps) {
  const [openModal, setOpenModal] = useState(open || false)

  const toggleModal = () => {
    if (openModal) {
      setOpenModal(false)

      return
    }
    setOpenModal((prev) => !prev)
  }

  useEffect(() => {
    setOpenModal(open)
  }, [open])

  return (
    <div className="relative z-[52]">
      <div onClick={toggleModal}>{children && children[0]}</div>
      {openModal && (
        <div
          className={`${
            className || ""
          } fixed w-screen h-screen bottom-0 left-0 flex justify-center items-center z-[51]`}
          id={id}
        >
          {children && typeof children[1] !== "function" && children[1]}
          {children &&
            typeof children[1] === "function" &&
            (children[1] as any)({
              toggleModal,
            })}
        </div>
      )}
    </div>
  )
}
