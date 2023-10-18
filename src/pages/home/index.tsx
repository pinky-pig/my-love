import * as React from 'react'
import Two from './Two'
import Three from './Three'
import type { BackgroundRef } from '~/components/ui/Background'
import Background from '~/components/ui/Background'
import { ThemePalettes, pageColor } from '~/config/params'

export default function Home() {
  const [fillColor, setFillColor] = React.useState(ThemePalettes.wheat)

  const ref = React.useRef<BackgroundRef | null>(null)

  function handleClear() {
    if (ref.current)
      ref.current.clearCanvas()
  }
  return (
    <main
      className="fixed pl-10vw pr-2vw pt-12vh pb-10vh top-0 left-0 bottom-0 right-0 w-full h-full box-border font-[Cherry_Bomb_One]"
      style={{ background: pageColor.home }}
    >

      {/* content */}
      <div className="flex flex-col gap-3.5vw">
        <Two
          setFillColor={setFillColor}
        />
        <Three
          setFillColor={setFillColor}
          clearCanvas={handleClear}
        />
      </div>

      <Background
        ref={ref}
        fillColor={fillColor}
      />

    </main>
  )
}
