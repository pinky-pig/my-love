import * as React from 'react'
import gsap from 'gsap'
import Two from './Two'
import Three from './Three'
import type { BackgroundRef } from '~/components/ui/Background'
import Background from '~/components/ui/Background'
import { ThemePalettes, pageColor } from '~/config/params'

export default function Home() {
  const [fillColor, setFillColor] = React.useState(ThemePalettes.wheat)

  const bgRef = React.useRef<BackgroundRef | null>(null)
  const contentRef = React.useRef<HTMLDivElement | null>(null)
  function handleClear() {
    if (bgRef.current)
      bgRef.current.clearCanvas()
  }

  React.useEffect(() => {
    document.addEventListener('pointermove', handlePointerMove)

    return () => {
      document.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  function handlePointerMove(event: PointerEvent) {
    if (!contentRef.current)
      return

    const cvs = [0.065, 0.04]
    for (let i = 0; i < contentRef.current.children.length; i++) {
      const cv = cvs[i]
      const element = contentRef.current.children[i]
      const deltaX = (event.clientX - window.innerWidth / 2) * cv
      const deltaY = (event.clientY - window.innerHeight / 2) * cv
      gsap.to(element, { x: deltaX, y: deltaY, duration: 0.75 })
    }
  }

  return (
    <main
      className="fixed pl-10vw pr-2vw pt-12vh pb-10vh top-0 left-0 bottom-0 right-0 w-full h-full box-border font-[Cherry_Bomb_One]"
      style={{ background: pageColor.home }}
    >

      {/* content */}
      <div
        ref={contentRef}
        className="flex flex-col gap-3.5vw"
        >
        <Two
          setFillColor={setFillColor}
        />
        <Three
          setFillColor={setFillColor}
          clearCanvas={handleClear}
        />
      </div>

      <Background
        ref={bgRef}
        fillColor={fillColor}
      />

    </main>
  )
}
