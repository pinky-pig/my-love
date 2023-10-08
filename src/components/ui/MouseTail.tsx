import { useMouse } from 'ahooks';
import React from 'react';
import { getStroke } from 'perfect-freehand'

const config_linear = { size: 150, start: { taper: true } }
let timestamp = 0

export default function MouseTail() {

  const { clientX, clientY } = useMouse()
  const [pathData, setPathData] = React.useState('')
  const pointsRef = React.useRef<number[][]>([])

  const [flag, setFlag] = React.useState(0);

  // 1. 监听鼠标位置，设置点集
  React.useEffect(() => {
    if (Number.isNaN(clientX) || Number.isNaN(clientY)) {
      return
    } else {
      pointsRef.current = [...pointsRef.current, [clientX, clientY, 0.5]]
    }
  }, [clientX, clientY])

  // 2. 监听点集，设置路径
  React.useEffect(() => {
    const config_option = config_linear
    const stroke = getStroke(pointsRef.current, config_option)
    setPathData(getSvgPathFromStroke(stroke))
  }, [flag])

  // 3. 创建循环，拖尾效果
  React.useEffect(() => {
    loop()
  }, [])

  function loop() {
    const now = Date.now()
    const elapsed2 = now - timestamp
    if (elapsed2 > 32) {
      if (pointsRef.current.length > 1) {
        pointsRef.current.splice(0, Math.ceil(pointsRef.current.length * 0.1))
        setFlag(old => old + 1)
        timestamp = now
      }
    }
    requestAnimationFrame(loop)
  }

  return (
    <>
      <svg
        id='mouseTail'
        className="pointer-events-none fixed left-0 top-0 z-999 h-full w-full touch-none"
      >
        <path
          d={pathData}
          stroke="#FFFFFF"
          fill="#FFFFFF"
          opacity={0.3}
        />
      </svg>
      <div
        style={{
          left: clientX + 'px',
          top: clientY + 'px',
        }}
        className="pointer-events-none -translate-1/2 w-15vw h-15vw rounded-full bg-transparent absolute top-0 left-0 border-1 border-white border-solid"
      />
    </>
  )
}

function getSvgPathFromStroke(stroke: any) {
  if (!stroke.length)
    return ''
  const d = stroke.reduce(
    (acc: any[], [x0, y0]: any, i: number, arr: string | any[]) => {
      const [x1, y1] = arr[(i + 1) % arr.length]
      acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2)
      return acc
    },
    ['M', ...stroke[0], 'Q'],
  )
  d.push('Z')
  return d.join(' ')
}
