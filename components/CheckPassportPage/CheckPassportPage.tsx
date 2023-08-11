import { useMediaQuery } from "usehooks-ts"
import { useState } from "react"
import Layout from "../Layout"
import Input from "../../shared/Input"
import { Button } from "../../shared/Button"
import { checkFreeMintClaimed } from "../../lib/collectionHolder"

const CheckPassportPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [tokenId, setTokenId] = useState("")
  const [claimedFreeMintedText, setClaimedFreeMintedText] = useState(null)

  const onChangeTokenId = (e: any) => {
    setClaimedFreeMintedText("")
    setTokenId(e.target.value)
  }

  const checkClaimedMinted = async () => {
    const response = await checkFreeMintClaimed(tokenId)
    if (!response?.err) {
      setClaimedFreeMintedText(response ? "Free Mint Claimed" : "Free Mint Unclaimed")
      return
    }

    setClaimedFreeMintedText("")
  }

  return (
    <Layout type="contained">
      <div
        className="relative w-[100%] min-h-[100vh]
                    pt-[150px] md:pb-[50px]
                    flex flex-col items-center justify-end gap-y-[20px] md:gap-y-[20px]"
      >
        <div className="pb-[100px] md:pb-[200px]">
          <pre
            className="!m-0
                          font-eigerdals font-bold
                          w-[100%]
                          !text-[30px] md:!text-[50px] lg:!text-[65px] mb-4
                          text-center text-black dark:text-white
                          leading-[94.3%] md:leading-[102.3%]"
          >
            {isMobile ? "NFT Claim Checker" : "NFT Claim Checker"}
          </pre>
          <pre
            className="!m-0
                        pt-[35px]
                        font-quicksand font-medium
                        w-[100%]
                        !text-[12px] saumsungS8:!text-[14px] md:!text-[19px]
                        text-black dark:text-white
                        text-center
                        leading-[99.3%]"
          >
            {isMobile
              ? `Enter the token ID to see if a Cre8ors Passport is\neligible for a one-time claim of a Cre8ors AiPEP`
              : `Enter the token ID to see if a Cre8ors Passport is\neligible for a one-time claim of a Cre8ors AiPEP`}
          </pre>
          <div className="flex justify-center !pt-[50px]">
            <Input
              id="tokenid_input"
              value={tokenId}
              onChange={onChangeTokenId}
              placeholder="Token ID #"
              className="font-quicksand text-[12px] xs:!w-[180px] md:text-[16px] md:!w-[200px]"
              containerClassName="hover:scale-[1.1] scale-[1] transition duration-[250ms] md:!w-[400px]"
              hasDoubleAnimation
              endAdornment={
                <Button
                  id="subscribe_btn"
                  className={`rounded-tl-[0px] rounded-bl-[0px] 
                        !p-0
                        !w-[101px]
                        !h-[35px] md:!h-[44px]
                        uppercase text-[14px]
                        border-[none]`}
                  onClick={checkClaimedMinted}
                >
                  check
                </Button>
              }
            />
          </div>
          <div
            className="flex justify-center text-white pt-[50px]
                text-[14px] md:text-[19px]
                font-quicksand font-medium"
          >
            {claimedFreeMintedText}
          </div>
        </div>
        {!isMobile ? (
          <pre
            className="text-[14px] font-quicksand font-medium text-white
              w-full text-center"
          >
            {`Please note this checker updates in real time as Cre8ors are claimed. If you are purchasing a Passport on the secondary\nmarket, it’s possible for someone to claim immediately after you have checked, making the NFT no longer eligible.`}
          </pre>
        ) : (
          <div
            className="!text-[12px] saumsungS8:!text-[14px] font-quicksand font-medium text-white
              px-4
              w-full text-center break-words"
          >
            Please note this checker updates in real time as Cre8ors are claimed. If you are
            purchasing a Passport on the secondary market, it’s possible for someone to claim
            immediately after you have checked, making the NFT no longer eligible.
          </div>
        )}
      </div>
    </Layout>
  )
}

export default CheckPassportPage
