import React from 'react'
import { ThemePalettes } from '~/config/params'

interface IPropsType {
  setFillColor: React.Dispatch<React.SetStateAction<string>>
}
export default function One({ setFillColor }: IPropsType) {
  return (
    <div className=" flex flex-col font-semibold text-[#3E4857] text-6 select-none gap-12 ">
      <div className=" tracking-2">
        <span className="inline">不要忽视</span>

        <div
          className=" inline-block cursor-pointer text-16 text-[#F3EDDC] hover:!text-shadow-md hover:!scale-110"
          style={{
            WebkitTextStroke: '2px #3E4857',
            textShadow: '4px 4px 0 #3e4857',
            transition: 'text-shadow 0.3s ease-in-out, transform 0.3s linear',
          }}
          onPointerOver={() => {
            setFillColor(ThemePalettes.green)
          }}
        >
          梦想
        </div>

        <span className="inline">，</span>
        <br />
        <span className="inline">不要工作太久，说出想法，</span>

        <span
          className="inline-block text-8 text-transparent hover:!scale-110"
          style={{
            WebkitTextStroke: '2px #3E4857',
            transition: 'transform 0.3s linear',
          }}
          onPointerOver={() => {
            setFillColor(ThemePalettes.yellow)
          }}
        >
          <span>交朋友</span>
        </span>
        <span className="inline">，要</span>
        <span
          className="inline-block text-16 text-[#F3EDDC] hover:!text-shadow-md hover:!scale-110"
          style={{
            WebkitTextStroke: '2px #3E4857',
            textShadow: '4px 4px 0 #3e4857',
            transition: 'text-shadow 0.3s ease-in-out, transform 0.3s linear',
          }}
          onPointerOver={() => setFillColor(ThemePalettes.wheat)}
        >
          开心
        </span>

        <span className="inline">。</span>
      </div>
    </div>
  )
}
