import React from 'react'
import { useNavigate } from 'react-router-dom'
import VideoMask from '~/assets/img/video-mask.png'

export default function Video() {
  const navigate = useNavigate()

  return (
    <div className='w-screen h-screen overflow-hidden bg-black grid place-items-center'>

      <div className="w-80vw h-60vh">
        {/* <video className="w-full h-full" src="" ></video> */}
        <img
          style={
            {
              WebkitMask: `url(${VideoMask}) no-repeat center center/100% 100%`,
            }
          }
          className="w-full h-full" src="/temp.jpg"
        ></img>
      </div>

    </div>
  )
}
