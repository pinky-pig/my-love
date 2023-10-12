const KEY = '410b3387094888ab763176e07249533a'
const jsCode = 'a8f12cd6ac0299c870aa2e1e5013122c'
export const mapStyle = 'amap://styles/a7d6236c7a5e62e3e36fd31d8376a96a'

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
