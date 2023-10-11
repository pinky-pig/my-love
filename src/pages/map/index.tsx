import React from 'react'
import { useNavigate } from 'react-router-dom'
import { viewNavigate } from '~/hooks/useViewNavigate'

export default function Map() {
  const navigate = useNavigate()

  return (
    <div className='m-24 box-border'>
      <span
        className='transition-text text-48 text-[#F3EDDC] hover:!text-shadow-md hover:!scale-110'
        style={{
          WebkitTextStroke: '2px #3E4857',
          textShadow: '4px 4px 0 #3e4857',
          transition: 'text-shadow 0.3s ease-in-out, transform 0.3s linear',
        }}
        onClick={() => {
          viewNavigate(navigate, '/home')
        }}
      >
        梦想
      </span>
    </div>
  )
}
