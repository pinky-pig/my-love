import { flushSync } from 'react-dom'
import type { NavigateFunction, NavigateOptions } from 'react-router-dom'

/**
 * 封装一层路由跳转，添加 view transition api
 * https://developer.chrome.com/docs/web-platform/view-transitions/
 * @param navigate react-router-dom useNavigate()
 * @param to route path
 * @param options router options
 * @returns the same to react-router-dom
 */
export function viewNavigate(
  navigate: NavigateFunction,
  to: string,
  event: React.MouseEvent,
  expandTransition?: {
    type: 'expand' | 'shrink'
    color: string
    duration?: number
  },
  options?: NavigateOptions | undefined,
) {
  // @ts-expect-error: Transition API
  if (!document.startViewTransition) {
    return navigate(to, { ...options })
  } else {
    if (!expandTransition) {
      // @ts-expect-error: Transition API
      document.startViewTransition(() => {
        flushSync(() => {
          navigate(to, { ...options })
        })
      })
      return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )
    const isShrink = expandTransition.type === 'shrink'

    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        const root = document.documentElement
        root.classList.remove('expand-transition')
        root.classList.remove('shrink-transition')
        root.classList.add(isShrink ? 'shrink-transition' : 'expand-transition')
        navigate(to, { ...options })
      })
    })

    transition.ready.then(() => {
      const root = document.documentElement
      root.style.background = expandTransition?.color || '#BBD5AA'

      handleTransition()
      function handleTransition() {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ]
        const animation = root.animate(
          {
            clipPath: isShrink ? [...clipPath].reverse() : clipPath,
          },
          {
            duration: expandTransition?.duration || 400,
            easing: 'ease-in-out',
            pseudoElement: isShrink
              ? '::view-transition-old(root)'
              : '::view-transition-new(root)',
          },
        )

        animation.onfinish = () => {
          // 在动画完成时执行你的代码
          root.classList.remove('expand-transition')
          root.classList.remove('shrink-transition')
        }
      }
    })
  }
}
