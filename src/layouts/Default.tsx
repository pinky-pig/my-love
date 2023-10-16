import { Outlet } from 'react-router-dom'
import LocalMusicPlayer from '@/components/ui/LocalMusicPlayer'
import MouseTailGSAP from '~/components/ui/MouseTailGSAP'

export default function DefaultLayout() {
  return (
    <>
      <Outlet />

      {/* 鼠标轨迹运动 */}
      <MouseTailGSAP></MouseTailGSAP>

      {/* 右上角返回按钮 */}
      <LocalMusicPlayer></LocalMusicPlayer>
    </>
  )
}
