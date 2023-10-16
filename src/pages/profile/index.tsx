import React from 'react'
import { useNavigate } from 'react-router-dom'
import { pageColor } from '~/config/params'

export default function Profile() {
  const navigate = useNavigate()

  return (
    <div
      className='w-screen h-screen overflow-hidden grid place-items-center p-10 box-border'
      style={{ background: pageColor.timeline }}
    >

      <div className="flex flex-row w-full h-full">
        <div className="transition-text text-4xl">我們</div>
      </div>

    </div>
  )
}
