import { FC } from "react"

interface AttributeCardProps {
  label: string
  attribute: string
}

const AttributeCard: FC<AttributeCardProps> = ({ label, attribute }) => (
  <div
    className="w-[200px] h-[52px]
        drop-shadow-[0_4px_4px_rgba(0,0,0,0.45)]
        bg-[#ffffffbd] rounded-[8px]
        p-2
        flex flex-col justify-between"
  >
    <div
      className="font-quicksand text-[12px]
            uppercase leading-[99.3%] text-left"
    >
      {label}
    </div>
    <div
      className="font-quicksand text-[12px] font-bold
            uppercase
            text-right"
    >
      {attribute}
    </div>
  </div>
)

export default AttributeCard
