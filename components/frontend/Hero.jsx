import React from 'react'
import Image from 'next/image'
import Link from "next/link";
// import HeroCarousel from "./HeroCarousel"
export default function Hero() {
  const categories=[
    {},{},{},
    {},{},{},
    {},{},{},

  ]
  return (
    <div className='flex gap-8'>
      <div className="w-1/3  bg-white border border-gray-300 rounded-lg  overflow-hidden dark:bg-gray-800 dark:border-gray-700 ">
      <h2 className='bg-slate-100 py-4 px-3 dark:bg-slate-500 font-semibold border-b border-gray-300 '>Shop by Categories</h2>
       <div className="flex flex-col py-4 px-3 h-[300px] overflow-y-auto gap-3">
       {
        categories.map((category ,i) =>{
          return(
            <Link key={i} href="#" className='flex items-center gap-3 hover:bg-slate-300  duration-500 transition-all'>
            <Image src='/profile.jpg' alt='user profile' width={556} height={556} className='w-12 h-12 rounded-full object-cover border-2 border-lime-400' />
            <span className='text-sm'>Vagetable</span>
              </Link>
          )
        })
       }
    
       </div>
      </div>
      <div className="w-2/3 bg-blue-700 rounded-md">
     {/* <HeroCarousel/> */}
      </div>
    </div>
  )
}
