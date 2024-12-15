import Link from 'next/link'
import React from 'react'
import CategoryCarousel from "./CategoryCarousel"

export default async function CategoryList({category}) {
  return (
    <div className='bg-white border border-gray-300 rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700 '>
      <div className='flex justify-between items-center bg-slate-100 py-4 px-3 dark:bg-slate-500 font-semibold border-b border-gray-300'>
        <h2>{category.title}</h2>
        <Link href="#" className='inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-lime-700 rounded-lg border border-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800'>See All</Link>
       
        </div>
        <div className="bg-white p-4">
        <CategoryCarousel products={category.products}/>
        </div>
    </div>
  )
}

