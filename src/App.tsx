import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Theme } from '@radix-ui/themes'
import DynamicRouters from '~/router'
import Noise from '~/assets/svg/noise.svg?raw'
import Loading from './components/ui/Loading'
import TransitionForText from './components/ui/TransitionForText'

export default function App() {
  return (
    <Theme>
      <div id="App" className="App">
        <Suspense fallback={<Loading />}>
          <BrowserRouter>
            <DynamicRouters />
          </BrowserRouter>
        </Suspense>

        {/* noise SVG */}
        <div className="hidden" dangerouslySetInnerHTML={{ __html: Noise }} />

        {/* view-transition-api text move effect */}
        <TransitionForText />
      </div>
    </Theme>
  )
}
