import * as React from 'react'
import p5 from 'p5'

export default function Background({
  backgroundColor = '#F3EDDC',
  fillColor = '#BBD6AA90'
}) {

  // 设置最小距离阈值
  const minDistanceThreshold = 20;
  const radius = 160

  const backgroundRef = React.useRef(null)
  let p5Instance: any = null

  const fillColorRef = React.useRef(fillColor)
  React.useEffect(() => {
    fillColorRef.current = fillColor
  }, [fillColor])

  React.useEffect(() => {
    p5Instance = new p5((p5: any) => {

      // 鼠标初始位置
      let prevMousePositions = { x: 0, y: 0 }

      p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        p5.background(backgroundColor);
        p5.frameRate(144); // 增加帧率
      }

      p5.draw = () => {
        // 1. 如果是第一次进来，那么就是直接渲染
        // 2. 如果是第二次之后，那么就可以判断是否需要差值
        p5.noStroke()
        p5.fill(fillColorRef.current)

        const currentPosition = { x: p5.mouseX, y: p5.mouseY };

        if (
          prevMousePositions.x === 0
          && prevMousePositions.y === 0
          && currentPosition.x === 0
          && currentPosition.y === 0
        ) {
          // 因为在 P5.js 中， draw 会默认走的， prevMousePositions 会默认是 0,0
          return
        }
        else if (
          prevMousePositions.x === 0
          && prevMousePositions.y === 0
          && currentPosition.x !== 0
          && currentPosition.y !== 0
        ) {
          p5.ellipse(p5.mouseX, p5.mouseY, radius, radius);
        }
        else {
          const p1 = prevMousePositions;
          const p2 = currentPosition;
          // 1. 计算两点之间的距离
          const d = p5.dist(p1.x, p1.y, p2.x, p2.y);
          // 2. 只有当距离超过阈值时才进行插值
          if (d > minDistanceThreshold) {
            // 3.调整步数以控制插值的密度
            const steps = Math.floor(d / 10);
            for (let j = 0; j < steps; j++) {
              const x = p5.lerp(p1.x, p2.x, j / steps);
              const y = p5.lerp(p1.y, p2.y, j / steps);
              p5.ellipse(x, y, radius, radius);
            }
          } else {
            p5.ellipse(p5.mouseX, p5.mouseY, radius, radius);
          }
        }
        prevMousePositions = currentPosition
      }

      p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
      }
    }, backgroundRef.current);

    // 返回清理函数，在组件卸载或下一次调用 useEffect 之前执行
    return () => {
      p5Instance.remove();
    };
  }, []); // 传递空的依赖数组以确保只在组件挂载时运行一次

  return (
    <div
      ref={backgroundRef}
      className="fixed top-0 left-0 right-0 bottom-0 -z-1 "
    />
  )
}
