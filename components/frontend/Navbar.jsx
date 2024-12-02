import React from 'react'
import Link from "next/link";
import ThemeSwitcherBtn from "@/components/ThemeSwitcherBtn"
import logo from "../../public/logo.png";
import Image from 'next/image'
import SearchForm from "@/components/frontend/SearchForm"
import HelpModal from "@/components/frontend/HelpModal"
import { HelpCircle, User,ShoppingCart, CarFront } from 'lucide-react';
export default function Navbar() {
  return (
    <div className=" bg-slate-200 dark:bg-slate-950 ">
      <div className='flex items-center justify-between py-3  mx-auto '>
      <Link className="" href="/">
<Image src={logo} alt="mansour" className="w-24"/>
</Link>
<div className="flex-grow">
<SearchForm/> 

</div>
<div className="flex gap-8">
<ThemeSwitcherBtn />
<Link href="/login" className="flex items-center space-x-1 text-green-800 dark:text-green-600">
  <User/>
  <span>Login</span>
  </Link>  

  <HelpModal/>
<Link href="/cart" className="relative inline-flex iterms-center p-3 text-sm font-medium text-center text-green-600 bg-transparent rounded-lg">
  <ShoppingCart className="text-lime-700 dark:text-lime-500"/>
  <span className="sr-only">Cart</span>
  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6 dark:border-gray-900">
    20
  </div>
  </Link> 
  
 
</div>
      </div>
    </div>
  )
    
  
}
