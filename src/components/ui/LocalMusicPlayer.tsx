import { useEventListener, useMouse } from 'ahooks'
import React from 'react'

export default function LocalMusicPlayer() {
  const mouse = useMouse()

  // React.useEffect(() => {
  //   console.log(mouse)
  // }, [mouse])

  const [isPlaying, setIsPlaying] = React.useState(false)
  const audioRef = React.useRef<HTMLAudioElement | null>(null)

  React.useEffect(() => {
    if (!audioRef.current)
      return

    const audio = audioRef.current
    isPlaying ? audio.play() : audio.pause()
  }, [isPlaying])

  useEventListener('keydown', (ev) => {
    isPlaying ? setIsPlaying(false) : setIsPlaying(true)
  })

  return (
    <div className="absolute top-0 left-0 -z-1">
      <audio ref={audioRef}>
        <source src="/oh-my-love.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}
