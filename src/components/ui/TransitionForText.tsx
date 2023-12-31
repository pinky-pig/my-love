import useGlobalStore from '~/store/global'

/**
 * 这个组件是控制 view-transition-api 的 text 是否生效
 * 因为项目中有两个效果，一个是背景扩散，一个是字体移动
 * 避免在页面跳转的时候没有字体移动，导致的字体渐入渐出效果
 * 所以要判断是否生效
 * https://developer.chrome.com/docs/web-platform/view-transitions/
 * @returns
 */
export default function TransitionForText() {
  const { enableTransitionText } = useGlobalStore()

  return (
    <div>
      {
        <style>
          {`
            ${enableTransitionText.join(',')} {
              view-transition-name: transition-text;
            }
          `}
        </style>
      }
    </div>
  )
}
