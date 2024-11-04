import React from 'react'

import PageHeader from "@/components/backoffice/PageHeader"
import { Download, Search, Trash2 } from 'lucide-react'

export default function page() {
  return (
    <div>
      {/*Header */}
      <PageHeader heading="Categories" linkTitle="Add Categories" href="/dashboard/categories/new" />

      {/*Table  Action*/}
      {/*Export // saerch // Bulk delete*/}
      <div className="flex justify-between py-6 px-8 bg-slate-700 rounded-lg items-center gap-8">
        <button><Download/></button>
        <div className="pb-4 flex-grow  ">
          <label htmlFor="table-search" className="sr-only">Search</label>
          <div className="relative ">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </div>
            <input type="text" id="table-search" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
          </div>
        </div>
        <button><Trash2 /></button>
      </div>

    </div>
  )
}
