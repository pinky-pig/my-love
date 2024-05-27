import React from 'react'
import { HeartEmoji } from '../emoji/HeartEmoji'
import { ThemePalettes } from '~/config/params'

export default function Loading() {
  return (
    <div
      className=" w-screen h-screen overflow-hidden top-0 left-0 grid place-items-center  "
      style={{ background: ThemePalettes.cream }}
    >
      <div
        className="
          flex flex-col
          justify-center items-center
          font-bold
          text-white
          relative
          select-none
        "
      >
        <span className="text-6 tracking-2px">
          Arvin &nbsp;
          <HeartEmoji className="animate-bounce" />
          &nbsp; Zoe
        </span>
        <span className="text-8 tracking-6px">我們一起的生活</span>
        <div
          style={{ background: `${ThemePalettes.cream}90` }}
          className="absolute w-full h-12 top-0 left-0 skew-y-[8deg] bg-opacity-30"
        />
      </div>

      <svg className="absolute" viewBox="0 0 160 160" width="160" height="160">
        <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
          <path
            d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z"
            fill={'#ffffff50'}
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 0 0"
              to="0 0 0"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </div>
  )
}
