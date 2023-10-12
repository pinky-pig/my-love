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
          Arvin
          &nbsp;<HeartEmoji />&nbsp;
          Zoe
        </span>
        <span className="text-8 tracking-6px">我們一起的生活</span>
        <div
          style={{ background: `${ThemePalettes.cream}90` }}
          className="absolute w-full h-12 top-0 left-0 skew-y-[8deg] bg-opacity-30"
        />
      </div>
    </div>
  )
}
