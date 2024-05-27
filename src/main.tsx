import React from 'react'
import { createRoot } from 'react-dom/client'
import '~/styles/global.css'
import 'virtual:uno.css'
import { setupGdMap } from '~/config/gdMap'
import App from './App'
import '@radix-ui/themes/styles.css'

const container = document.querySelector('#root')
const root = createRoot(container!)

// 加载高德地图 API
setupGdMap()

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
