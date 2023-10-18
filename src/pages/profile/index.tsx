import React from 'react'
import { pageColor } from '~/config/params'

export default function Profile() {
  return (
    <div
      className='
        w-screen h-screen overflow-hidden
        grid place-items-center
        px-12.5vw py-18
        box-border
        text-[#3E4857]
      '
      style={{ background: pageColor.profile }}
    >

      <div className="flex flex-row w-full h-full">
        <div
          className="transition-text font-extrabold tracking-2"
          style={{
            fontSize: 'calc(calc(16px + 0.2vw) * 3.2)',
          }}
        >
          我們
        </div>
      </div>

    </div>
  )
}
