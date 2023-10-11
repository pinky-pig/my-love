import React from 'react'

export default function Guard({ children }: any) {
  return (
    <React.Suspense fallback={<div>Loading</div>}>
      {children}
    </React.Suspense>
  )
}
