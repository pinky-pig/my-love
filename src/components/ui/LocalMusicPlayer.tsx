import { useEventListener } from 'ahooks'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CDEmoji } from '../emoji/CDEmoji'
import HomeEmoji from '../emoji/HomeEmoji'
import { viewNavigate } from '~/hooks/useViewNavigate'

export default function LocalMusicPlayer() {
  const [isHome, setIsHome] = React.useState(false)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const audioRef = React.useRef<HTMLAudioElement | null>(null)
  const navigate = useNavigate()

  const location = useLocation()
  React.useEffect(() => {
    setIsHome(location.pathname === '/')
  }, [location])

  React.useEffect(() => {
    if (!audioRef.current)
      return

    const audio = audioRef.current
    isPlaying ? audio.play() : audio.pause()
  }, [isPlaying])

  useEventListener('keydown', (ev) => {
    if (ev.code === 'Space')
      isPlaying ? setIsPlaying(false) : setIsPlaying(true)
  })

  const [isOnDOM, setIsOnDOM] = React.useState(false)
  const domRef = React.useRef<HTMLDivElement | null>(null)
  React.useEffect(() => {
    if (isOnDOM)
      switchImg('music')
    else
      switchImg('avatar')
  }, [isOnDOM])

  React.useEffect(() => {
    const timer = setInterval(() => {
      switchImg('music')
    }, 1000 * 60)

    return () => {
      clearInterval(timer)
    }
  }, [])

  function switchImg(to: 'music' | 'avatar') {
    if (!domRef.current)
      return
    const scale = ['scaleX(1)', 'scaleX(-1)']
    const animation = domRef.current.animate(
      { transform: to === 'music' ? scale : [...scale].reverse() },
      { duration: 400, fill: 'forwards' },
    )
    animation.onfinish = () => { }
  }

  return (
    <div
      className="absolute top-10 right-10 z-9 text-white mix-blend-difference"
      onPointerOver={() => {
        isHome && setIsOnDOM(true)
      }}
      onPointerLeave={() => {
        isHome && setIsOnDOM(false)
      }}
    >
      <audio ref={audioRef}>
        <source src="/oh-my-love.mp3" type="audio/mpeg" />
      </audio>

      <div className="relative circular w-16 h-16 grid place-items-center cursor-pointer">
        <svg className="absolute w-full h-full left-0 top-0 overflow-visible animate-[spin_24s_linear_infinite]" viewBox="0 0 100 100">
          <path
            className="fill-none"
            d="M 0,50 a 50,50 0 1,1 0,1 z"
            id="circle"
          />
          <text className="fill-[CurrentColor]">
            <textPath className="text-10px tracking-0.25rem font-bold select-none" xlinkHref="#circle">
              ARVIN && ZOE 王文博 && 王春子 LOVE
            </textPath>
          </text>
        </svg>

        <div ref={domRef} className="w-full h-full grid place-items-center ">
          {
            isHome
              ? (
                <CDEmoji
                  className="relative z-10 h-2/3 "
                  style={{
                    animation: isPlaying ? 'light-bounce 1s infinite' : 'unset',
                  }}
                  onClick={() => {
                    isPlaying ? setIsPlaying(false) : setIsPlaying(true)
                  }}
                />
                )
              : (
                <HomeEmoji
                  className="relative z-10 h-2/3 "
                  style={{
                    animation: isPlaying ? 'light-bounce 1s infinite' : 'unset',
                  }}
                  onClick={(e) => {
                    viewNavigate(navigate, '/', e, { type: 'shrink', color: '#000000' })
                  }}
                />
                )
          }

        </div>

      </div>
    </div>
  )
}
