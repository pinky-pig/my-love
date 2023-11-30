export default function Footer() {
  return (
    <div
      className="
        skew-y-[-4deg]
        flex flex-col
        w-full my-8vw
        text-center pointer-events-none
        gap-20px
        hover:animate-[squiggly-anim-a_0.8s_infinite]
      "
    >
      <span
        className="text-white italic font-800 tracking-2px pointer-events-auto"
        style={{
          fontSize: 'calc(1rem + 0.3vw)',
        }}
      >
        Arvin 💕 Zoe
      </span>

      <span
        className="text-white font-800 pointer-events-auto"
        style={{
          fontSize: 'calc(calc(1rem + 0.3vw)*2.4)',
        }}
      >
        王小博爱春宝
      </span>
    </div>
  )
}
