import Swiper, { EffectCreative, Mousewheel } from "swiper"
import { useMediaQuery } from "usehooks-ts"
import { useEffect, useState } from "react"
import Slider from "../../shared/Slider"
import Stage from "./Stage"
import Layout from "../Layout"
import { StageData } from "./types"
import data from "./data.json"

Swiper.use([Mousewheel])

const RoadmapPage = () => {
  const stages: StageData[] = data as StageData[]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(0)
  const [swiperCtrl, setSwiper] = useState<any>()

  const isResponsive = useMediaQuery("(max-width: 1150px)")
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isIphone = useMediaQuery("(max-width: 390px)")

  const changeHoverIndex = (newIndex: number) => setHoveredIndex(newIndex)

  const desktopHover = (swiper: any, event: any) => {
    const targetNumber = parseInt(event.target.id.replace("roadmap_slide_", ""), 10)

    let scrollOffset = activeIndex < swiper.realIndex ? 1 : -1

    if (activeIndex === 16 && swiper.realIndex === 0) scrollOffset = 1
    if (activeIndex === 0 && swiper.realIndex === 16) scrollOffset = -1

    let scrolledIndex = targetNumber + scrollOffset

    if (scrolledIndex === 18) scrolledIndex = 1
    if (scrolledIndex === 0) scrolledIndex = 17

    setHoveredIndex(scrolledIndex === swiper.realIndex + 1 ? scrolledIndex : 100)
  }

  useEffect(() => {
    let closestIndex = 0
    let closestTimeDiff = Math.abs(new Date(stages[0].date).getTime() - new Date().getTime())

    stages.forEach((stage: StageData, index: number) => {
      const currentOffset = Math.abs(new Date(stage.date).getTime() - new Date().getTime())

      if (currentOffset < closestTimeDiff) {
        closestTimeDiff = currentOffset
        closestIndex = index
      }
    })

    setCurrentIndex(closestIndex)
  }, [stages])

  useEffect(() => {
    if (swiperCtrl) swiperCtrl.slideTo(currentIndex)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex])

  return (
    <Layout type="contained">
      <div
        className="flex justify-center"
        style={{
          // eslint-disable-next-line no-nested-ternary
          marginTop: isResponsive ? (isIphone ? "40px" : "30px") : "30px",
        }}
      >
        <Slider
          className="[&>.swiper-wrapper]:xl:!mt-[280px]
            [&>.swiper-wrapper]:md:!mt-[356px]
            [&>.swiper-wrapper]:xs:!mt-[203px]
            [&>.swiper-wrapper]:mt-[163.6px]
            !h-[490.8px] xs:!h-[609px] md:!h-[1068px] xl:!h-[840px]"
          slideClassName="!h-[163.6px] xs:!h-[203px] md:!h-[356px] xl:!h-[280px]"
          sliderProps={{
            breakpoints: {
              393: {
                creativeEffect: {
                  next: {
                    translate: [0, "203px", 0],
                  },
                  prev: {
                    translate: [0, `-203px`, 0],
                  },
                  limitProgress: 2,
                },
              },
              768: {
                creativeEffect: {
                  next: {
                    translate: [0, `356px`, 0],
                  },
                  prev: {
                    translate: [0, `-356px`, 0],
                  },
                  limitProgress: 2,
                },
              },
              1150: {
                creativeEffect: {
                  next: {
                    translate: [0, "280px", 0],
                  },
                  prev: {
                    translate: [0, `-280px`, 0],
                  },
                  limitProgress: 2,
                },
              },
            },
            slidesPerView: 3,
            initialSlide: 2,
            direction: "vertical",
            effect: "creative",
            loop: true,
            speed: 400,
            onSwiper(swiper) {
              setSwiper(swiper)
            },
            onScroll(swiper, event: any) {
              if (!isMobile) {
                if (event.target.id) {
                  desktopHover(swiper, event)

                  return
                }
                setHoveredIndex(100)
              }
            },
            onSlideChange: (swiper) => {
              setActiveIndex(swiper.realIndex)
              if (isMobile) setHoveredIndex(swiper.realIndex + 1)
            },
            mousewheel: {
              sensitivity: 1,
            },
            modules: [EffectCreative],
            creativeEffect: {
              next: {
                translate: [0, "163.6px", 0],
                scale: 0.8,
                opacity: 0.7,
              },
              prev: {
                translate: [0, `-163.6px`, 0],
                scale: 0.8,
                opacity: 0.7,
              },
              limitProgress: 2,
            },
          }}
        >
          {stages.map((stage: StageData, index: number) => (
            <Stage
              key={stage.backImg}
              activeIndex={activeIndex}
              hoveredIndex={hoveredIndex}
              changeHoverIndex={changeHoverIndex}
              stageData={stage}
              stageNumber={index}
              // eslint-disable-next-line no-nested-ternary
              slideWidth={isResponsive ? (isMobile ? (isIphone ? 328 : 407) : 731) : 1150}
              // eslint-disable-next-line no-nested-ternary
              slideHeight={isResponsive ? (isMobile ? (isIphone ? 163.6 : 203) : 356) : 280}
              // eslint-disable-next-line no-nested-ternary
              imgWidth={isResponsive ? (isMobile ? (isIphone ? 304 : 377) : 677) : 1065}
              // eslint-disable-next-line no-nested-ternary
              imgHeight={isResponsive ? (isMobile ? (isIphone ? 147 : 182) : 327) : 257}
            />
          ))}
        </Slider>
      </div>
    </Layout>
  )
}

export default RoadmapPage
