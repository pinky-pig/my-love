import { Dialog } from '@radix-ui/themes'
import React from 'react'
import { InteractiveMarquee } from '~/components/ui/Marquee'
import { OUR_TAGS, pageColor, staticAPI } from '~/config/params'
import MechanicalLove from '~/assets/svg/mechanicalLove.svg'
import Experiments from '~/assets/svg/experiments.svg'
import TransitionMask from '~/assets/img/transition-mask.png'

export default function Life() {
  const images = Array(3).fill(0).map((item, index) => {
    return `${staticAPI}/结婚照%20(${index + 1}).jpg`
  })

  return (
    <div
      className='
        w-screen h-screen overflow-y-auto overflow-x-hidden
        px-10px py-8dvh
        box-border
        text-[#3E4857]
        px-8.333vw
      '
      style={{ background: pageColor.profile }}
    >

      {/* 副标题 */}
      <div className="flex flex-row w-full">
        <div
          className="transition-text font-600 tracking-1px"
          style={{ fontSize: 'calc(1rem + 0.3vw)' }}
        >
           我們
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
        <span> 從大學戀愛 </span>
        <br></br>
        <span> 到2023年結婚 </span>
      </h1>

      {/* 内容 */}

      <div
        className="font-400 tracking-1px max-w-500px w-80vw leading-10 mb-8vw"
        style={{
          fontSize: 'calc(1rem + 0.3vw)',
          WebkitMask: `url(${TransitionMask}) top left`,
          WebkitMaskSize: '3400% 100%',
          animation: 'mask-play 2s steps(33) forwards',
          transform: 'translateX(-10%)',
          opacity: '1',
        }}
      >
        <img
          className="w-30vw max-w-200px bg-transparent object-cover rounded-0.66em"
          style={{
            // boxShadow: '-3px 3px 0 0 #3e4857',
            // border: '0.15em solid #3e4857',
            animation: 'squiggly-anim-a 0.8s infinite',
          }}
          src={MechanicalLove}
          alt=""
        />
      </div>

      <div
        className="
          w-full px-4vw pb-8dvh overflow-hidden box-border
          flex flex-row flex-wrap justify-center gap-10px
          cursor-pointer relative
        "
      >
        {images.map((image, index) => (
          <div
            key={image}
            className="pointer-events-none select-none"
          >

            <Dialog.Root>
              <Dialog.Trigger>
                <img
                  className="
                    pointer-events-auto
                    select-none
                    object-contain
                    h-24vw
                    bg-[#00000040]
                  "
                  src={image}
                />
              </Dialog.Trigger>
              <Dialog.Content
                style={{
                  padding: '10px',
                  overflow: 'hidden',
                  height: '80vh',
                  background: '#00000040',
                  boxShadow: 'none',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <img
                  className="w-full h-full object-contain"
                  src={image}
                />
              </Dialog.Content>
            </Dialog.Root>

          </div>
        ))}

        <div className="absolute w-full bottom-10 left-0 text-center skew-y-[-4deg]">
          <span
            className="
              bg-white bg-opacity-60
              text-[#3e4857] font-800
              px-3vw py-2
              animate-[squiggly-anim-a_0.8s_infinite]
            "
            style={{
              fontSize: 'calc(calc(14px + 0.2vw)*1.75)',
            }}
          >
            新婚照片
          </span>
        </div>
      </div>

      <div className="flex justify-between mt-20px mb-40px">
        <span
          style={{
            fontSize: 'calc(calc(16px + 0.2vw)*1.4)',
            fontWeight: '600',
            letterSpacing: '2px',
          }}
        >
          「爱爱爱爱春春春春💕」
        </span>

        <div>
          <img
            className="w-30vw max-w-200px bg-transparent object-cover rounded-0.66em"
            style={{
              animation: 'squiggly-anim-a 0.8s infinite',
            }}
            src={Experiments}
            alt=""
          />
        </div>
      </div>

      <div
        className="flex flex-col skew-y-[-4deg] mt-30px mb-60px -ml-10%"
        style={{
          animation: 'squiggly-anim-a 0.8s infinite',
        }}
      >
        {
          OUR_TAGS.map((row, index) => (
            <InteractiveMarquee
              key={index}
              speed={[1, 1.46, 1.618][index % 3]}
              className="flex flex-row w-max h-full items-center z-1"
            >
              {
                row.map(item => (
                  <div
                    key={item}
                    draggable="false"
                    className="flex-shrink-0 flex-grow-0 font-800 text-transparent"
                    style={{
                      fontSize: 'calc(calc(16px + 0.2vw)*2.4)',
                      WebkitTextStroke: '1px #3e4857',
                      margin: '0 calc(calc(14px + 0.2vw)*1.2)',
                    }}
                  >
                    {item}
                  </div>
                ))
              }
            </InteractiveMarquee>
          ))
        }
      </div>

    </div>
  )
}
