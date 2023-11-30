let count = -1

export function getColorFromPalettes() {
  const palettes = [
    '031926-468189-77aca2-9dbebb-f4e9cd'.split('-').map(a => `#${a}`),
    'f4faff-dee7e7-b7adcf-4f646f-535657'.split('-').map(a => `#${a}`),
    'acadbc-9b9ece-6665dd-473bf0-000500'.split('-').map(a => `#${a}`),
    '88498f-779fa1-e0cba8-ff6542-564154'.split('-').map(a => `#${a}`),
    '493b2a-593f62-7b6d8d-8499b1-a5c4d4'.split('-').map(a => `#${a}`),
    'c41e3d-7d1128-ff2c55-3c0919-e2294f'.split('-').map(a => `#${a}`),
    '16bac5-5fbff9-efe9f4-171d1c-5863f8'.split('-').map(a => `#${a}`),
    'd9e5d6-00a7e1-eddea4-f7a072-ff9b42'.split('-').map(a => `#${a}`),
  ].flat()

  count = (count + 1) % (5 * 8)
  return palettes[count]
}
