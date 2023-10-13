import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Loading from './components/ui/Loading'
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

      <div className="hidden" dangerouslySetInnerHTML={{ __html: Noise }} />
    </div>
  )
}

export default App
