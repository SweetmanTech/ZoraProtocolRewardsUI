import { FC } from "react"
import AttributeCard from "./AttributeCard"

interface PFPInformationProps {
  expandMore: boolean
}

const PFPInformation: FC<PFPInformationProps> = ({ expandMore }) => (
  <>
    {expandMore && (
      <div
        className="font-quicksand uppercase text-[32px] [writing-mode:vertical-lr]
            rotate-[180deg]"
      >
        CRE8OR #2938
      </div>
    )}
    <div className="flex flex-col gap-y-[10px]">
      <AttributeCard label="environment" attribute="city" />
      <AttributeCard label="shape" attribute="pill" />
      <AttributeCard label="skin" attribute="teal" />
      <AttributeCard label="face" attribute="aloof" />
      <AttributeCard label="cheeks" attribute="huh" />
      <AttributeCard label="clothing" attribute="Jacket shirt & chain" />
      <AttributeCard label="hair" attribute="bald" />
      <AttributeCard label="accessory" attribute="hat" />
    </div>
    {!expandMore && (
      <div
        className="font-quicksand uppercase text-[68px] [writing-mode:vertical-rl]
            text-white
            leading-[103.3%]
            rotate-[180deg]"
      >
        CRE8OR #2938
      </div>
    )}
  </>
)

export default PFPInformation
