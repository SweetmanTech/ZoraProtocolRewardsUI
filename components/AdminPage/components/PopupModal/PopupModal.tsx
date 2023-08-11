import Image from "next/image"
import customLoader from "../../../../lib/customLoader"

const PopupModal = ({ open }: { open: boolean }) =>
  open && (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0 rounded-2xl">
          <Image
            src="/spinner.gif"
            alt="potion"
            width={800}
            height={800}
            className="rounded-2xl"
            loader={customLoader}
          />
        </div>
      </div>
    </div>
  )

export default PopupModal
