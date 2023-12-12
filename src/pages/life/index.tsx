import React from 'react'
import { pageColor, staticAPI } from '~/config/params'
import Footer from '~/components/ui/Footer'
import MyImage from '@/components/ui/MyImage'

export default function Life() {
  const [images, setImages] = React.useState<string[]>([])

  React.useEffect(() => {
    setTimeout(() => {
      setImages(Array(45).fill(0).map((item, index) => {
        return `${staticAPI}/云南旅行%20(${index + 1}).jpg`
      }))
    }, 1000)
  }, [])

  return (
    <div
      className='
        w-screen h-screen overflow-y-auto overflow-x-hidden
        px-10px py-3.5vw
        box-border
        text-[#fff]
        px-8.333vw
      '
      style={{ background: pageColor.life }}
    >

      {/* 副标题 */}
      <div className="flex flex-row w-full">
        <div
          className="transition-text-life font-600 tracking-1px"
          style={{ fontSize: 'calc(1rem + 0.3vw)' }}
        >
           雲南旅行
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

      {/* 内容 */}
      <div
        className="font-400 tracking-1px max-w-500px w-80vw leading-10 mb-8vw"
        style={{
          fontSize: 'calc(1rem + 0.3vw)',
        }}
      >
        和春春一起的生活很快樂，超級超級愛春春。
        可能生活會有很多很多的限制與迷惘，
        但希望能夠一起面對，一起解決，一起享受。
        希望我們能夠壹直在一起，一起生活，一起學習，一起生活。
      </div>

      <div
        className="
          w-full px-5vw overflow-hidden box-border
          flex flex-row flex-wrap justify-center gap-10px
          cursor-pointer
        "
        style={{
          animation: 'squiggly-anim-a .8s infinite',
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="pointer-events-none select-none"
          >

            <MyImage
              className="
                pointer-events-auto
                select-none
                object-contain
                h-120px
                bg-[#00000040]
              "
              src={image}
            />

            {/* <Dialog.Root>
              <Dialog.Trigger>
                <MyImage
                  className="
                    pointer-events-auto
                    select-none
                    object-contain
                    h-120px
                    bg-[#00000040]
                  "
                  src={image}
                />
              </Dialog.Trigger>
              <Dialog.Content className="p-10px" style={{ maxWidth: 450 }}>
                <img
                  className="w-full h-full"
                  src={image}
                />
              </Dialog.Content>
            </Dialog.Root> */}

          </div>
        ))}
      </div>

      <Footer></Footer>
    </div>
  )
}

function calVelocity(lastX: number, currentX: number, lastTime: number, currentTime = performance.now()) {
  const distanceX = currentX - lastX
  const deltaTime = currentTime - lastTime
  return {
    velocity: Math.abs(distanceX / deltaTime),
    newTime: currentTime,
    newX: currentX,
  }
}
