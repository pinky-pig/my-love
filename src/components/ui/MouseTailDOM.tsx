import { useMouse } from 'ahooks'
import React from 'react'

export default function MouseTailDOM() {
  const { clientX, clientY } = useMouse()
  const [points, setPoints] = React.useState<number[][]>([])

  // 1. 监听鼠标位置，设置点集
  React.useEffect(() => {
    if (!Number.isNaN(clientX) && !Number.isNaN(clientY)) {
      if (points.length === 0) {
        setPoints([...points, [clientX, clientY]])
      }
      else {
        const result = []
        const start = points[points.length - 1]
        const end = [clientX, clientY]
        // 1. 计算两点之间的距离
        const d = Math.sqrt(
          Math.abs(end[0] - start[0]) ** 2
          + Math.abs(end[1] - start[1]) ** 2,
        )
        if (d > 10) {
          // 2. 调整步数以控制插值的密度
          const steps = Math.floor(d / 10)
          for (let j = 0; j < steps; j++) {
            const x = lerp(start[0], end[0], j / steps)
            const y = lerp(start[1], end[1], j / steps)
            result.push([x, y])
          }
        }
        // 3. 将差值点位填充
        setPoints([...points, ...result, [clientX, clientY]])
      }
    }

    // if (Number.isNaN(clientX) || Number.isNaN(clientY)) { }
    // else {
    //   setPoints([...points, [clientX, clientY]])
    // }
  }, [clientX, clientY])

  // 2. 创建循环，拖尾效果
  React.useEffect(() => {
    loop()
  }, [])

  let timestamp = 0
  function loop() {
    const now = Date.now()
    const elapsed2 = now - timestamp
    if (elapsed2 > 32) {
      setPoints((points) => {
        if (points.length > 1) {
          const temp = [...points]
          temp.splice(0, Math.ceil(points.length * 0.1))
          timestamp = now
          return temp
        }
        else {
          return points
        }
      })
    }
    requestAnimationFrame(loop)
  }

  // 定义lerp函数
  function lerp(start: number, end: number, t: number) {
    return start + (end - start) * t
  }

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-full pointer-events-none">
      {
        points.map((point, index) => (
          <div
            key={index}
            style={{
              transform: ` translate( calc(-50% + ${point[0]}px), calc(-50% + ${point[1]}px) ) `,
              willChange: 'transform',
              background: index > points.length - 5 ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.1)',
            }}
            className="pointer-events-none  -translate-1/2 w-160px h-160px rounded-full absolute top-0 left-0 "
          />
        ))
      }

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
