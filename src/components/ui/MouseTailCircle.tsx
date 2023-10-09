import { useMouse } from 'ahooks';
import React from 'react';

export default function MouseTail() {

  const { clientX, clientY } = useMouse()
  const [points, setPoints] = React.useState<number[][]>([])

  // 1. 监听鼠标位置，设置点集
  React.useEffect(() => {
    if (Number.isNaN(clientX) || Number.isNaN(clientY)) {
      return
    } else {
      setPoints([...points, [clientX, clientY]].splice(-20))
    }
  }, [clientX, clientY])


  // 2. 鼠标停止移动，点集也要删除
  React.useEffect(() => {
    loop()
  }, [])

  let timestamp = 0
  function loop() {
    const now = Date.now()
    const elapsed2 = now - timestamp
    if (elapsed2 > 32) {
      if (points.length > 1) { 
        const temp = points.slice(0, Math.ceil(points.length * 0.1))
        setPoints(temp)
      }
    }
    requestAnimationFrame(loop)
  }

 

  // 定义 loop 函数
  // const loopRef = React.useRef<() => void>();
  // loopRef.current = () => {
  //   const now = Date.now();
  //   const elapsed2 = now - timestamp;
  //   if (elapsed2 > 32) {
  //     console.log(points);
  //     if (points.length > 1) {
  //       const temp = points.slice(0, Math.ceil(points.length * 0.1));
  //       setPoints(temp);
  //     }
  //     timestamp = now;
  //   }
  //   requestAnimationFrame(loopRef.current!);
  // };

  // let timestamp = 0;
  // React.useEffect(() => {
  //   loopRef.current!();
  // }, [points]);

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-full pointer-events-none">
      {
        points.map((point, index) => (
          <div
            key={index}
            style={{
              transform: ` translate( calc(-50% + ${point[0]}px), calc(-50% + ${point[1]}px) ) `,
              willChange: 'transform'
            }}
            className="pointer-events-none bg-white bg-opacity-10 -translate-1/2 w-160px h-160px rounded-full bg-transparent absolute top-0 left-0 "
          />
        ))
      }

      <div
        style={{
          transform: `translate(calc(-50% + ${clientX}px), calc(-50% + ${clientY}px))`,
          willChange: 'transform'
        }}
        className="pointer-events-none  w-160px h-160px rounded-full bg-transparent absolute top-0 left-0 border-2 border-white border-solid"
      />
    </div>
  )
}

