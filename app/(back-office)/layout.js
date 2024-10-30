

import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar"
import React from 'react'
export default function layout({ children }) {

  return (
    <div className='flex gap-2'>
      {/*sidebar*/}
      <Sidebar />
      {/*main body*/}
      <div className='w-full'>
        {/*Header*/}
        <Navbar />
        {/* main content*/}
        <main className="ml-60 p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 min-h-screen mt-16">
          {children}
        </main>
      </div>

    </div>
  );
}
