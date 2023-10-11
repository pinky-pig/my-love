import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Background from '~/components/ui/Background'
import { ThemePalettes } from '~/config/params'
import { viewNavigate } from '~/hooks/useViewNavigate'
import TextRouterWithTransition from '~/components/ui/TextRouterWithTransition'

export default function Home() {
  const [fillColor, setFillColor] = React.useState(ThemePalettes.wheat)

  const navigate = useNavigate()

  return (
    <main className="fixed top-0 left-0 bottom-0 right-0 w-full h-full p-24 box-border">

      {/* content */}
      <div className=" flex flex-col font-semibold text-[#3E4857] text-6 select-none gap-12 ">

        <div className=" tracking-2">
          <span className="inline">
            不要忽视
          </span>

          <div
            className="inline-block cursor-pointer text-16 text-[#F3EDDC] hover:!text-shadow-md hover:!scale-110"
            style={{
              WebkitTextStroke: '2px #3E4857',
              textShadow: '4px 4px 0 #3e4857',
              transition: 'text-shadow 0.3s ease-in-out, transform 0.3s linear',
            }}
            onPointerOver={() => {
              setFillColor(ThemePalettes.green)
            }}
            onClick={() => {
              viewNavigate(navigate, '/map')
            }}
          >
            梦想
          </div>

          <span className="inline">
            ，
          </span>
          <br />
          <span className="inline">
            不要工作太久，说出想法，
          </span>

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
            <TextRouterWithTransition to="/map">
              <span className='transition-text'>交朋友</span>
            </TextRouterWithTransition>
          </span>
          <span className="inline">
            ，要
          </span>
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

          <span className="inline">
            。
            {/* <FluentEmojiSmilingFaceWithSmilingEyes className="inline text-8"></FluentEmojiSmilingFaceWithSmilingEyes> */}
          </span>
        </div>

      </div>

      <Background fillColor={fillColor}></Background>
    </main>
  )
}
