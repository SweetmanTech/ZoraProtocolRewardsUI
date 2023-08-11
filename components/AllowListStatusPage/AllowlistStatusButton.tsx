import { Button } from "../../shared/Button"

const AllowlistStatusButton = ({ onClick, text = "Apply for Allowlist" }) => (
  <Button
    onClick={onClick}
    id="quiz_btn"
    className="!uppercase md:w-[291px] md:h-[46px]w-[280px] h-[40px]"
  >
    {text}
  </Button>
)

export default AllowlistStatusButton
