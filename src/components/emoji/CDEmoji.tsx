import type { SVGProps } from 'react'

export function CDEmoji(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
      <path
        fill="currentColor"
        d="M18.17 1.92a16 16 0 1 0 16 16a16 16 0 0 0-16-16ZM26.23 18h1.54a9.61 9.61 0 0 1-9.6 9.53H18V26h.17a8.07 8.07 0 0 0 8.06-8ZM6.05 18h-1.6v-.08A13.72 13.72 0 0 1 18 4.21v1.6A12.13 12.13 0 0 0 6.05 17.92Zm4.05 0H8.56v-.08A9.61 9.61 0 0 1 18 8.32v1.54a8.07 8.07 0 0 0-7.9 8.06Zm4.32-.08a3.75 3.75 0 1 1 3.75 3.75a3.75 3.75 0 0 1-3.75-3.75Zm3.75 13.71H18V30h.17a12.13 12.13 0 0 0 12.11-12h1.6a13.73 13.73 0 0 1-13.71 13.63Z"
        className="clr-i-solid clr-i-solid-path-1"
      ></path>
      <path fill="none" d="M0 0h36v36H0z"></path>
    </svg>
  )
}
