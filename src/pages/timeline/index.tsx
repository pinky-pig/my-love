import { pageColor } from '~/config/params'

export default function Timeline() {
  return (
    <div
      className='w-screen h-screen overflow-hidden grid place-items-center p-10 box-border'
      style={{ background: pageColor.timeline }}
    >

      <div className="flex flex-row w-full h-full">
        <div className="transition-text-timeline text-4xl">Timeline</div>
      </div>

    </div>
  )
}
