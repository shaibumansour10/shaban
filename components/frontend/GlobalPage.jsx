"use client"
import React from 'react';
import Earth from '@/components/frontend/Globe';
import {Sparkles} from '@/components/frontend/Sparkles';
import Link from "next/link"

export default function GlobalPage() {
  return (
    
      <div className='h-screen overflow-hidden bg-black text-white'>
        <article className='grid gap-4 text-center relative z-10 pt-10'>
         
          <div className="inline-flex rounded-md shadow-sm" role="group">
  <Link href="/register-farmer" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
  Become a Farmer
  </Link>
  <Link href="/registerForm" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
  Become a user
  </Link>
  <Link href="/dashboard" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
  Login as Admin
  </Link>
          </div>
          <h2 className='text-4xl  font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter'>
          welcome mansour Ecommerce
           
          </h2>
          <Earth />
        </article>
        <div className='relative -mt-32 h-80 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%] after:border-t after:border-[#163474] after:bg-[#08132b]'>
          <Sparkles
            density={800}
            speed={1.2}
            size={1.2}
            direction='top'
            opacitySpeed={2}
            color='#32A7FF'
            className='absolute inset-x-0 bottom-0 h-full w-full '
          />
        </div>
      </div>
    
  );
}


// npm install @tsparticles/react @tsparticles/slim