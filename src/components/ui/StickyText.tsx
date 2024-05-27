import { useMouse } from 'ahooks'
import * as React from 'react'

export default React.memo(
  ({
    className: parentClassName,
    text,
    ...restProps
  }: React.HTMLProps<HTMLDivElement> & { text: string }) => {
    const size = -10 // 鼠标的 hover 范围
    const cv = 1 // 移动的系数

    const boxRef = React.useRef<HTMLDivElement | null>(null)
    const textRef = React.useRef<HTMLDivElement | null>(null)
    const textMouse = useMouse(boxRef.current)

    React.useEffect(() => {
      if (
        textMouse.elementX > textMouse.elementW + size ||
        textMouse.elementY > textMouse.elementH + size ||
        textMouse.elementX < -size ||
        textMouse.elementY < -size
      ) {
        if (!textRef.current) return
        textRef.current.style.transform = 'translate(0px, 0px)'
        textRef.current.style.transition = 'transform 0.2s linear'
      } else {
        if (!textRef.current) return

        const disX = textMouse.elementX * cv
        const disY = textMouse.elementY * cv
        textRef.current.style.transform = `translate(
        ${disX - textRef.current.clientWidth / 2}px, 
         ${disY - textRef.current.clientHeight / 2}px
        )
      `
        textRef.current.style.transition = 'unset'
      }
    }, [textMouse])

    React.useEffect(() => {
      const innerDiv = textRef.current
      const outerDiv = boxRef.current

      if (!innerDiv || !outerDiv) return

      // 获取内层 div 的尺寸
      const innerWidth = innerDiv.clientWidth
      const innerHeight = innerDiv.clientHeight

      // 根据内层 div 的尺寸设置外层 div 的样式
      outerDiv.style.width = `${innerWidth}px`
      outerDiv.style.height = `${innerHeight}px`
    }, [])

    return (
      <div
        className={`relative inline-block cursor-pointer ${parentClassName}`}
        {...restProps}
        ref={boxRef}
      >
        <div
          ref={textRef}
          className="absolute origin-center inline-block whitespace-nowrap"
        >
          {text}
        </div>
      </div>
    )
  },
)
