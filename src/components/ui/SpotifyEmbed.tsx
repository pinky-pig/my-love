import React from 'react'

export default function SpotifyEmbed() {
  return (
    <div className="relative w-260px h-153px left-0 z-99 ">
      <iframe
        style={{
          borderRadius: '12px',
        }}
        className="border-0"
        src="https://open.spotify.com/embed/track/0gDyuX5rdHulQTUyrIdSR1?utm_source=generator"
        width="100%"
        height="152"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  )
}
