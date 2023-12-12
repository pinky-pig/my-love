import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export interface IImage {
  src: string
  alt?: string
  className?: string
}
export default function MyImage(
  props: IImage,
) {
  return <LazyLoadImage
    alt={props.alt}
    effect="blur"
    className={
      `${props.className}`
    }
    src={props.src}
  />
}
