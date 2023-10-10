import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Map from '~/pages/map'

const Home = lazy(() => import('~/pages/Home'))
const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/map',
    element: <Map />,
  },
  {
    path: '*',
    element: <div> 404 </div>,
  },
]

export { routes }

export default createBrowserRouter(routes)
