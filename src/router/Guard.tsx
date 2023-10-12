import React from 'react'
import { Await } from 'react-router-dom'
import Loading from '~/components/ui/Loading'
import { setupGdMap } from '~/config/gdMap'

interface GuardProps {
  path: string
  children: React.ReactNode
}
export default function Guard({ path, children }: GuardProps): React.ReactNode {
  // Map 页面特殊处理
  if (path !== '/map') {
    return (
      <React.Suspense fallback={<Loading />}>
        {children}
      </React.Suspense>
    )
  }
  else {
    let propmise = null
    if (window.AMap)
      propmise = new Promise(resolve => resolve('loaded'))
    else
      propmise = setupGdMap()

    return (
      <React.Suspense fallback={<Loading />}>

        <Await resolve={propmise} >
          {children}
        </Await>
      </React.Suspense>
    )
  }
}
