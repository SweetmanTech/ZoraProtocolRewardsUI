import { useEffect, useState } from "react"

const Timer = () => {
  const [days, setDays] = useState("00")
  const [hours, setHours] = useState("00")
  const [minutes, setMinutes] = useState("00")
  const [seconds, setSeconds] = useState("00")

  const mintDay = "8/8/2023, 8:00:00 AM"

  const getTime = () => {
    const time =
      new Date(mintDay).getTime() -
      new Date(
        new Date().toLocaleString("en-us", {
          timeZone: "America/New_York",
        }),
      ).getTime()

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)).toString())
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24).toString())
    setMinutes(Math.floor((time / 1000 / 60) % 60).toString())
    setSeconds(Math.floor((time / 1000) % 60).toString())
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white p-[10px] xl:p-[20px] rounded-[10px]">
      <div className="grid grid-cols-4 gap-x-[10px] samsungS8:gap-x-[12px] xl:gap-x-[30px]">
        <div>
          <div
            className="font-quicksand font-bold 
          text-[7px] xl:text-[20px]
          text-center pb-[3px] xl:pb-[15px]"
          >
            DAYS
          </div>
          <div
            className="grid grid-cols-2 
          gap-x-[3px] xl:gap-x-[10px]"
          >
            <div
              className="text-center text-white flex items-center justify-center
              leading-[100%]
              text-[35px] xl:text-[98px] font-medium font-quicksand bg-black rounded-[10px]
              min-w-[30px] samsungS8:min-w-[35px] xl:min-w-[80px] xl:h-[102px] h-[44px]"
            >
              {days.length > 1 ? days[0] : "0"}
            </div>
            <div
              className="text-center text-white flex items-center justify-center
              leading-[100%]
              text-[35px] xl:text-[98px] font-medium font-quicksand bg-black rounded-[10px]
              min-w-[30px] samsungS8:min-w-[35px] xl:min-w-[80px] xl:h-[102px] h-[44px]"
            >
              {days.length > 1 ? days[1] : days[0]}
            </div>
          </div>
        </div>
        <div>
          <div
            className="font-quicksand font-bold
          text-[7px] xl:text-[20px]
          text-center pb-[3px] xl:pb-[15px]"
          >
            HOURS
          </div>
          <div
            className="grid grid-cols-2
            gap-x-[3px] xl:gap-x-[10px]"
          >
            <div
              className="text-center text-white flex items-center justify-center
              leading-[100%]
              text-[35px] xl:text-[98px] font-medium font-quicksand bg-black rounded-[10px]
              min-w-[30px] samsungS8:min-w-[35px] xl:min-w-[80px] xl:h-[102px] h-[44px]"
            >
              {hours.length > 1 ? hours[0] : "0"}
            </div>
            <div
              className="text-center text-white flex items-center justify-center
              leading-[100%]
              text-[35px] xl:text-[98px] font-medium font-quicksand bg-black rounded-[10px]
              min-w-[30px] samsungS8:min-w-[35px] xl:min-w-[80px] xl:h-[102px] h-[44px]"
            >
              {hours.length > 1 ? hours[1] : hours[0]}
            </div>
          </div>
        </div>
        <div>
          <div
            className="font-quicksand font-bold
          text-[7px] xl:text-[20px]
          text-center pb-[3px] xl:pb-[15px]"
          >
            MINUTES
          </div>
          <div
            className="grid grid-cols-2
            gap-x-[3px] xl:gap-x-[10px]"
          >
            <div
              className="text-center text-white flex items-center justify-center
              leading-[100%]
              text-[35px] xl:text-[98px] font-medium font-quicksand bg-black rounded-[10px]
              min-w-[30px] samsungS8:min-w-[35px] xl:min-w-[80px] xl:h-[102px] h-[44px]"
            >
              {minutes.length > 1 ? minutes[0] : "0"}
            </div>
            <div
              className="text-center text-white flex items-center justify-center
              leading-[100%]
              text-[35px] xl:text-[98px] font-medium font-quicksand bg-black rounded-[10px]
              min-w-[30px] samsungS8:min-w-[35px] xl:min-w-[80px] xl:h-[102px] h-[44px]"
            >
              {minutes.length > 1 ? minutes[1] : minutes[0]}
            </div>
          </div>
        </div>
        <div>
          <div
            className="font-quicksand font-bold
          text-[7px] xl:text-[20px]
          text-center pb-[3px] xl:pb-[15px]"
          >
            SECONDS
          </div>
          <div
            className="grid grid-cols-2
            gap-x-[3px] xl:gap-x-[10px]"
          >
            <div
              className="text-center text-white flex items-center justify-center
              leading-[100%]
              text-[35px] xl:text-[98px] font-medium font-quicksand bg-black rounded-[10px]
              min-w-[30px] samsungS8:min-w-[35px] xl:min-w-[80px] xl:h-[102px] h-[44px]"
            >
              {seconds.length > 1 ? seconds[0] : "0"}
            </div>
            <div
              className="text-center text-white flex items-center justify-center
              leading-[100%]
              text-[35px] xl:text-[98px] font-medium font-quicksand bg-black rounded-[10px]
              min-w-[30px] samsungS8:min-w-[35px] xl:min-w-[80px] xl:h-[102px] h-[44px]"
            >
              {seconds.length > 1 ? seconds[1] : seconds[0]}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timer
