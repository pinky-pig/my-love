import React from 'react'
import { pageColor } from '~/config/params'
import Footer from '~/components/ui/Footer'
import MyImage from '@/components/ui/MyImage'
import { timelines_variant } from '@/config/timelines'

export default function Life() {
  const [timelines, setTimelines] = React.useState<typeof timelines_variant>([])

  React.useEffect(() => {
    setTimeout(() => {
      setTimelines(timelines_variant)
    }, 1000)
  }, [])

  return (
    <div
      className="relative box-border h-screen w-screen overflow-x-hidden overflow-y-auto px-10px px-8.333vw py-3.5vw text-[#3E4857]"
      style={{ background: pageColor.timeline }}
    >
      {/* 副标题 */}
      <div className="w-full flex flex-row">
        <div
          className="transition-text-timeline font-600 tracking-1px"
          style={{ fontSize: 'calc(1rem + 0.3vw)' }}
        >
           Timeline
        </div>
      </div>

      {/* 标题 */}
      <h1
        className="mb-3.5vw font-800"
        style={{
          fontSize: 'calc(calc(1rem + 0.3vw)*3.2)',
          letterSpacing: 'calc(calc(1rem + 0.3vw)*0.4)',
        }}
      >
        <span>希望生活的</span>
        <br />
        <span>自由美好</span>
      </h1>

      {/* 侧边 */}
      <div className="absolute left-[2vw]">
        <div className="mx-a h-3vw max-h-5 max-w-5 w-3vw border-2px border-[#3e4857] rounded-full border-solid bg-transparent" />
        <div
          className="mx-a"
          style={{
            writingMode: 'vertical-lr',
            letterSpacing: '10px',
            fontSize: 'calc(14px + 0.2vw)',
            fontWeight: 600,
            marginTop: 'calc(14px + 0.2vw)',
          }}
        >
          时间
        </div>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="15.51px"
          height="1070px"
          viewBox="0 0 15.51 1070"
          preserveAspectRatio="none"
          style={{
            margin: '50%',
          }}
        >
          <g>
            <line
              x1="1"
              y1={window.document.body.scrollHeight + window.innerHeight}
              x2="1"
              y2="1"
              style={{
                fill: 'none',
                stroke: '#3E4857',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeMiterlimit: '10',
                strokeDasharray: '4,8',
                animation: 'stroke_animation 4s linear infinite',
              }}
            />
          </g>
        </svg>
      </div>

      <div className="relative box-border w-full flex flex-col flex-wrap cursor-pointer justify-start gap-10px overflow-hidden px-3vw pb-8dvh">
        {timelines.map((timeline) => (
          <div
            key={timeline.title}
            className="pointer-events-none w-fit select-none"
            style={{
              paddingBottom: '30px',
              marginBottom: '30px',
              borderBottom: '2px dashed rgb(72 69 69 / 25%)',
            }}
          >
            {/* date */}
            <div
              className="font-600 tracking-1px"
              style={{ fontSize: 'calc(1rem + 0.1vw)' }}
            >
              {timeline.date}
            </div>
            {/* title */}
            <div
              className="font-800"
              style={{
                fontSize: 'calc(calc(1rem + 0.3vw)*1.2)',
                letterSpacing: 'calc(calc(1rem + 0.3vw)*0.4)',
              }}
            >
              {timeline.title}
            </div>

            {/* content */}
            <div
              className="my-2 font-400 tracking-1px"
              style={{ fontSize: 'calc(1rem + 0.2vw)' }}
            >
              {timeline.content}
            </div>

            {/* image */}
            <div className="flex flex-row gap-10px">
              {timeline.images.map((image) => (
                <MyImage
                  key={image.figcaption}
                  className="pointer-events-auto h-120px select-none bg-[#00000040] object-contain"
                  src={image.url}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer></Footer>
    </div>
  )
}
