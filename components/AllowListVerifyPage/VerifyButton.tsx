import { useState } from "react"
import Image from "next/image"
import { Button } from "../../shared/Button"
import useTwitterVerification from "../../hooks/useTwitterVerification"

const VerifyButton = ({ tweet }: any) => {
  const [loading, setLoading] = useState(false)
  const { verify } = useTwitterVerification()

  const handleClick = async () => {
    if (loading) return
    setLoading(true)
    await verify(tweet)
    setLoading(false)
  }

  return (
    <div className="grid gird-cols-1 md:grid-cols-2 gap-y-[20px] md:gap-x-[120px]">
      <div
        className="flex items-center
                    text-[15px] samsungS8:text-[19px]
                    justify-center md:justify-start
                    text-black dark:text-white
                    font-medium font-quicksand"
      >
        Step 3: Click Verify To Check Status
      </div>
      <div className="flex justify-center md:justify-start">
        {tweet && (
          <Button
            onClick={handleClick}
            id="verify_btn"
            className="!uppercase 
                            md:w-[291px] md:h-[46px]
                            w-[280px] h-[40px]"
          >
            {loading ? (
              <Image
                src="/assets/Common/loading.svg"
                width={64}
                height={64}
                alt="not found image"
              />
            ) : (
              "Verify"
            )}
          </Button>
        )}
      </div>
    </div>
  )
}

export default VerifyButton
