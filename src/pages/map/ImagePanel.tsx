import React from 'react'
import CloseEmoji from '~/components/emoji/CloseEmoji'
import styles from './index.module.css'

interface IImagePanelType {}
export interface IImagePanelExposeType {
  show: () => void
  hide: () => void
}

export function ImagePanel(
  props: IImagePanelType,
  ref: React.Ref<IImagePanelExposeType>,
) {
  const [isShowPanel, setIsShowPanel] = React.useState(false)

  const panelRef = React.useRef<HTMLDivElement | null>(null)

  async function show() {
    if (!panelRef.current) return

    if (isShowPanel === true) {
      // 说明已经打开面板
      panelRef.current.style.animation = `${styles['scale-out']} 0s forwards`
      const ANIMATIONS = panelRef.current.getAnimations()
      await Promise.all(ANIMATIONS.map((animation) => animation.finished))
      panelRef.current.style.animation = `${styles['scale-in']} .5s forwards`
    } else {
      panelRef.current.style.animation = `${styles['scale-in']} .4s forwards`
    }

    const ANIMATIONS = panelRef.current.getAnimations()
    await Promise.all(ANIMATIONS.map((animation) => animation.finished))
    setIsShowPanel(true)
  }

  async function hide() {
    if (!panelRef.current) return

    const ANIMATIONS = panelRef.current.getAnimations()
    await Promise.all(ANIMATIONS.map((animation) => animation.finished))
    panelRef.current.style.animation = `${styles['scale-out']} .4s forwards`
    setIsShowPanel(false)
  }

  React.useImperativeHandle(ref, () => ({
    show,
    hide,
  }))

  React.useEffect(() => {
    if (panelRef.current)
      panelRef.current.style.animation = `${styles['scale-out']} 0s forwards`
  }, [])

  return (
    <div
      ref={panelRef}
      className="absolute bottom-8 left-8 z-9 box-border h-70vh max-w-450px min-w-250px origin-bottom-left rounded-xl bg-[#FFFFFF90] p-6px backdrop-blur-5px"
    >
      {/* header */}
      <div className="box-border h-10 w-full flex flex-row items-center justify-between overflow-hidden rounded-md bg-[#FFFFFF90] px-2">
        <div className="flex-1 font-bold">Title</div>

        <CloseEmoji
          className="h-full w-6 cursor-pointer hover:scale-110"
          onClick={hide}
        />
      </div>

      {/* content image wall */}
      <div className="mt-1.5 box-border h-fit w-full flex flex-row flex-wrap items-center justify-between gap-2.5 rounded-md p-1">
        {Array.from({ length: 5 })
          .fill(0)
          .map((_, index) => (
            <img
              key={index} // 添加一个唯一的key属性
              className="h-25 w-25 rounded-md bg-[#FFFFFF90]"
              src={'/logo.png'} // 使用不同的图片
              alt=""
            />
          ))}
      </div>
    </div>
  )
}

export default React.forwardRef(ImagePanel)
