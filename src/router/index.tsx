import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '~/pages/Home'
import Default from '~/layouts/Default'

const Map = lazy(() => import('~/pages/map'))

const routes = [
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'Home',
        element: <Home />,
      },
      {
        path: '/map',
        element: <Map />,
      },
    ],
  },

  {
    path: '*',
    element: <div> 404 </div>,
  },
]

export default createBrowserRouter(routes)
