import { FC } from "react"
import { useMediaQuery } from "usehooks-ts"
import { Button } from "../../shared/Button"

interface ApplyAllowListButtonProps {
  position: "start" | "end"
  id: string
}
const ApplyAllowListButtton: FC<ApplyAllowListButtonProps> = ({ id, position }) => {
  const isXl = useMediaQuery("(max-width: 1150px)")
  return (
    <div
      className="flex"
      style={{
        justifyContent: isXl ? "center" : position,
      }}
    >
      <Button
        id={id}
        className="mt-[15px] xl:mt-[30px]
                  !px-0 !py-0
                  xl:w-[242px] xl:h-[46px]
                  w-[145px] h-[35px]"
        onClick={() => window.open("https://everythingcorp.cre8ors.com/quiz", "_blank")}
      >
        Apply now
      </Button>
    </div>
  )
}

export default ApplyAllowListButtton
