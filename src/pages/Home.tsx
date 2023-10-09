import * as React from 'react'
import Background from '~/components/ui/Background'
import MouseTailCircle from '~/components/ui/MouseTailCircle'
import FluentEmojiSmilingFaceWithSmilingEyes from '~/components/emoji/FluentEmojiSmilingFaceWithSmilingEyes'
import { ThemePalettes } from '~/config/params'

export default function Home() {
  const [fillColor, setFillColor] = React.useState(ThemePalettes.wheat)

  return (
    <main className="fixed top-0 left-0 bottom-0 right-0 w-full h-full p-24">

      {/* content */}
      <div className=" flex flex-col font-semibold text-[#3E4857] text-6 select-none gap-12 ">

        <div className=" tracking-2">
          <span className="inline">
            不要忽视
          </span>
          <span
            className="inline text-16 text-[#F3EDDC]"
            style={{
              WebkitTextStroke: '2px #3E4857',
              textShadow: '4px 4px 0 #3e4857',
            }}
            onPointerOver={() => setFillColor(ThemePalettes.green)}
          >
            梦想
          </span>
          <span className="inline">
            ，
          </span>
          <br />
          <span className="inline">
            不要工作太久，说出想法，
          </span>
          <span
            className="inline text-8 text-transparent"
            style={{
              WebkitTextStroke: '2px #3E4857',
            }}
            onPointerOver={() => setFillColor(ThemePalettes.yellow)}
          >
            交朋友
          </span>
          <span className="inline">
            ，要
          </span>
          <span
            className="inline text-8 text-[#F3EDDC]"
            style={{
              WebkitTextStroke: '2px #3E4857',
              textShadow: '4px 4px 0 #3e4857',
            }}
            onPointerOver={() => setFillColor(ThemePalettes.wheat)}
          >
            开心
          </span>

          <span className="inline">
            。
            <FluentEmojiSmilingFaceWithSmilingEyes className="inline text-12"></FluentEmojiSmilingFaceWithSmilingEyes>
          </span>
        </div>

      </div>

      <Background fillColor={fillColor}></Background>
      {/* <MouseTail></MouseTail> */}
      <MouseTailCircle></MouseTailCircle>
    </main>
  )
}
