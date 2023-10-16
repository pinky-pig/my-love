import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'
import GdMap from '~/components/ui/GdMap'
import { pageColor } from '~/config/params'

export default function Map() {
  const navigate = useNavigate()

  function mapOnload(map: any) {
    window.mapInstance = map
    map.on('complete', () => {
      // 地图图块加载完成后触发
    })
  }

  return (
    <div
      className='w-screen h-screen overflow-hidden flex flex-col justify-center items-center'
      style={{ background: pageColor.map }}
    >

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
