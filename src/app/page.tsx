'use client'
import { type Resource, Resources } from '~/components/Resources'
import Background from '~/components/ui/Background'

const resources: Resource[] = [
  {
    title: 'Docs',
    href: 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    description: 'Find in-depth information about Next.js features and API.',
  },
  {
    title: 'Learn',
    href: 'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
    description: 'Learn about Next.js in an interactive course with quizzes!',
  },
  {
    title: 'Templates',
    href: 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    description: 'Explore the Next.js 13 playground.',
  },
  {
    title: 'Deploy',
    href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    description:
      'Instantly deploy your Next.js site to a shareable URL with Vercel.',
  },
]

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <div className='relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[""] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[""] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]'>
        <h1 className="font-bold text-6xl font-mono">Next.js</h1>
      </div>
      
      <Background></Background>

      {/* <Resources resources={resources} /> */}
    </main>
  )
}
