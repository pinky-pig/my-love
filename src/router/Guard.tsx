import React from 'react'

interface GuardProps {
  children: React.ReactNode
}
export default function Guard({ children }: GuardProps): React.ReactNode {
  return (
    <React.Suspense fallback={<div>Loading</div>}>
      {children}
    </React.Suspense>
  )
}
