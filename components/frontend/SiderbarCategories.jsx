import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { getData } from '@/lib/getData';

// export default async function SiderbarCategories() {
//     const categories = await getData('categories')
//   return (
//     <div className="col-span-12 sm:col-span-3 bg-white border border-gray-300 rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700 hidden sm:block">
//     <h2 className='bg-slate-100 py-4 px-3 dark:bg-slate-500 font-semibold border-b border-gray-300'>Shop by Categories</h2>
//     <div className="flex flex-col py-4 px-3 h-[300px] overflow-y-auto gap-3">
//       {categories.map((category, i) => {
//         return (
//           <Link key={i} href="#" className='flex items-center gap-3 hover:bg-slate-300 duration-500 transition-all'>
//             <Image
//               src={category.imageUrl}
//               alt={category.title}
//               width={556}
//               height={556}
//               className='w-10 h-10 rounded-full object-cover border-2 border-lime-400'
//             />
//             <span className='text-sm'>{category.title}</span>
//           </Link>
//         );
//       })}
//     </div>
//   </div>

//   )
// }
export default async function SiderbarCategories() {
    const categories = await getData('categories') || []; // Fallback to empty array if null or undefined
    
    return (
      <div className="col-span-12 sm:col-span-3 bg-white border border-gray-300 rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700 hidden sm:block">
        <h2 className='bg-slate-100 py-4 px-3 dark:bg-slate-500 font-semibold border-b border-gray-300'>Shop by Categories ({categories.length>0? (categories.length):(0)})</h2>
        <div className="flex flex-col py-4 px-3 h-[300px] overflow-y-auto gap-3">
          {categories.length > 0 ? (
            categories.map((category, i) => (
              <Link key={i} href="#" className='flex items-center gap-3 hover:bg-slate-300 duration-500 transition-all'>
                <Image
                  src={category.imageUrl}
                  alt={category.title}
                  width={556}
                  height={556}
                  className='w-10 h-10 rounded-full object-cover border-2 border-lime-400'
                />
                <span className='text-sm'>{category.title}</span>
              </Link>
            ))
          ) : (
            <p>No categories available</p> // Show message if categories is empty
          )}
        </div>
      </div>
    );
}
