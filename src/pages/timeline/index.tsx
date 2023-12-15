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
      className='
        w-screen h-screen overflow-y-auto overflow-x-hidden
        px-10px py-3.5vw
        box-border
        text-[#3E4857]
        px-8.333vw relative
      '
      style={{ background: pageColor.timeline }}
    >

      {/* 副标题 */}
      <div className="flex flex-row w-full">
        <div
          className="transition-text-timeline font-600 tracking-1px"
          style={{ fontSize: 'calc(1rem + 0.3vw)' }}
        >
           Timeline
        </div>
      </div>

      {/* 标题 */}
      <h1
        className="font-800 mb-3.5vw"
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
        <div
          className="
            w-3vw h-3vw max-w-5 max-h-5
            border-2px border-solid border-[#3e4857] bg-transparent rounded-full
            mx-a
          "
        />
        <div
          className="
            mx-a
          "
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

      <div
        className="
          w-full px-3vw pb-8dvh overflow-hidden box-border
          flex flex-col flex-wrap justify-start gap-10px
          cursor-pointer relative
        "
      >
        {timelines.map((timeline, index) => (
          <div
            key={timeline.title}
            className="pointer-events-none select-none w-fit"
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
              className="font-400 tracking-1px my-2"
              style={{ fontSize: 'calc(1rem + 0.2vw)' }}
            >
              {timeline.content}
            </div>

            {/* image */}
            <div className="flex flex-row gap-10px">
              {
                timeline.images.map((image, index) => (
                  <MyImage
                    key={image.figcaption}
                    className="
                      pointer-events-auto
                      select-none
                      object-contain
                      h-120px
                      bg-[#00000040]
                    "
                    src={image.url}
                  />
                ))
              }
            </div>

          </div>
        ))}

      </div>

      <Footer></Footer>
    </div>
  )
}
