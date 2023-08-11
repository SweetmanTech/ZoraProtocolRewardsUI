import { Button } from "../../shared/Button"
import { useProfileProvider } from "../../providers/ProfileContext"

const EditPanel = () => {
  const { saveProfile, setIsEditable, loading } = useProfileProvider()

  return (
    <div
      className={`absolute w-full 
              left-0 top-[20px] z-[80]
              flex justify-center items-end`}
    >
      <div
        className="w-[310px] h-[50px]
              rounded-[40px] bg-black
              flex items-center justify-center
              gap-x-[10px] ml-[80px]"
      >
        <div
          className="text-white text-[15px]
                  font-quicksand font-medium"
        >
          You are in editing mode.
        </div>
        <Button
          id="save-btn"
          className="!p-0 !w-[60px] !h-[30px] !rounded-[20px] 
                  !text-[15px]
                  !font-quicksand !font-bold !uppercase"
          onClick={!loading ? saveProfile : () => {}}
        >
          Save
        </Button>
        <Button
          id="cancel-btn"
          className="!p-0 !w-[30px] !h-[30px] !rounded-full 
                  !text-[15px]
                  !font-quicksand !font-bold !uppercase"
          onClick={() => setIsEditable(false)}
        >
          X
        </Button>
      </div>
    </div>
  )
}

export default EditPanel
