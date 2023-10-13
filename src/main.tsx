import React from 'react'
import { createRoot } from 'react-dom/client'
import '~/styles/global.css'
import 'virtual:uno.css'
import App from './App'
import { setupGdMap } from '~/config/gdMap'

const container = document.getElementById('root')
const root = createRoot(container!)

// 加载高德地图 API
setupGdMap()

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
