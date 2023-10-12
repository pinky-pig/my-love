import React from 'react'
import { mapStyle } from '~/config/gdMap'

interface GdMapProps {
  options?: any
}

export default function GdMap(props: GdMapProps) {
  // const mapContainer = React.useRef(null)

  function initMapbox(option?: any) {
    const map = new window.AMap.Map('mapContainer', {
      mapStyle,
      zoom: 13,
      center: [118.788337, 32.067345],
      viewMode: '3D',
      showBuildingBlock: true,
      pitch: 45,
      terrain: true,
    })
    return map
  }

  React.useEffect(() => {
    initMapbox()
  }, [])

  return (
    <div
      id='mapContainer'
      className="h-full w-full"
    />
  )
}
