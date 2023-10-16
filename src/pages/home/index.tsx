import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Two from './Two'
import Three from './Three'
import Background from '~/components/ui/Background'
import { ThemePalettes, pageColor } from '~/config/params'

export default function Home() {
  const [fillColor, setFillColor] = React.useState(ThemePalettes.wheat)

  const navigate = useNavigate()

  return (
    <main
      className="fixed top-0 left-0 bottom-0 right-0 w-full h-full p-24 box-border font-[Cherry_Bomb_One]"
      style={{ background: pageColor.home }}
    >

      {/* content */}
      <div className="flex flex-col gap-3.5vw">
        <Two setFillColor={setFillColor}></Two>
        <Three setFillColor={setFillColor}></Three>
      </div>

      {/* second */}
      {/* <div>
        <EarthEmoji
          className="text-32 cursor-pointer"
          onClick={(e) => {
            viewNavigate(navigate, '/map', e, { type: 'expand', color: '#BBD5AA' })
          }}
        />

        <VideoEmoji
          className="text-32 cursor-pointer"
          onClick={(e) => {
            viewNavigate(navigate, '/video', e, { type: 'expand', color: '#000000' })
          }}
        />

      </div> */}

      <Background fillColor={fillColor}></Background>
    </main>
  )
}
