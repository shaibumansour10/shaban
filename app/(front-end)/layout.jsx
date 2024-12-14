import Navbar from "@/components/frontend/Navbar"
import Footer from "@/components/frontend/Footer"
import React from 'react'

export default function Layout({ children }) {
  return (
    <div>
      
        <Navbar/>
        <div className=" mx-auto max-w-7xl py-6 px-2 lg:px-0">
        {children}
        </div>
     <Footer/>
    </div>
  )
}

