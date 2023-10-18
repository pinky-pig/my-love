import React from 'react'
import { pageColor } from '~/config/params'

export default function Life() {
  return (
    <div
      className='
        w-screen h-screen overflow-hidden
        grid place-items-center
        px-12.5vw py-18
        box-border
        text-[#3E4857]
      '
      style={{ background: pageColor.timeline }}
    >

      <div className="flex flex-row w-full h-full">
        <div
          className="transition-text-life font-extrabold tracking-2"
          style={{
            fontSize: 'calc(calc(16px + 0.2vw) * 3.2)',
          }}
        >
          Life
        </div>
      </div>

    </div>
  )
}
