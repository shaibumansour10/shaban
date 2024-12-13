import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import HeroCarousel from "./HeroCarousel";
import Advert from "../../public/Advert.gif"
import { CircleDollarSign, FolderSync, HelpCircle } from 'lucide-react';

export default function Hero() {
  const categories = [
    {}, {}, {},
    {}, {}, {},
    {}, {}, {},
  ];

  return (
    <div className='grid grid-cols-12 gap-8 mb-6'>
      {/* Sidebar */}
      <div className="col-span-12 sm:col-span-3 bg-white border border-gray-300 rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700 hidden sm:block">
        <h2 className='bg-slate-100 py-4 px-3 dark:bg-slate-500 font-semibold border-b border-gray-300'>Shop by Categories</h2>
        <div className="flex flex-col py-4 px-3 h-[300px] overflow-y-auto gap-3">
          {categories.map((category, i) => {
            return (
              <Link key={i} href="#" className='flex items-center gap-3 hover:bg-slate-300 duration-500 transition-all'>
                <Image
                  src='/love.webp'
                  alt='user profile'
                  width={556}
                  height={556}
                  className='w-10 h-10 rounded-full object-cover border-2 border-lime-400'
                />
                <span className='text-sm'>Vegetable</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Hero Carousel */}
      <div className="col-span-12 sm:col-span-7 bg-blue-700 h-[384px] rounded-md">
        <HeroCarousel />
      </div>

      {/* Right Sidebar */}
      <div className="col-span-12 sm:col-span-2 bg-slate-100 dark:bg-slate-700 p-1 rounded-lg hidden sm:block">
        <Link href="#" className="flex items-center space-x-1 mb-3">
          <HelpCircle className='shrink-0 w-5 h-5 dark:text-lime-400 text-slate-900' />
          <div className="flex flex-col">
            <h2 className='uppercase text-sm'>Help center</h2>
            <p className='text-[0.6rem]'>Guide to Customer Care</p>
          </div>
        </Link>
        <Link href="#" className="flex items-center space-x-1 mb-3">
          <FolderSync className='shrink-0 w-5 h-5 dark:text-lime-400 text-slate-900' />
          <div className="flex flex-col">
            <h2 className='uppercase text-sm'>Easy Return</h2>
            <p className='text-[0.6rem]'>Quick Return</p>
          </div>
        </Link>
        <Link href="/register-farmer" className="flex items-center space-x-1 mb-6">
          <CircleDollarSign className='shrink-0 w-5 h-5 dark:text-lime-400 text-slate-900' />
          <div className="flex flex-col">
            <h2 className='uppercase text-sm'>Sell on Mansour</h2>
            <p className='text-[0.6rem]'>Millions of Visitors</p>
          </div>
        </Link>
        <Image src={Advert} alt='' className='w-full rounded-lg px-1 mt-10' />
      </div>
    </div>
  );
}

// import React from 'react'
// import Image from 'next/image'
// import Link from "next/link";
// import HeroCarousel from "./HeroCarousel";
// import Advert from "../../public/Advert.gif"
// import { CircleDollarSign, FolderSync, HelpCircle } from 'lucide-react';
// export default function Hero() {
//   const categories=[
//     {},{},{},
//     {},{},{},
//     {},{},{},

//   ];
//   return (
//     <div className='grid grid-cols-12 gap-8 mb-6'>
//       <div className="col-span-3 bg-white border border-gray-300 rounded-lg  overflow-hidden dark:bg-gray-800 dark:border-gray-700 hidden sm:block">
//       <h2 className='bg-slate-100 py-4 px-3 dark:bg-slate-500 font-semibold border-b border-gray-300 '>Shop by Categories</h2>
//        <div className="flex flex-col py-4 px-3 h-[300px] overflow-y-auto gap-3">
//        {
//         categories.map((category ,i) =>{
//           return(
//             <Link key={i} href="#" className='flex items-center gap-3 hover:bg-slate-300  duration-500 transition-all'>
//             <Image src='/love.webp' alt='user profile' width={556} height={556} className='w-10 h-10 rounded-full object-cover border-2 border-lime-400' />
//             <span className='text-sm'>Vagetable</span>
//               </Link>
//           )
//         })
//        }
    
//        </div>
//       </div>
//       <div className="col-span-full sm:col-span-7 bg-blue-700 h-[384px] rounded-md">
//      <HeroCarousel/>
//       </div>
//       <div className="col-span-2 bg-slate-100 dark:bg-slate-700 p-1 rounded-lg hidden sm:block">
//         <Link href="#" className="flex items-center space-x-1 mb-3">
//           <HelpCircle className='shrink-0 w-5 h-5 dark:text-lime-400 text-slate-900'/>
//           <div className="flex flex-col">
//             <h2 className='uppercase text-sm'>Help center</h2>
//             <p className='text-[0.6rem]'>Guide to Customer Care</p>
//           </div>
//         </Link>
//         <Link href="#" className="flex items-center space-x-1 mb-3">
//           <FolderSync className='shrink-0 w-5 h-5 dark:text-lime-400 text-slate-900'/>
//           <div className="flex flex-col">
//             <h2 className='uppercase text-sm'>Easy Return </h2>
//             <p className='text-[0.6rem]'>Quick Return</p>
//           </div>
//         </Link>
//         <Link href="/register-farmer" className="flex items-center space-x-1 mb-6">
//           <CircleDollarSign className='shrink-0 w-5 h-5 dark:text-lime-400 text-slate-900'/>
//           <div className="flex flex-col">
//             <h2 className='uppercase text-sm'>Sell on Mansour</h2>
//             <p className='text-[0.6rem]'>Million of Vistors</p>
//           </div>
//         </Link>
//         <Image src={Advert} alt='' className='w-full rounded-lg px-1 mt-10'/>
//       </div>
//     </div>
//   )
// }
