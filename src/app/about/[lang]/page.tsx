'use client'
import Image from 'next/image'
import Jobs from '../../jobs'
import About from '../../about'
import Skills from '../../skills'
import Formations from '../../formations'
import aboutData from '../../../../data/about.json';
import AboutsInterface, {AboutInterface} from '../../aboutinterface';


import { useEffect } from 'react';
// import { useRouter } from 'next/router';
import '../../globals.css';
import Link from 'next/link';

export default function Home({params: {lang}}) {
  // const router = useRouter()
  // useEffect(() => {
  //   // Vérifier si le navigateur prend en charge le mode sombre
  //   // if (
  //   //   window.matchMedia &&
  //   //   window.matchMedia('(prefers-color-scheme: dark)').matches
  //   // ) {
  //     // Activer le mode sombre par défaut
  //     document.documentElement.classList.add('dark-mode');
  //   // }
  // }, []);
  const data: AboutsInterface = aboutData
  const dataLang: AboutInterface = data.abouts.filter((e)=> e.lang == lang)[0]
  
  
  return (
    <main className="flex min-h-screen font-mono flex-col items-center justify-between mb-48 lg:my-4 px-4 md:px-18 lg:px-24">
      <div className="mt-16 lg:mt-0 z-10 w-full items-center justify-between text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:dark:bg-zinc-800/30">
          ...GM&nbsp;
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
        < Link href="/">
          <Image
              style={{border:"1px solid grey",borderRadius:'10em'}}
                src="/avatar.png"
                alt="DeMesh"
                className="dark:invert"
                width={150}
                height={24}
                priority
              />
              <span className='block text-center w-full text-gray-800 lg:text-gray-200'>By:DeMesh</span>
          </Link>
        </div>
      </div>
      <About {...dataLang}/>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4">
      </div>
    </main>
  )
}
