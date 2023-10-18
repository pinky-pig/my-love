import React from 'react'

import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/all'
import styles from './index.module.css'
import type { IImagePanelExposeType } from './ImagePanel'
import ImagePanel from './ImagePanel'
import GdMap from '~/components/ui/GdMap'
import { pageColor } from '~/config/params'
import { AliyunGEODataVUrl, Locations } from '~/config/gdMap'
import ParabolicSVG from '~/components/ui/ParabolicSVG'

export default function Map() {
  function mapOnload(map: any) {
    window.mapInstance = map
    map.on('complete', () => {
      // 地图图块加载完成后触发
      initCity(Locations, map)
    })
  }

  /**
   * 图片面板
   */
  const ImagePanelRef = React.useRef<IImagePanelExposeType | null>(null)

  /**
   * 1. 设置动画路径
   * 2. 开启 GSAP 动画
   *
   * 这里逻辑比较繁琐，本来是函数的调用，结果改成了变量的监听
   * 修改的目的是，parabolicCoords 更改后，子组件的 path 修改，然后 path DOM 渲染后
   * 再执行 GSAP 动画。
   * 目的就是为了在子组件的 DOM 更新后再触发动画
   * 导致现在增加了一个 targetIdRef ，还有父组件一个 useEffect 和子组件多了一个 path 的 useEffect
   * **useEffect 是在 DOM 渲染后再触发的**
   */
  const [parabolicCoords, setParabolicCoords] = React.useState([0, 0])
  const targetIdRef = React.useRef<string | null>(null)
  function handleClickToAnimate(
    e: React.MouseEvent | MouseEvent,
    targetId: string,
  ) {
    setParabolicCoords([e.clientX, e.clientY])
    targetIdRef.current = targetId
  }
  /**
   * 沿着 #parabolicPath id GSAP 运动
   * @param targetId 要 GSAP 动画的 DOM Id
   * @returns 如果 id 为 null，不做运动，否则就运动
   */
  function startGSAPAnimation(targetId: string | null) {
    if (!targetId)
      return
    // 此处执行GSAP动画
    const movingDiv = document.getElementById(targetId)
    if (movingDiv) {
      const cloneDom = movingDiv.cloneNode(true) as HTMLElement
      cloneDom.style.position = 'absolute'
      cloneDom.style.top = '0'
      cloneDom.style.left = '0'
      cloneDom.style.zIndex = '9'
      cloneDom.style.willChange = 'transform'
      cloneDom.setAttribute('id', 'cloneNode')
      document.getElementById('App')?.append(cloneDom)
      const tl = gsap.timeline({ repeat: 0 })
      tl.to(cloneDom, {
        duration: 0.4,
        motionPath: {
          path: '#parabolicPath',
          align: '#parabolicPath',
          alignOrigin: [0.5, 0.5],
        },
        // ease: 'cubic-bezier(0,1.57,.28,1.07)',
        ease: 'linear',
        onComplete(e) {
          document.getElementById('App')?.removeChild(cloneDom)

          ImagePanelRef.current?.show()
        },
      })
    }
  }

  /**
   * 注册 GSAP MotionPathPlugin 插件
   */
  React.useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin)
  }, [])

  /**
   * 根据城市行政区划代码从阿里云查询地图边界，上图
   */
  function initCity(cities: typeof Locations, map: any) {
    cities.forEach((item) => {
      fetch(AliyunGEODataVUrl + item.code)
        .then((response) => { return response.json() })
        .then((city) => {
          initPolygonAndMarker(city, map, item)
        })
    })
  }

  /**
   * 初始化区域和 marker 点
   * @param json 区域 geo json
   * @param map 高德地图
   * @param city 自定义的city property
   */
  function initPolygonAndMarker(json: any, map: any, city: typeof Locations[number]) {
    const AMap = window.AMap
    const geojson = new AMap.GeoJSON({
      geoJSON: json,
      getPolygon(geojson: any, lnglats: any) {
        const area = AMap.GeometryUtil.ringArea(lnglats[0])
        const polygon = new AMap.Polygon({
          path: lnglats,
          strokeOpacity: 0.4,
          strokeColor: '#BBD5AA',
          strokeWeight: 2,
          strokeStyle: 'dashed',
          strokeDasharray: [5, 5],
          fillColor: '#BBD5AA',
          fillOpacity: 0.3, // 面积越大透明度越高
        })
        polygon.on('mouseover', () => {
          polygon.setOptions({
            fillOpacity: 0.1,
          })
        })
        polygon.on('mouseout', () => {
          polygon.setOptions({
            fillOpacity: 0.3,
          })
        })
        return polygon
      },
    })
    map.add(geojson)

    const center = json.features[0]?.properties?.center
    const markerId = `marker${city.id}`
    const content = `
    <div id="${markerId}" class="hover:scale-110 flex flex-col items-center space-y-0.5 w-fit" style="max-width: 150px;">
      <div class="hover:animate-[shake_1.5s_ease-in-out_infinite] border-2 rounded border-solid px-1.5 flex items-center space-x-0.5 overflow-hidden w-fit cursor-pointer shadow-[rgba(170,166,170,0.40)] shadow-md bg-[rgba(152,208,255,0.5)] border-white py-[0.1875rem]">
        <img
          src="/logo.png"
          class="w-4 h-4 block select-none pointer-events-none"
        >
      </div>
    </div>
  `
    const cityMarker = new AMap.Marker({
      position: center,
      offset: new AMap.Pixel(0, -10),
      content,
      title: '足迹',
      zIndex: 999,
      zoom: 13,
      id: city.id,
      autoRotation: true,
      map,
      extData: { id: markerId },
      // label: {
      //   direction: 'bottom',
      //   content: labelContent,
      //   offset: labelOffset,
      // },
    })

    cityMarker.on('click', (e: any) => {
      handleClickToAnimate(e.originEvent, markerId)
    })
  }

  return (
    <div
      className='w-screen h-screen overflow-hidden flex flex-col justify-center items-center box-border'
      style={{ background: pageColor.map }}
    >

      {/* 抛物线 */}
      <ParabolicSVG
        coords={parabolicCoords}
        startGSAPAnimation={
          () => startGSAPAnimation(targetIdRef.current)
        }
      />

      {/* 地图 */}
      <div className="w-70vw h-[calc(100%_-_9rem)] z-1 relative overflow-hidden ">
        <GdMap
          className="rounded-20px overflow-hidden"
          onload={mapOnload}
        />

        {/* border 样式 */}
        <div className={styles.scratchyBorder}>
          <div className={styles.frames}>
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className={styles.corners}>
            <div />
            <div />
          </div>
        </div>
      </div>

      {/* 图片列表 */}
      <ImagePanel
        ref={ImagePanelRef}
      />

      {/* title and close */}
      <div className="absolute top-36 left-36 flex flex-col w-14 items-start gap-4 z-9">
        {/* <EarthEmoji
          className="text-14 pointer-events-auto cursor-pointer "
          onClick={(e) => {
            viewNavigate(navigate, '/', e, { type: 'shrink', color: '#BBD5AA' })
          }}
        /> */}
        {/* <div className="text-6 tracking-3 font-bold write-vertical-right mx-auto">
          留下的足迹
        </div> */}
      </div>

    </div>
  )
}
