const KEY = 'de6a7ea66d01c9b4462b6e01b00a1663'
const jsCode = 'ed6e54cee45b4cce56960b14d0cb327b'
export const mapStyle = 'amap://styles/c207e36d57eebc392121b4e798b7a8d4'

export function setupGdMap() {
  const mapSecurity = document.createElement('script')
  mapSecurity.innerHTML = `
    window._AMapSecurityConfig = {
      securityJsCode: '${jsCode}',
    }
  `
  document.head.appendChild(mapSecurity)

  const promise = new Promise((resolve, reject) => {
    const url = `https://webapi.amap.com/maps?v=2.0&key=${KEY}&plugin=Map3D`
    const jsAPI = document.createElement('script')
    jsAPI.src = url
    document.head.appendChild(jsAPI)

    jsAPI.onload = () => {
      if (window.AMap)
        resolve('AMap is loaded')
    }
  })

  return promise
}
