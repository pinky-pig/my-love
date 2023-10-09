import { useMouse } from 'ahooks'
import React from 'react'

export default function MouseTail() {
  const { clientX, clientY } = useMouse()
  const [points, setPoints] = React.useState<number[][]>([])

  // 1. 监听鼠标位置，设置点集
  React.useEffect(() => {
    // eslint-disable-next-line no-empty
    if (Number.isNaN(clientX) || Number.isNaN(clientY)) {

    }
    else {
      setPoints([...points, [clientX, clientY]])
    }
  }, [clientX, clientY])

  // 2. 定义 loop 函数，鼠标停止移动，点集也要删除
  const loopRef = React.useRef<() => void>()
  const timestamp = React.useRef<number>(0)
  loopRef.current = () => {
    const now = Date.now()
    const elapsed2 = now - timestamp.current
    if (elapsed2 > 32) {
      if (points.length > 1) {
        setPoints((points) => {
          const temp = [...points]
          temp.splice(0, Math.ceil(points.length * 0.1))
          return temp
        })
      }
      timestamp.current = now
    }
    requestAnimationFrame(loopRef.current!)
  }
  React.useEffect(() => {
    loopRef.current!()
  }, [])

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-full pointer-events-none">
      {
        points.map((point, index) => (
          <div
            key={index}
            style={{
              transform: ` translate( calc(-50% + ${point[0]}px), calc(-50% + ${point[1]}px) ) `,
              willChange: 'transform',
            }}
            className="pointer-events-none bg-white bg-opacity-10 -translate-1/2 w-160px h-160px rounded-full absolute top-0 left-0 "
          />
        ))
      }

      <div
        style={{
          transform: `translate(calc(-50% + ${clientX}px), calc(-50% + ${clientY}px))`,
          willChange: 'transform',
        }}
        className="pointer-events-none w-160px h-160px rounded-full bg-transparent absolute top-0 left-0 border-2 border-white border-solid"
      />
    </div>
  )
}
