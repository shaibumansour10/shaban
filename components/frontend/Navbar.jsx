import React from 'react'
import Link from "next/link";
import ThemeSwitcherBtn from "@/components/ThemeSwitcherBtn"
import logo from "../../public/logo.png";
import CartCount from "./CartCount"
import Image from 'next/image'
import SearchForm from "@/components/frontend/SearchForm"
import HelpModal from "@/components/frontend/HelpModal"
import { HelpCircle, User,ShoppingCart, CarFront } from 'lucide-react';
export default function Navbar() {
  return (
    <div className=" bg-slate-200 dark:bg-slate-950  ">
      <div className='flex items-center justify-between py-1  mx-auto max-w-6xl'>
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
<CartCount/>
  
 
</div>
      </div>
    </div>
  )
    
  
}
