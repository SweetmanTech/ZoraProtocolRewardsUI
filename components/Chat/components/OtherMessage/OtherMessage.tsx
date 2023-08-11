/* eslint-disable @next/next/no-img-element */
const OtherMessage = ({ message }) => (
  <div className="w-full flex justify-end mb-4">
    <div className="p-2 mb-2 text-gray-800 bg-[white] rounded-lg w-[80%] p-[14px] shadow-[3px_3px_4px_rgba(0,0,0,0.25)]">
      <div className="text-[black] font-quicksand font-medium text-[17px]">{message.message}</div>
    </div>
  </div>
)

export default OtherMessage
