/* eslint-disable @next/next/no-img-element */
const MyMessage = ({ message }) => (
  <div className="w-full flex justify-start mb-4">
    <div className="p-2 mb-2 text-gray-800 bg-[black] rounded-lg w-[80%] p-[14px]">
      <div className="text-white font-quicksand font-medium text-[17px]">{message.message}</div>
    </div>
  </div>
)

export default MyMessage
