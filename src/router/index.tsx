import { useRoutes } from 'react-router-dom'
import Home from '~/pages/home'
import Map from '~/pages/map'
import Video from '~/pages/video'
import Timeline from '~/pages/timeline'
import Profile from '~/pages/profile'
import Life from '~/pages/life'
import Default from '~/layouts/Default'
import Loading from '~/components/ui/Loading'
import Guard from './Guard'

// const Video = lazy(() => import('~/pages/video'))
// const Timeline = lazy(() => import('~/pages/timeline'))

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
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/life',
        element: <Life />,
      },
    ],
  },
  {
    path: '*',
    element: <Loading />,
  },
]

export default function DynamicRouters() {
  return useRoutes(routes)
}
