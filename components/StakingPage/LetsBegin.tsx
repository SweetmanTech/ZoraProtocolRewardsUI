import { useState, FC } from "react"
import { EffectCreative, Pagination, Navigation } from "swiper"
import Checkbox from "../../shared/Checkbox"
import Content from "../Common/Content"
import Title from "../Common/Title"
import { Button } from "../../shared/Button"
import Slider from "../../shared/Slider"
import Media from "../../shared/Media"
import { STATUS } from "./Status"

interface LetsBeginProps {
  handleStep: (step: string) => void
}

const LetsBegin: FC<LetsBeginProps> = ({ handleStep }) => {
  const [isSelectedAll, setIsSelectedAll] = useState(false)
  const [swiper, setSwiper] = useState<any>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [nftList, setNftList] = useState<any>([
    {
      id: "avatar1",
      media: "/assets/Mint/Cre8orsWay/avatar1.png",
      selected: false,
    },
    {
      id: "avatar2",
      media: "/assets/Mint/Cre8orsWay/avatar2.png",
      selected: false,
    },
    {
      id: "avatar3",
      media: "/assets/Mint/Cre8orsWay/avatar3.png",
      selected: false,
    },
  ])

  const toggleSelected = (activeIndex: number) => {
    setSelectedIndex(activeIndex)
  }

  const nextSlide = () => {
    if (selectedIndex === nftList.length - 1) return

    const temp = selectedIndex

    setSelectedIndex(temp + 1)
    swiper.slideTo(temp + 1)
  }

  const prevSlide = () => {
    if (selectedIndex === 0) return

    const temp = selectedIndex

    setSelectedIndex(temp - 1)
    swiper.slideTo(temp - 1)
  }

  const beginTrain = () => {
    handleStep(STATUS.TXLOADING)

    setTimeout(() => {
      handleStep(STATUS.PROFILE)
    }, 2000)
  }

  const clickSlide = (index: number) => {
    const temp = [...nftList]

    temp[index].selected = !temp[index].selected

    setIsSelectedAll(temp.filter((item) => item.selected).length === temp.length)
    setNftList([...temp])
  }

  return (
    <div
      className="max-w-[1280px] flex-grow flex flex-col justify-end md:flex-row items-center 
            pb-[180px] samsungS8:pb-[220px] xs:pb-[290px] md:pb-0 relative z-[100]"
    >
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <div className="flex justify-center items-center">
          <div className="dark:bg-black rounded-[20px] px-[10px] samsungS8:px-0 pt-[40px] pb-[20px] md:py-[40px] md:px-20">
            <Title
              text={`WHO'S TRAINING?`}
              className="leading-[102.3%]
                      !text-[28px] samsungS8:!text-[30px] xs:!text-[33px] md:!text-[51px]
                      text-center md:text-left fade_in_text"
            />
            <Content
              content="(Select Cre8ors to soft stake)"
              className="text-center
                        leading-[103.3%]
                        samsungS8:!text-[18px] md:!text-[26px] !font-bold"
            />
            <div className="flex justify-center pt-[10px]">
              <Checkbox
                id="select_all_staking"
                checked={isSelectedAll}
                onChange={() => setIsSelectedAll(!isSelectedAll)}
                label="SELECT ALL"
              />
            </div>
            <div className="flex justify-center gap-x-0 py-[40px]">
              <button onClick={prevSlide} type="button">
                <Media
                  type="image"
                  link="/assets/Staking/arrow_left.png"
                  containerClasses="w-[70px] h-[70px]
                  samsungS8:w-[93px] samsungS8:h-[93px]"
                />
              </button>
              <Slider
                className="[&>.swiper-pagination]:h-[20px]
                [&>.swiper-pagination]:!pointer-events-all
                [&>.swiper-pagination>.swiper-pagination-bullet]:bg-[white]
                [&>.swiper-pagination>.swiper-pagination-bullet]:!h-[14px]
                [&>.swiper-pagination>.swiper-pagination-bullet]:!w-[14px]
                !w-[150px] !h-[191px] xs:!w-[181px] xs:!h-[220px] !m-0"
                slideClassName="!w-[150px] !h-[150px] xs:!w-[181px] xs:!h-[181px]"
                sliderProps={{
                  slidesPerView: 1,
                  centeredSlides: true,
                  effect: "creative",
                  grabCursor: true,
                  modules: [EffectCreative, Pagination, Navigation],
                  onSlideChange: (swiperCtrl) => toggleSelected(swiperCtrl.activeIndex),
                  onSwiper(swiperCtrl) {
                    setSwiper(swiperCtrl)
                  },
                  pagination: {
                    clickable: true,
                  },
                }}
              >
                {nftList.map((nft, index) => (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                  <div
                    key={nft.id}
                    className={`flex justify-center items-center 
                  !w-[150px] !h-[150px] xs:!w-[181px] xs:!h-[181px]
                  rounded-[10px] overflow-hidden
                  border-[5px] ${
                    isSelectedAll || nft.selected ? "border-[#FAC103]" : "border-[black]"
                  }`}
                    onClick={() => clickSlide(index)}
                  >
                    <Media
                      link={nft.media}
                      type="image"
                      containerClasses="!w-[150px] !h-[150px] xs:!w-[181px] xs:!h-[181px]"
                    />
                  </div>
                ))}
              </Slider>
              <button onClick={nextSlide} type="button">
                <Media
                  type="image"
                  link="/assets/Staking/arrow_right.png"
                  containerClasses="w-[70px] h-[70px]
                  samsungS8:w-[93px] samsungS8:h-[93px]"
                />
              </button>
            </div>
            <div className="flex justify-center">
              <Button
                id="lets_begin_staking"
                className="!font-eigerdals !font-bold
                    !px-0 !py-0
                    w-[166px] h-[55px]
                    !text-[19px]"
                onClick={beginTrain}
              >
                {`Let's begin`}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LetsBegin
