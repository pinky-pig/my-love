import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import Guard from './Guard'
import Home from '~/pages/Home'
import Map from '~/pages/map'
import Default from '~/layouts/Default'

const Video = lazy(() => import('~/pages/video'))
const Timeline = lazy(() => import('~/pages/timeline'))

// 路由配置列表数据转换
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
        element: (
          <Guard path={'/map'}>
            <Map />
          </Guard>
        ),
      },
      {
        path: '/video',
        element: <Video />,
      },
      {
        path: '/timeline',
        element: <Timeline />,
      },
    ],
  },
  {
    path: '*',
    element: <div> 404 </div>,
  },
]

export default function DynamicRouters() {
  return useRoutes(routes)
}
