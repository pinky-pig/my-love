import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Loading from './components/ui/Loading'
import TransitionForText from './components/ui/TransitionForText'
import DynamicRouters from '~/router'
import Noise from '~/assets/svg/noise.svg?raw'

function App() {
  return (
    <div className="App">
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
  )
}

export default App
