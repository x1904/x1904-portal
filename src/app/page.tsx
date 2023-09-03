'use client'
import Image from 'next/image'
import Jobs from './jobs'
import Job from './job'
import { useEffect, useState } from 'react';
import './globals.css'
import Link from 'next/link';
import CircularProgressWithLabel from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import Project from './project';

const texts : string[] = [
  "In development",
  "Come back in few days",
  "You're not going to stay here waiting",
  "Go for a walk"
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:dark:bg-zinc-800/30">
          ...GM&nbsp;
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        < Link href="/about">
            <Image
            style={{border:"1px solid grey",borderRadius:'10em'}}
              src="/avatar.png"
              alt="DeMesh"
              className="dark:invert"
              width={150}
              height={24}
              priority
            />
            <span className='block text-center w-full'>By:DeMesh</span>
          </Link>
          
        
        </div>
      </div>

      
        
      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full  after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 before:lg:h-[360px]"> */}
        <Project title="mesh" description="create a decentralize space" link="https://mesh.demesh.xyz" logo="/mesh-icon.png"/>
      {/* </div> */}

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4">
      </div>
    </main>
  )
}
