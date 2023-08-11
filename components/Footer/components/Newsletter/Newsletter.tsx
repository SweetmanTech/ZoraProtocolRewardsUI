import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const handleClick = async (e) => {
    e.preventDefault()
    await axios.post("/api/newsletter", { email })
    toast.success("Subscribed!")
    setEmail("")
  }
  const onChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className="flex flex-col items-start pl-4 md:p-0 md:block col-span-4 md:col-span-1">
      <div className="font-quicksand text-[8px] md:text-[16px] dark:text-[white] text-[black]">
        Join our newsletter
      </div>
      <div className="relative p-0 md:pt-[0.5rem] w-[116px] md:w-[250px]">
        <input
          className="text-[5px] md:text-[12px] border-[1px] border-[black] rounded-[3rem] !w-[116px] md:!w-full font-quicksand px-[10px] md:px-3 py-1"
          placeholder="Email Address"
          onChange={onChange}
          value={email}
        />
        <div className="absolute top-[0.5px] right-[5px] md:top-[8px] md:right-[0px] md:right-[10px]">
          <button
            type="button"
            className="bg-[black] px-1 py-[1px] md:px-2 md:py-[1px] rounded-[2rem] text-[white] text-[5px] md:text-[10px]"
            onClick={handleClick}
            disabled={!!(email.length === 0 || !email.includes("@"))}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
