import React from 'react'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { ThemePalettes, homeConstant } from '~/config/params'
import TVEmoji from '~/components/emoji/TVEmoji'
import { viewNavigate } from '~/hooks/useViewNavigate'
import useGlobalStore from '~/store/global'

interface IPropsType {
  setFillColor: React.Dispatch<React.SetStateAction<string>>
}
export function Two(
  { setFillColor }: IPropsType,
  ref: React.Ref<HTMLDivElement>,
) {
  const startDate = dayjs(homeConstant.dayOfLove)
  const endDate = dayjs(new Date())
  const daysDiff = endDate.diff(startDate, 'day')
  const navigate = useNavigate()

  const { setEnableTransitionText } = useGlobalStore()

  return (
    <div
      ref={ref}
      className=" font-semibold text-[#3E4857] text-6 select-none gap-12 tracking-2 leading-14 md:max-w-70vw max-w-full"
    >
      <div
        className="transition-text inline-block cursor-pointer mr-4px md:text-16 text-10 text-[#F3EDDC] hover:!text-shadow-md hover:!scale-110"
        style={{
          WebkitTextStroke: '2px #3E4857',
          textShadow: '4px 4px 0 #3e4857',
          transition: 'text-shadow 0.3s ease-in-out, transform 0.3s linear',
        }}
        onPointerOver={() => {
          setFillColor(ThemePalettes.pink)
        }}
        onClick={(e) => {
          setEnableTransitionText(['.transition-text'])
          viewNavigate(navigate, '/profile', e, {
            type: 'expand',
            color: ThemePalettes.pink,
          })
        }}
      >
        我們
      </div>

      <span className="inline">戀愛</span>

      <div
        className="transition-text-timeline inline-block md:text-14 text-8 text-transparent hover:!scale-110 cursor-pointer"
        style={{
          WebkitTextStroke: '2px #3E4857',
          transition: 'transform 0.3s linear',
        }}
        onPointerOver={() => {
          setFillColor(ThemePalettes.purple)
        }}
        onClick={(e) => {
          setEnableTransitionText(['.transition-text-timeline'])
          viewNavigate(navigate, '/timeline', e, {
            type: 'expand',
            color: ThemePalettes.purple,
          })
        }}
      >
        {daysDiff}
      </div>

      <span className="inline">天了。</span>

      <br />

      <span className="inline">從大一到如今，從相識到成家</span>

      <span
        className="inline-block relative hover:!scale-130 cursor-pointer "
        style={{
          transition: 'transform 0.3s ease-in-out',
        }}
        onClick={(e) => {
          setEnableTransitionText([])
          viewNavigate(navigate, '/video', e, {
            type: 'expand',
            color: '#000000',
          })
        }}
      >
        <TVEmoji className="absolute -top-35px left-0 text-5xl "></TVEmoji>
      </span>
    </div>
  )
}

export default React.forwardRef(Two)
