/* eslint-disable unicorn/filename-case */
const KEY = '410b3387094888ab763176e07249533a'
const jsCode = 'a8f12cd6ac0299c870aa2e1e5013122c'
export const mapStyle = 'amap://styles/a7d6236c7a5e62e3e36fd31d8376a96a'
export const AliyunGEODataVUrl =
  'https://geo.datav.aliyun.com/areas_v3/bound/geojson?code='

export function setupGdMap() {
  const mapSecurity = document.createElement('script')
  mapSecurity.innerHTML = `
    window._AMapSecurityConfig = {
      securityJsCode: '${jsCode}',
    }
  `
  document.head.append(mapSecurity)

  const promise = new Promise((resolve) => {
    const url = `https://webapi.amap.com/maps?v=2.0&key=${KEY}&plugin=Map3D,AMap.GeoJSON`
    const jsAPI = document.createElement('script')
    jsAPI.src = url
    document.head.append(jsAPI)

    jsAPI.addEventListener('load', () => {
      if (window.AMap) resolve('AMap is loaded')
    })
  })

  return promise
}

/**
 * 城市及描述和其他信息
 * 行政区划代码：
 * https://a.amap.com/lbs/static/file/AMap_adcode_citycode.xlsx.zip
 */
export const Locations = [
  {
    code: 340200,
    des: '',
    id: 1,
    name: '芜湖',
  },
  {
    code: 320100,
    des: '',
    id: 2,
    name: '南京',
  },
  {
    code: 310000,
    des: '',
    id: 3,
    name: '上海',
  },
  {
    code: 341100,
    des: '',
    id: 4,
    name: '滁州',
  },
  {
    code: 370100,
    des: '',
    id: 5,
    name: '济南',
  },
  {
    code: 370200,
    des: '',
    id: 6,
    name: '青岛',
  },
  {
    code: 430100,
    des: '',
    id: 7,
    name: '长沙',
  },
  {
    code: 341282,
    des: '',
    id: 8,
    name: '界首',
  },
]
