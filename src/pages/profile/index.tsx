import { Dialog } from '@radix-ui/themes'
import React from 'react'
import { InteractiveMarquee } from '~/components/ui/Marquee'
import { OUR_TAGS, pageColor, staticAPI } from '~/config/params'
import MechanicalLove from '~/assets/svg/mechanicalLove.svg'
import Experiments from '~/assets/svg/experiments.svg'
import TransitionMask from '~/assets/img/transition-mask.png'

export default function Life() {
  const images = Array.from({ length: 3 })
    .fill(0)
    .map((item, index) => {
      return `${staticAPI}/结婚照%20(${index + 1}).jpg`
    })

  return (
    <div
      className="box-border h-screen w-screen overflow-x-hidden overflow-y-auto px-10px px-8.333vw py-8dvh text-[#3E4857]"
      style={{ background: pageColor.profile }}
    >
      {/* 副标题 */}
      <div className="w-full flex flex-row">
        <div
          className="transition-text font-600 tracking-1px"
          style={{ fontSize: 'calc(1rem + 0.3vw)' }}
        >
           我們
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
        <span> 從大學戀愛 </span>
        <br></br>
        <span> 到2023年結婚 </span>
      </h1>

      {/* 内容 */}

      <div
        className="mb-8vw max-w-500px w-80vw font-400 leading-10 tracking-1px"
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
          className="max-w-200px w-30vw rounded-0.66em bg-transparent object-cover"
          style={{
            // boxShadow: '-3px 3px 0 0 #3e4857',
            // border: '0.15em solid #3e4857',
            animation: 'squiggly-anim-a 0.8s infinite',
          }}
          src={MechanicalLove}
          alt=""
        />
      </div>

      <div className="relative box-border w-full flex flex-row flex-wrap cursor-pointer justify-center gap-10px overflow-hidden px-4vw pb-8dvh">
        {images.map((image) => (
          <div key={image} className="pointer-events-none select-none">
            <Dialog.Root>
              <Dialog.Trigger>
                <img
                  className="pointer-events-auto h-24vw select-none bg-[#00000040] object-contain"
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
                <img className="h-full w-full object-contain" src={image} />
              </Dialog.Content>
            </Dialog.Root>
          </div>
        ))}

        <div className="absolute bottom-10 left-0 w-full skew-y-[-4deg] text-center">
          <span
            className="animate-[squiggly-anim-a_0.8s_infinite] bg-white bg-opacity-60 px-3vw py-2 font-800 text-[#3e4857]"
            style={{
              fontSize: 'calc(calc(14px + 0.2vw)*1.75)',
            }}
          >
            新婚照片
          </span>
        </div>
      </div>

      <div className="mb-40px mt-20px flex justify-between">
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
            className="max-w-200px w-30vw rounded-0.66em bg-transparent object-cover"
            style={{
              animation: 'squiggly-anim-a 0.8s infinite',
            }}
            src={Experiments}
            alt=""
          />
        </div>
      </div>

      <div
        className="mb-60px mt-30px flex flex-col skew-y-[-4deg] -ml-10%"
        style={{
          animation: 'squiggly-anim-a 0.8s infinite',
        }}
      >
        {OUR_TAGS.map((row, index) => (
          <InteractiveMarquee
            key={index}
            speed={[1, 1.46, 1.618][index % 3]}
            className="z-1 h-full w-max flex flex-row items-center"
          >
            {row.map((item) => (
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
            ))}
          </InteractiveMarquee>
        ))}
      </div>
    </div>
  )
}
