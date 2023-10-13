import { Outlet } from 'react-router-dom'
import LocalMusicPlayer from '@/components/ui/LocalMusicPlayer'
import MouseTailGSAP from '~/components/ui/MouseTailGSAP'
import Noise from '~/assets/svg/noise.svg?raw'

export default function DefaultLayout() {
  return (
    <>
      <Outlet />

      <MouseTailGSAP></MouseTailGSAP>
      <LocalMusicPlayer></LocalMusicPlayer>

      <div dangerouslySetInnerHTML={{ __html: Noise }} />
    </>
  )
}
