import React from 'react'
import gsap from 'gsap'

export default React.memo(() => {
  const svgRef = React.useRef<any>(null)

  // cursor 尺寸
  const size = '200'

  // cursor 位置
  const [clientX, setClientX] = React.useState(Number.NaN)
  const [clientY, setClientY] = React.useState(Number.NaN)
  React.useEffect(() => {
    document.addEventListener('pointermove', handlePointerMove)

    return () => {
      document.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  function handlePointerMove(event: PointerEvent) {
    setClientX(event.clientX)
    setClientY(event.clientY)
  }

  /**
   * 通过 GSAP 创建鼠标拖尾效果
   * 循环创建 50 个 <line /> ，用于流畅动画
   * 通过 mousemove 监听鼠标位置 pointer{x: number, y: number}
   * pointer 位置改变就会触发更新
   * （这里其实 gsap 的 modifiers 每一帧都会走 requestAnimationFrame，所以 pointer 改变的时候， gsap 动画也会改变）
   * GSAP 更新 <line /> 的位置，用于流畅拖尾
   * 这里设置 -1500 -1500 为原点，不显示鼠标轨迹
   */
  React.useEffect(() => {
    // 消失隐藏的原点
    const origin = { x: -1500, y: -1500 }

    // 轨迹的颜色，轨迹的尺寸是上面定义的 size
    const stroke = 'rgba(255,255,255,0.01)'

    // 运动系数，用于补间流畅
    const ease = 0.75

    // 初始点位坐标
    const pointer = { x: origin.x, y: origin.y }

    // 鼠标监听位置
    let mouseTimer: number | null = null

    const handleMouseMove = (event: MouseEvent) => {
      // 如果鼠标有移动，那么设置拖尾颜色显示
      setLineWhite()
      pointer.x = event.clientX
      pointer.y = event.clientY

      // 重置计时器
      if (mouseTimer) clearTimeout(mouseTimer)

      // 设置计时器，如果鼠标停止移动超过500毫秒，将拖尾颜色隐藏
      mouseTimer = setTimeout(() => {
        setLineTransparent()
      }, 100) as unknown as number
    }

    window.addEventListener('pointermove', handleMouseMove)

    function setLineTransparent() {
      const doms = window.document.querySelectorAll(
        '.gsap-tail-line',
      ) as NodeListOf<HTMLElement>
      doms.forEach((line) => {
        line.style.stroke = 'transparent' // 鼠标停止移动时设置为透明
      })
    }

    function setLineWhite() {
      const doms = window.document.querySelectorAll(
        '.gsap-tail-line',
      ) as NodeListOf<HTMLElement>
      doms.forEach((line) => {
        line.style.stroke = stroke // 鼠标停止移动时设置为透明
      })
    }

    // 让 leader 的位置是鼠标当前的位置
    let leader = (property: string) => {
      return property === 'x' ? pointer.x : pointer.y
    }

    // 循环创建线条
    const total = 50
    for (let i = 0; i < total; i++) {
      // 闭包，将鼠标的位置函数作为参数传进去，将运动后的位置传出来
      leader = createLine(leader, i)
    }

    // 创建线条的函数
    function createLine(
      leader: { (prop: any): number; (arg0: string): any },
      i: number,
    ) {
      // 创建 <line />
      const line = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'line',
      )

      // 设置样式
      line.style.strokeWidth = size
      line.style.strokeLinecap = 'round'
      line.style.transition = 'stroke 0.1s ease-in-out'
      line.style.stroke = 'transparent'
      line.setAttribute('class', 'gsap-tail-line')
      // 添加到 DOM 视图
      svgRef.current!.appendChild(line)

      // 初始化设置其位置
      gsap.set(line, { x: origin.x, y: origin.y })

      // 因为上面设置了 property {x: number, y: number} ，所以这里得到的也是 x,y
      const pos = gsap.getProperty(line) as (property: string) => number

      // 这里会通过 modifiers.x 和 modifiers.y 不断更新设置 <line /> 的 Property {x, y} 的值
      gsap.to(line, {
        duration: 10000,
        x: '+=150', // 表示每次动画步进时，x 坐标增加 150 个单位
        y: '+=10', // 每次动画步进时，y 坐标增加 10 个单位。
        repeat: -1, // 这个选项指示动画应该无限重复播放。
        ease: 'expo.inOut', // 缓动函数，缓慢进入和退出的缓动效果
        modifiers: {
          // 这里增加一个判断，就是当前一个坐标是在设置的原点的时候，不走动画。从最新点开始动画
          // 这里经过 debugger 得知，先走 y ， 再走 x
          x: () => {
            if (pos('x') === origin.x && leader('x') !== origin.x) {
              line.setAttribute('x2', `${leader('x')}`)
              return leader('x')
            } else {
              // 获取 x 的位置（上一个位置）
              const posX = pos('x')

              // 获取鼠标的 x 的位置（当前位置）。这里 gsap 监听了 leader:pointer 的位置，发生更新就会触发运动
              const leaderX = leader('x')

              // leaderX - posX 是移动的差，乘以系数，用于补间，使其更加流畅。再加上原来的位置，就是接下来的位置。
              const x = posX + (leaderX - posX) * ease

              // 设定 <line /> 的终点
              line.setAttribute('x2', `${leaderX - x}`)

              // 返回的就是当下 x 的位置
              return x
            }
          },
          y: () => {
            if (
              pos('x') === origin.x &&
              pos('y') === origin.y &&
              leader('y') !== origin.y
            ) {
              line.setAttribute('y2', `${leader('y')}`)
              return leader('y')
            } else {
              const posY = pos('y')
              const leaderY = leader('y')
              const y = posY + (leaderY - posY) * ease
              line.setAttribute('y2', `${leaderY - y}`)
              return y
            }
          },
        },
      })

      return pos
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-full pointer-events-none z-99">
      {/* 拖尾 */}
      <svg ref={svgRef} className="absolute top-0 left-0 w-full h-full" />

      {/* cursor */}
      {!Number.isNaN(clientX) && !Number.isNaN(clientY) && (
        <div
          style={{
            transform: `translate(calc(-50% + ${clientX}px), calc(-50% + ${clientY}px))`,
            willChange: 'transform',
            width: `${size}px`,
            height: `${size}px`,
          }}
          className="pointer-events-none rounded-full bg-transparent absolute top-0 left-0 border-2 border-white border-solid"
        />
      )}
    </div>
  )
})
