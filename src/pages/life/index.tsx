import React from 'react'
import { Dialog } from '@radix-ui/themes'
import { pageColor, staticAPI } from '~/config/params'
import Footer from '~/components/ui/Footer'

export default function Life() {
  const images = Array(45).fill(0).map((item, index) => {
    return `${staticAPI}/云南旅行%20(${index + 1}).jpg`
  })

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
      <h2
        className="font-600 tracking-1px"
        style={{ fontSize: 'calc(1rem + 0.3vw)' }}
      >
        各种可能
      </h2>

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
        和春春一起的生活很快乐，超级超级爱春春。
        可能生活会有很多很多的限制与迷惘，
        但希望能够一起面对，一起解决，一起享受。
        希望我们能够一直在一起，一起生活，一起学习，一起生活。
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

            <Dialog.Root>
              <Dialog.Trigger>
                <img
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
            </Dialog.Root>

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
