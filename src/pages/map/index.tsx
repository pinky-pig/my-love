import React from 'react'
import { useNavigate } from 'react-router-dom'
import { EarthEmoji } from '~/components/emoji/EarthEmoji'
import { viewNavigate } from '~/hooks/useViewNavigate'

export default function Map() {
  const navigate = useNavigate()

  return (
    <div className='w-screen h-screen overflow-hidden'>

      {/* 地图 */}
      <div id='map' className="w-full h-full fixed top-0 left-0 z-1"></div>

      {/* title and close */}

      <div className="w-full h-full box-border p-36 pointer-events-none relative z-2">
        <div className="flex flex-col w-14 items-start gap-4">
          <EarthEmoji
            className="text-14 pointer-events-auto cursor-pointer "
            onClick={(e) => {
              viewNavigate(navigate, '/', e, { type: 'shrink', color: '#BBD5AA' })
            }}
          />
          <div className="text-6 tracking-3 font-bold write-vertical-right mx-auto">
            留下的足迹
          </div>
        </div>
      </div>

    </div>
  )
}
