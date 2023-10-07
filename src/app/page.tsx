'use client'
import Background from '~/components/ui/Background'
import * as React from 'react'


export default function Home() {

  const [fillColor, setFillColor] = React.useState('#BBD6AA90')
  setTimeout(() => {
    setFillColor('#EADF5B')
  }, 2000);

  React.useEffect(() => {
    console.log(fillColor);
  }, [fillColor]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <div className='relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[""] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[""] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]'>
        <h1 className="font-bold text-6xl font-mono">Next.js</h1>
      </div>

      <Background fillColor={fillColor}></Background>

    </main>
  )
}
