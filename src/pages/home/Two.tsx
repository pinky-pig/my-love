import React from 'react'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { ThemePalettes, home_constant } from '~/config/params'
import TVEmoji from '~/components/emoji/TVEmoji'
import { viewNavigate } from '~/hooks/useViewNavigate'

interface IPropsType {
  setFillColor: React.Dispatch<React.SetStateAction<string>>
}
export default function Two({ setFillColor }: IPropsType) {
  const startDate = dayjs(home_constant.dayOfLove)
  const endDate = dayjs(new Date())
  const daysDiff = endDate.diff(startDate, 'day')
  const navigate = useNavigate()

  return (
    <div className=" font-semibold text-[#3E4857] text-6 select-none gap-12 tracking-2 leading-14 max-w-70vw">

      <div
        className=" inline-block cursor-pointer mr-4px text-16 text-[#F3EDDC] hover:!text-shadow-md hover:!scale-110"
        style={{
          WebkitTextStroke: '2px #3E4857',
          textShadow: '4px 4px 0 #3e4857',
          transition: 'text-shadow 0.3s ease-in-out, transform 0.3s linear',
        }}
        onPointerOver={() => {
          setFillColor(ThemePalettes.pink)
        }}
      >
        我們
      </div>

      <span className="inline">
        戀愛
      </span>

      <div
        className="inline-block text-14 text-transparent hover:!scale-110 cursor-pointer"
        style={{
          WebkitTextStroke: '2px #3E4857',
          transition: 'transform 0.3s linear',
        }}
        onPointerOver={() => {
          setFillColor(ThemePalettes.purple)
        }}
      >
        {daysDiff}
      </div>

      <span className="inline">
        天了。
      </span>

      <br />

      <span className="inline">
        從 2016 大一到如今，從相識到成家，我們一直快樂生活
      </span>

      <span
        className="inline-block relative hover:!scale-130 cursor-pointer "
        style={{
          transition: 'transform 0.3s ease-in-out',
        }}
        onClick={(e) => {
          viewNavigate(navigate, '/video', e, { type: 'expand', color: '#000000' })
        }}
      >
        <TVEmoji className="absolute -top-35px left-0 text-5xl "></TVEmoji>
      </span>

    </div>
  )
}
