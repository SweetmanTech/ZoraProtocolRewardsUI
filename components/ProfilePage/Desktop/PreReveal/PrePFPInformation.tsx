import { useProfileProvider } from "../../../../providers/ProfileContext"

const PrePFPInformation = () => {
  const { cre8orNumber } = useProfileProvider()

  return (
    <div
      className="font-quicksand uppercase text-[68px] [writing-mode:vertical-rl]
            text-black
            leading-[103.3%]
            rotate-[180deg]"
    >
      {cre8orNumber ? `CRE8OR #${cre8orNumber}` : ""}
    </div>
  )
}

export default PrePFPInformation
