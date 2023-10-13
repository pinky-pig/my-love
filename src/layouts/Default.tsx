import { Outlet } from 'react-router-dom'
import LocalMusicPlayer from '@/components/ui/LocalMusicPlayer'
import MouseTailGSAP from '~/components/ui/MouseTailGSAP'

export default function DefaultLayout() {
  return (
    <>
      <Outlet />

      <MouseTailGSAP></MouseTailGSAP>
      <LocalMusicPlayer></LocalMusicPlayer>

    </>
  )
}
