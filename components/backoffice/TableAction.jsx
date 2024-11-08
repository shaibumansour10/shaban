import React from 'react'
import { Download, Search, Trash2 } from 'lucide-react'
export default function TableAction() {
  return (
    <div className="flex justify-between py-6 px-12 dark:bg-slate-700 bg-slate-200 rounded-lg items-center gap-8 mt-8">
    <button className='relative inline-flex items-center justify-center py-3 px-4 space-x-3 text-base font-medium  rounded-lg group bg-gradient-to-br from-green-600 to-lime-500 group-hover:from-green-600 group-hover:to-lime-500  dark:text-white focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800
'><Download/>
    <span>Export</span>
    </button>
    <div className="pb-4 flex-grow  ">
      <label htmlFor="table-search" className="sr-only">Search</label>
      <div className="relative mt-1">
        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search className='w-4 h-4 text-gray-500 dark:text-gray-400' />
        </div>
        <input type="text" id="table-search" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500 w-full" placeholder="Search for items" />
      </div>
    </div>
    <button className='relative inline-flex items-center justify-center space-x-3 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
      <Trash2 />
      <span>Bulk Delete</span>
      </button>
  </div>
  )
}
