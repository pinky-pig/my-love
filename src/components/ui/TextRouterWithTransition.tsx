import { flushSync } from 'react-dom'
import { useNavigate } from 'react-router-dom'

export default function TextRouterWithTransition({ to, children, className }: any) {
  const navigate = useNavigate()
  return (
    <a
      href={to}
      className={className}
      style={{
        textDecoration: 'none',
        color: 'inherit',
      }}
      onClick={(ev) => {
        ev.preventDefault()
        // @ts-expect-error: Transition API
        document.startViewTransition(() => {
          flushSync(() => {
            navigate(to)
          })
        })
      }}
    >
      {children}
    </a>
  )
}
