import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Loading from './components/ui/Loading'
import DynamicRouters from '~/router'

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <DynamicRouters />
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
