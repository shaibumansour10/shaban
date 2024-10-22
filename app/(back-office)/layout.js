import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";
import React from 'react'
export default function layout({ children }) {

  return (
    <div className='flex'>
      {/*sid*/}
      <sidebar />
      {/*main body*/}
      <div className='flex w-full'>
        {/*Header*/}
        <Navbar />
        {/* main content*/}
        <main>
          {children}
        </main>
      </div>

    </div>
  );
}
