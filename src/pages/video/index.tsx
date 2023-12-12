import VideoMask from '~/assets/img/video-mask.png'

export default function Video() {
  return (
    <div className='w-screen h-screen overflow-hidden bg-black grid place-items-center'>

      <div className="w-80vw h-60vh">

        <video
          autoPlay
          controls
          className="!w-full !h-full object-cover"
          style={
            { WebkitMask: `url(${VideoMask}) no-repeat center center/100% 100%` }
          }
          src='/videos/打跳.mp4'
        />

      </div>

    </div>
  )
}
