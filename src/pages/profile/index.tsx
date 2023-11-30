/* eslint-disable no-console */
import React, { useLayoutEffect, useState } from 'react'
import { getColorFromPalettes } from '@/utils/random-color'
import { pageColor } from '~/config/params'

const maximumInLine = 5
const size = 100
const gap = 10

const default_images = [
  { id: 0, position: { x: 0, y: 0 } },
  { id: 1, position: { x: 0, y: 0 } },
  { id: 2, position: { x: 0, y: 0 } },
  { id: 3, position: { x: 0, y: 0 } },
  { id: 4, position: { x: 0, y: 0 } },
  { id: 5, position: { x: 0, y: 0 } },
  { id: 6, position: { x: 0, y: 0 } },
  { id: 7, position: { x: 0, y: 0 } },
  { id: 8, position: { x: 0, y: 0 } },
  { id: 9, position: { x: 0, y: 0 } },
  { id: 10, position: { x: 0, y: 0 } },
  { id: 11, position: { x: 0, y: 0 } },
  { id: 12, position: { x: 0, y: 0 } },
  { id: 13, position: { x: 0, y: 0 } },
  { id: 14, position: { x: 0, y: 0 } },
  { id: 15, position: { x: 0, y: 0 } },
  { id: 16, position: { x: 0, y: 0 } },
  { id: 17, position: { x: 0, y: 0 } },
  { id: 18, position: { x: 0, y: 0 } },
  { id: 19, position: { x: 0, y: 0 } },
].map((image, index) => {
  image.id = index
  const row = Math.floor(index / maximumInLine)
  const column = index % maximumInLine
  return {
    ...image,
    position: {
      x: column * (size + gap),
      y: row * (size + gap),
    },
  }
})

export default function Profile() {
  const [images, setImages] = useState(default_images)

  useLayoutEffect(() => {
    console.log(images)
  }, [images])

  const handleClickImage = (image: typeof default_images[0]) => {
    const explosionRadius = 100

    setImages(prevImages =>
      prevImages.map((item) => {
        const distance = Math.sqrt(
          (item.position.x - image.position.x) ** 2 + (item.position.y - image.position.y) ** 2,
        )

        if (distance <= explosionRadius)
          return { ...item, position: { x: 50, y: 50 } }

        return item
      }),
    )
  }

  return (
    <div
      className="
        w-screen h-screen overflow-hidden
        flex flex-col gap-10
        px-12.5vw py-18
        box-border
        text-[#3E4857]
      "
      style={{ background: pageColor.profile }}
    >
      <div className="flex flex-row w-full ">
        <div
          className="transition-text font-extrabold tracking-2"
          style={{
            fontSize: 'calc(calc(16px + 0.2vw) * 3.2)',
          }}
        >
          我們
        </div>
      </div>

      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              width: size,
              height: size,
              transform: `translate3d(${image.position.x}px, ${image.position.y}px, 0)`,
              willChange: 'transform',
              background: getColorFromPalettes(),
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            onClick={() => {
              handleClickImage(image)
            }}
          >
            {image.id}
            <br></br>
            {image.position.x} - {image.position.y}
          </div>
        ))}
      </div>
    </div>
  )
}
