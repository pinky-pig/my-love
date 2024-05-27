import VideoMask from '~/assets/img/video-mask.png'

export default function Video() {
  return (
    <div className="grid h-screen w-screen place-items-center overflow-hidden bg-black">
      <div className="h-60vh w-80vw">
        <video
          autoPlay
          controls
          className="object-cover !h-full !w-full"
          style={{
            WebkitMask: `url(${VideoMask}) no-repeat center center/100% 100%`,
          }}
          src="/videos/打跳.mp4"
        />
      </div>
    </div>
  )
}
