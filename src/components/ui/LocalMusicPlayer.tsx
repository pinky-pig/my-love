import { useEventListener } from 'ahooks'
import React from 'react'

export default function LocalMusicPlayer() {
  // const mouse = useMouse()
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
    <div className="absolute top-0 right-0 z-9">
      <audio ref={audioRef}>
        <source src="/oh-my-love.mp3" type="audio/mpeg" />
      </audio>

      <div className="relative w-40 h-40 rounded-full border-4 border-white border-solid box-border grid place-items-center">
      {/* animate-[spin_10s_linear_infinite] */}
        <div className="absolute top-0 left-0 -translate-1/2 w-[calc(100%_-_1rem)] h-[calc(100%_-_1rem)] rounded-full border-4 border-white border-dashed ">
        </div>
      </div>
    </div>
  )
}
