import { BrowserRouter } from 'react-router-dom'
import DynamicRouters from '~/router'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DynamicRouters />
      </BrowserRouter>
    </div>
  )
}

export default App
