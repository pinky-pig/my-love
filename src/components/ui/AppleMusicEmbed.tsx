import React from 'react'

export default function AppleMusic() {
  return (

    <div className="relative w-300px h-450px left-0" >
      <iframe
        src="https://embed.music.apple.com/us/album/magical-mystery-tour/1441163490"
        className="absolute top-0 left-0 w-full h-full border-0"
        allowFullScreen
        allow="encrypted-media;"
      >
      </iframe>
    </div>
  )
}
