import { useMouse } from 'ahooks'
import React from 'react'
import gsap from 'gsap'

export default function MouseTailCircle() {
  const { clientX, clientY } = useMouse()
  const containerRef = React.useRef<any>(null)

  React.useEffect(() => {
    const ease = 0.75
    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }

    window.addEventListener('mousemove', (event) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
    })

    let leader = (prop: string) => {
      return prop === 'x' ? pointer.x : pointer.y
    }

    const total = 50
    for (let i = 0; i < total; i++)
      leader = createLine(leader, i)

    function createLine(leader: { (prop: any): number; (arg0: string): any }, i: number) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      containerRef.current!.appendChild(line)

      gsap.set(line, { x: -1500, y: -750 })

      const pos = gsap.getProperty(line) as (property: string, unit?: string | undefined) => number

      gsap.to(line, {
        duration: 10000,
        x: '+=150',
        y: '+=10',
        repeat: -1,
        ease: 'expo.inOut',
        modifiers: {
          x: () => {
            const posX = pos('x') as number
            const leaderX = leader('x')
            const x = posX + (leaderX - posX) * ease
            line.setAttribute('x2', `${leaderX - x}`)
            return x
          },
          y: () => {
            const posY = pos('y') as number
            const leaderY = leader('y')
            const y = posY + (leaderY - posY) * ease
            line.setAttribute('y2', `${leaderY - y}`)
            return y
          },
        },
      })

      return pos
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-full pointer-events-none">
      <svg ref={containerRef} className="absolute top-0 left-0 w-full h-full">

      </svg>

      <div
        style={{
          transform: `translate(calc(-50% + ${clientX}px), calc(-50% + ${clientY}px))`,
          willChange: 'transform',
        }}
        className="pointer-events-none w-160px h-160px rounded-full bg-opacity-30 bg-white absolute top-0 left-0 border-2 border-white border-solid"
      />
    </div>
  )
}
