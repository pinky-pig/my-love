import React from 'react'

interface IParabolicSVGType {
  coords: number[]
  startGSAPAnimation: () => void
}
export default function ParabolicSVG({ coords, startGSAPAnimation }: IParabolicSVGType) {
  const [path, setPath] = React.useState('M 0 0')

  React.useEffect(() => {
    const svgPathString = createParabolicPath(30, window.innerHeight - 30, coords[0] || 0, coords[1] || 0)
    setPath(svgPathString)
  }, [coords])

  React.useEffect(() => {
    startGSAPAnimation()
  }, [path])

  return (
    <svg className="w-full h-full fixed z-9 translate-z-0 box-border pointer-events-none" viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}>
      <path
        id="parabolicPath"
        fill="none"
        strokeWidth={2}
        stroke="transparent"
        d={path}
      />
    </svg>
  )
}

function createParabolicPath(x1: number, y1: number, x2: number, y2: number) {
  if (x2 === 0 && y2 === 0)
    return 'M 0 0 Z'

  const cv = 0.3
  // 计算控制点的坐标
  const cx = x2 - (x2 - x1) * cv
  const cy = y2 - (y1 + y2) * cv

  // 构建 SVG path 字符串
  const pathString = `M ${x2} ${y2} Q ${cx} ${cy} ${x1} ${y1}`
  return pathString
}
