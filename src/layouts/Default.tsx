import { Outlet } from 'react-router-dom'
import MouseTailGSAP from '~/components/ui/MouseTailGSAP'

export default function DefaultLayout() {
  return (
    <>
      <Outlet />

      <MouseTailGSAP></MouseTailGSAP>
    </>
  )
}
