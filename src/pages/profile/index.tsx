import React from 'react'
import { pageColor } from '~/config/params'

export default function Profile() {
  return (
    <div
      className='w-screen h-screen overflow-hidden grid place-items-center p-10 box-border'
      style={{ background: pageColor.profile }}
    >

      <div className="flex flex-row w-full h-full">
        <div className="transition-text text-4xl">我們</div>
      </div>

    </div>
  )
}
