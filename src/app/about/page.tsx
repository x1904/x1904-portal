'use client'
import Image from 'next/image'
import Jobs from '../jobs'
import Skills from '../skills'
import { useEffect } from 'react';
import '../globals.css'
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    // Vérifier si le navigateur prend en charge le mode sombre
    // if (
    //   window.matchMedia &&
    //   window.matchMedia('(prefers-color-scheme: dark)').matches
    // ) {
      // Activer le mode sombre par défaut
      document.documentElement.classList.add('dark-mode');
    // }
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:dark:bg-zinc-800/30">
          ...GM&nbsp;
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        < Link href="/">By{' '}
            <Image
            style={{border:"1px solid grey",borderRadius:'5em'}}
              src="/avatar.jpg"
              alt="PFP"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>
      </div>

      <Jobs />
      <Skills />
    </main>
  )
}
