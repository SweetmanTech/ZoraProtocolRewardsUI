import { FC, useRef } from "react"
import Image from "next/image"
import { useMediaQuery } from "usehooks-ts"
import useShakeEffect from "../../hooks/useShakeEffect"
import { StageData } from "./types"

interface StageProps {
  stageData: StageData
  stageNumber: number
  slideWidth: number
  slideHeight: number
  imgWidth: number
  imgHeight: number
  activeIndex: number
  hoveredIndex: number
  changeHoverIndex: (newIndex: number) => void
}

const Stage: FC<StageProps> = ({
  stageData,
  stageNumber,
  slideHeight,
  slideWidth,
  imgWidth,
  imgHeight,
  activeIndex,
  hoveredIndex,
  changeHoverIndex,
}) => {
  const shakeRef = useRef()

  const isResponsive = useMediaQuery("(max-width: 1150px)")
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isXs = useMediaQuery("(max-width: 393px)")
  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ]

  const shouldBeLocked =
    new Date(stageData.date).getTime() - new Date().getTime() >= 0 || !stageData.date

  useShakeEffect({
    ref: shakeRef,
    isEnabled: shouldBeLocked || !stageData.date,
  })

  const getBottomTranslateY = () => {
    if (isXs) return -30
    if (isMobile) return -35

    return 0
  }

  const getTopTranslateY = () => {
    if (isXs) return 25
    if (isMobile) return 30

    return 0
  }

  const getTransform = () => {
    if (activeIndex === 15 && stageNumber === 0) {
      return getBottomTranslateY()
    }

    if (activeIndex === 16 && stageNumber === 1) {
      return getBottomTranslateY()
    }

    if (activeIndex === 0 && stageNumber === 15) {
      return getTopTranslateY()
    }

    if (activeIndex === 1 && stageNumber === 16) {
      return getTopTranslateY()
    }

    if (stageNumber === activeIndex - 2) {
      return getTopTranslateY()
    }

    if (stageNumber === activeIndex + 2) {
      return getBottomTranslateY()
    }

    return 0
  }

  return (
    <div
      className="relative
            cursor-grab flex justify-center items-center relative"
      style={{
        width: `${slideWidth}px`,
        height: `${slideHeight}px`,
        transform: `translateY(${getTransform()}px)`,
      }}
    >
      <a
        href={shouldBeLocked ? "/roadmap" : stageData.link}
        target={shouldBeLocked ? "_self" : "_blank"}
        rel="noreferrer"
        onClick={(e) => {
          if (shouldBeLocked) e.preventDefault()
        }}
      >
        <div
          className={`relative z-[1] rounded-[10px] md:!rounded-[20px]
                  [&>div]:rounded-[10px] [&>div]:md:!rounded-[20px]
                  ${hoveredIndex === stageNumber + 1 ? "scale-[1.02]" : "scale-[1]"}
                  transition duration-[500ms] shake`}
          style={{
            backgroundImage: `url('${
              // eslint-disable-next-line no-nested-ternary
              isResponsive
                ? shouldBeLocked
                  ? stageData.mobileLockBackImg
                  : stageData.mobileBackImg
                : stageData.backImg
            }')`,
            backgroundSize: `${imgWidth}px ${imgHeight}px`,
            width: `${imgWidth}px`,
            height: `${imgHeight}px`,
          }}
          ref={shakeRef}
        >
          {shouldBeLocked && !isResponsive && (
            <div className="absolute w-[100%] h-[100%] backdrop-blur-[10px] top-0 left-0 z-[2]  pointer-events-none" />
          )}
          <div
            className="absolute w-[100%] h-[100%] z-[1] top-0 left-0
                      bg-gradient-to-r from-[#000000ed] via-[transparent] to-[#000000ed]"
          />

          <div className="absolute w-[100%] h-[100%] z-[1] top-0 left-0 z-[3]">
            <div
              className="font-[eigerdals] pl-3 text-white opacity-[0.3]
                xl:pl-8
                md:pl-6
                pl-2 
              "
              style={{
                fontSize: isResponsive ? `${(161 / 328) * imgHeight}px` : "250px",
                lineHeight: isResponsive ? `${(161 / 328) * imgHeight}px` : "261px",
              }}
            >
              {stageData.date ? stageNumber + 1 : "XX"}
            </div>
          </div>

          <div
            className="absolute w-[100%] h-[100%] flex items-end
                      p-[10px] md:p-[20px] xl:p-6 
                      left-0 top-0 z-[7] pointer-events-none"
            style={{
              boxShadow: shouldBeLocked || !stageData.date ? "inset 0px 0px 18px 5px" : "",
            }}
          >
            <div
              className="text-white uppercase font-[quicksand] font-[650] leading-[100%]"
              style={{
                fontSize: `${(!isResponsive ? 28 / 1065 : 34 / 678) * imgWidth}px`,
              }}
            >
              {stageData.date ? stageData.label : "[REDACTED]"}
            </div>
          </div>
          <div
            className={`absolute w-[100%] h-[100%] flex flex-row justify-end items-end xl:flex-col xl:justify-between 
                      left-0 top-0 z-[5] p-[10px] md:p-[20px] xl:p-6 pointer-events-none`}
          >
            {!isResponsive && (
              <Image
                src={
                  shouldBeLocked || !stageData.date
                    ? "/assets/Roadmap/lock.svg"
                    : "/assets/Roadmap/unlock.svg"
                }
                width={
                  shouldBeLocked || !stageData.date
                    ? (36 / 1065) * slideWidth
                    : (47.44 / 1065) * slideWidth
                }
                height={
                  shouldBeLocked || !stageData.date
                    ? (47.25 / 1065) * slideWidth
                    : (46 / 1065) * slideWidth
                }
                alt="not found image"
              />
            )}
            <div
              className="font-[quicksand] text-white font-[700] uppercase leading-[70%] xl:leading-[100%]"
              style={{
                fontSize: `${(!isResponsive ? 28 / 1065 : 34 / 678) * imgWidth}px`,
              }}
            >
              {
                // eslint-disable-next-line no-nested-ternary
                stageData.date
                  ? `${
                      months[
                        parseInt(
                          stageData.date.slice(
                            stageData.date.length - 5,
                            stageData.date.length - 2,
                          ),
                          10,
                        ) - 1
                      ]
                    } ${
                      stageData.certain
                        ? parseInt(
                            stageData.date.slice(stageData.date.length - 2, stageData.date.length),
                            10,
                          )
                        : ""
                    }${
                      stageData.period
                        ? ` - ${
                            parseInt(
                              stageData.date.slice(
                                stageData.date.length - 2,
                                stageData.date.length,
                              ),
                              10,
                            ) +
                            stageData.period -
                            1
                          }`
                        : ""
                    }`
                  : "???????????"
              }
            </div>
          </div>
          <pre
            className={`z-[4] w-[100%] h-[100%] absolute left-0 top-0 
            xl:pl-6 xl:pt-6 xl:pr-20
            p-[10px] md:p-[20px]
            font-quicksand 
            leading-[130%]
            text-white
            rounded-[10px] md:rounded-[20px]
          ${
            hoveredIndex === stageNumber + 1
              ? "bg-gradient-to-r from-[#000000cf] via-[#00000080] to-[#000000cf] opacity-[1] "
              : "bg-transparent opacity-0"
          }
          ${
            activeIndex === stageNumber
              ? "hover:bg-gradient-to-r hover:from-[#000000cf] hover:via-[#00000080] hover:to-[#000000cf] hover:opacity-[1]"
              : ""
          }
          transition duration-[200ms]`}
            onMouseOut={() => {
              if (activeIndex === stageNumber) changeHoverIndex(100)
            }}
            onBlur={() => {}}
            id={`roadmap_slide_${stageNumber + 1}`}
            style={{
              fontSize: isResponsive
                ? `${(stageData.mobile_font_size / 678) * imgWidth}px`
                : "19px",
            }}
          >
            <div
              className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] pointer-events-none items-center justify-center"
              style={{
                display: stageNumber > 10 && isResponsive ? "flex" : "block",
                height: stageNumber > 10 && isResponsive ? "100%" : "",
              }}
            >
              {isResponsive ? stageData.mobile_text : stageData.text}
            </div>
          </pre>
        </div>
      </a>
    </div>
  )
}

export default Stage
