import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GeoUiEarthEast } from '~/components/emoji/GeoUiEarthEast'
import { viewNavigate } from '~/hooks/useViewNavigate'

export default function Map() {
  const navigate = useNavigate()

  return (
    <div className='w-screen h-screen overflow-hidden'>

      {/* 地图 */}
      <div id='map' className="w-full h-full fixed top-0 left-0"></div>

      {/* title and close */}

      <div className="w-full h-full box-border p-36 pointer-events-none ">
        <div className="flex flex-col w-14 items-start gap-4">
          <GeoUiEarthEast
            className="transition-text text-14 pointer-events-auto cursor-pointer "
            onClick={() => {
              viewNavigate(navigate, '/')
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
