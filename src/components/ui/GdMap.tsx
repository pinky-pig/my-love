import React from 'react'

interface GdMapProps {
  onload: (map: any) => any
  className?: string
  options?: any
}

/**
 * 创建高德地图组件
 * https://developer.amap.com/api/jsapi-v2/guide/map/lifecycle
 * @param onload 创建方法，用于将生成的地图实例返回
 * @param options 创建的一些配置，外面传进来可以覆盖基础配置
 * @returns 地图实例
 */
export default function GdMap({ onload, className, options }: GdMapProps) {
  const mapContainer = React.useRef(null)

  function initMapbox(option?: any) {
    const map = new window.AMap.Map(mapContainer.current, {
      mapStyle: 'amap://styles/whitesmoke',
      zoom: 4,
      center: [106.586254, 33.514657],
      viewMode: '3D',
      showBuildingBlock: true,
      terrain: true,
      ...option,
    })

    onload(map)
    return map
  }

  React.useEffect(() => {
    const map = initMapbox(options)

    return () => {
      map.destroy()
    }
  }, [])

  return (
    <div
      ref={mapContainer}
      id='mapContainer'
      className={
        `h-full w-full ${className}`
      }
    />
  )
}
