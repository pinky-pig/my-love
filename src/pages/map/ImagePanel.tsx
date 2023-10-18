import React from 'react'
import styles from './index.module.css'
import CloseEmoji from '~/components/emoji/CloseEmoji'

interface IImagePanelType {
}
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
    if (!panelRef.current)
      return

    if (isShowPanel === true) {
      // 说明已经打开面板
      panelRef.current.style.animation = `${styles['scale-out']} 0s forwards`
      const ANIMATIONS = panelRef.current.getAnimations()
      await Promise.all(ANIMATIONS.map(animation => animation.finished))
      panelRef.current.style.animation = `${styles['scale-in']} .5s forwards`
    }
    else {
      panelRef.current.style.animation = `${styles['scale-in']} .4s forwards`
    }

    const ANIMATIONS = panelRef.current.getAnimations()
    await Promise.all(ANIMATIONS.map(animation => animation.finished))
    setIsShowPanel(true)
  }

  async function hide() {
    if (!panelRef.current)
      return

    const ANIMATIONS = panelRef.current.getAnimations()
    await Promise.all(ANIMATIONS.map(animation => animation.finished))
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
      className="min-w-250px max-w-450px origin-bottom-left h-70vh bg-[#FFFFFF90] rounded-xl absolute left-8 bottom-8 z-9 backdrop-blur-5px box-border p-6px"
    >
      {/* header */}
      <div
        className="bg-[#FFFFFF90] w-full h-10 px-2 box-border rounded-md flex flex-row justify-between items-center  overflow-hidden"
      >
        <div className="flex-1 font-bold">
          Title
        </div>

        <CloseEmoji
          className="cursor-pointer w-6 h-full hover:scale-110"
          onClick={hide}
        />
      </div>

      {/* content image wall */}
      <div
        className="
          mt-1.5
          w-full h-fit
          p-1 box-border
          rounded-md
          gap-2.5
          flex flex-row flex-wrap justify-between items-center
        "
      >

        {
          Array(2).fill(0).map((_, index) => (
            <img
              key={index} // 添加一个唯一的key属性
              className="w-25 h-25 rounded-md bg-[#FFFFFF90]"
              src={'/logo.png'} // 使用不同的图片
              alt=""
            />
          ))
        }

      </div>

    </div>
  )
}

export default React.forwardRef(ImagePanel)
