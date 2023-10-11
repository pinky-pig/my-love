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
export function viewNavigate(navigate: NavigateFunction, to: string, options?: NavigateOptions | undefined) {
  // @ts-expect-error: Transition API
  if (!document.startViewTransition) {
    return navigate(to)
  }
  else {
    // @ts-expect-error: Transition API
    return document.startViewTransition(() => {
      flushSync(() => {
        navigate(to)
      })
    })
  }
}
