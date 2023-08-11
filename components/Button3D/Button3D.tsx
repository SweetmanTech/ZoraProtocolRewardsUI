import { FC } from "react"

interface Button3DProps {
  text: string
  onClick: () => void
}
const Button3D: FC<Button3DProps> = ({ text, onClick }) => (
  <button type="button" className="relative font-lg font-eigerdals" onClick={onClick}>
    <div className="absolute inset-x-0 h-full bg-[#bb9002] border border-[#bb9002] rounded-lg shadow-lg -bottom-2 shadow-slate-800 " />
    <div className="relative px-14 py-4 transition duration-200 transform bg-[#f6bf03] border border-[#f6bf03] rounded-lg hover:translate-y-1 active:translate-y-2 hover:border-none hover:bg-gray-100">
      {text}
    </div>
  </button>
)
export default Button3D
