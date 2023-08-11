import { FC } from "react"
import { useMediaQuery } from "usehooks-ts"
import Media from "../../shared/Media"

interface WalletCollectionProps {
  handleExpandMore: (expanded: boolean) => void
  expandMore: boolean
}

const WalletCollection: FC<WalletCollectionProps> = ({ handleExpandMore, expandMore }) => {
  const isMobile = useMediaQuery("(max-width: 1024px)")

  const mockData = [
    {
      label: "CRE8OR #2 InTraining",
      type: "cre8or",
    },
    {
      label: "PASSPORT 88",
      isLocked: false,
    },
    {
      label: "DNA 752",
    },
    {
      label: "CRE8OR #2 InTraining",
      type: "cre8or",
    },
    {
      label: "PASSPORT 88",
    },
    {
      label: "DNA 752",
    },
    {
      label: "PASSPORT 88",
    },
    {
      label: "CRE8OR #46 InTraining",
      type: "cre8or",
      isLocked: false,
    },
    {
      label: "DNA 67",
    },
    {
      label: "CRE8OR #46 InTraining",
      type: "cre8or",
      isLocked: false,
    },
    {
      label: "DNA 67",
    },
  ]

  return (
    <div
      className={`${
        !expandMore
          ? `${
              isMobile ? "mobile_un_expand_more" : "un_expand_more"
            } h-[55px] lg:h-[70px] overflow-hidden`
          : `${
              isMobile ? "mobile_expand_more" : "expand_more"
            } h-[220px] lg:h-[415px] rounded-t-[10px] lg:rounded-t-[20px] 
            bg-gradient-to-b from-[black] via-[#000000f5] to-[#00000066]`
      } 
      
        w-full flex justify-between items-start mt-[20px] pt-[20px]
        gap-x-[10px]
        lg:px-10 lg:pb-10
        px-2 pb-2`}
    >
      <div>
        <div className="flex items-center gap-x-[5px] samsungS8:gap-x-[10px]">
          <Media
            type="image"
            containerClasses="w-[15px] h-[15px] lg:w-[25px] lg:h-[25px]"
            link="/assets/Profile/help.svg"
            blurLink="/assets/Profile/help.png"
          />
          <p
            className="text-[9px] samsungS8:text-[12px] lg:text-[22px] font-quicksand font-bold
                    text-white uppercase"
          >
            SMART WALLET
          </p>
          <button type="button" onClick={() => handleExpandMore(!expandMore)}>
            <Media
              type="image"
              containerClasses="w-[15px] h-[15px] lg:w-[22px] lg:h-[22px]"
              link="/assets/Profile/arrow_down.svg"
              blurLink="/assets/Profile/arrow_down.png"
            />
          </button>
        </div>
        <div className="border-r-[2px] pr-[20px] lg:pr-[50px] border-r-[white]">
          <div
            className="mt-[35px]
                  bg-[url('/assets/Profile/mini_pfp.png')]
                  bg-cover relative
                  flex items-center justify-center
                  lg:px-4 lg:py-6
                  p-2
                  rounded-[8px] lg:rounded-[15px]
                  overflow-hidden
                  lg:w-[287px] lg:h-[287px]
                  samsungS8:w-[130px] samsungS8:h-[130px]
                  w-[120px] h-[120px]"
          >
            <div className="absolute w-full h-full bg-[white] left-0 top-0 opacity-[0.2] z-[1]" />
            <div
              className="grid grid-cols-3 w-full relative z-[2]
                      gap-y-[5px] lg:gap-y-[15px]"
            >
              {[...Array(9)].map((_, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div className="flex justify-center" key={i}>
                  <div
                    className="w-[30px] h-[30px] samsungS8:w-[35px] samsungS8:h-[35px] lg:w-[69px] lg:h-[67px] rounded-[5px] lg:rounded-[8px] bg-[#ffffffb5]
                                      drop-shadow-[0_4px_4px_rgba(0,0,0,0.45)]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-end gap-x-[5px] samsungS8:gap-x-[10px]">
          <p
            className="text-[9px] samsungS8:text-[12px] lg:text-[22px] font-quicksand font-bold
                    text-white uppercase"
          >
            VIEW COLLECTION
          </p>
          <button type="button" onClick={() => handleExpandMore(!expandMore)}>
            <Media
              type="image"
              containerClasses="w-[15px] h-[15px] lg:w-[22px] lg:h-[22px]"
              link="/assets/Profile/arrow_down.svg"
              blurLink="/assets/Profile/arrow_down.png"
            />
          </button>
        </div>
        <div
          className="grid grid-cols-3 xs:grid-cols-4 lg:grid-cols-6 gap-x-[5px] lg:gap-x-[15px] gap-y-[5px] pt-[15px] mt-[20px]
                h-[140px] lg:h-[287px] 
                overflow-y-auto overflow-x-hidden
                pr-4"
        >
          {mockData.map((data, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i} className="flex flex-col items-center gap-y-[5px]">
              <div className="w-[30px] h-[30px] samsungS8:w-[35px] samsungS8:h-[35px] lg:w-[93px] lg:h-[93px] bg-white rounded-[5px] lg:rounded-[15px]" />
              <div
                className="text-[8px] lg:text-[12px] font-quicksand font-bold text-white
                            w-[30px] samsungS8:w-[40px] lg:w-[67px] text-center"
              >
                {data.label}
                {data.type === "cre8or" &&
                  (data.isLocked ? (
                    <Media
                      type="image"
                      containerClasses="w-[13.54px] h-[16.83px]"
                      link="/assets/Profile/locked.svg"
                      blurLink="/assets/Profile/locked.png"
                    />
                  ) : (
                    <Media
                      type="image"
                      containerClasses="w-[14.8px] h-[17px]"
                      link="/assets/Profile/unlock.svg"
                      blurLink="/assets/Profile/unlock.png"
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WalletCollection
