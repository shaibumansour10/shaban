import React from 'react'
import BreadCrumb from "@/components/frontend/BreadCrumb"
import Image from 'next/image'
import { Minus,Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'

export default function Cart() {
  return (
    <div>
     <BreadCrumb/>
     <div className="flex flex-col text-sm md:grid md:grid-cols-12 gap-5">
      <div className="col-span-8">
       <h2 className='ml-2 mb-4 text-2xl '>Your Cart</h2>
       <div className="grid grid-cols-12 ml-4 items-center justify-between pb-3 font-semibold border-b border-gray-500">
        <h2 className="uppercase col-span-6">product</h2>
        <h2 className="uppercase col-span-3">Quantity</h2>
        <h2 className="uppercase col-span-3 ml-4">price</h2>
       </div>
       <div className="grid grid-cols-12 mt-4 ml-4 items-center justify-between pb-3 font-semibold border-b border-gray-500">
        <div className="flex col-span-6 ">
   <Image src="/banners/1.jpg" alt='image' height={556} width={556} className='w-14 h-14 rounded-full object-cover border border-lime-800'/>
         <div className="flex flex-col px-3">
          <h2>Apple Watch Series 7 -44mm</h2>
          <small>Golden</small>
         </div>
        </div>
        <div className="col-span-3">
        <div className="inline-flex items-center border rounded-full overflow-hidden">
  {/* Decrement Button */}
  <button className="px-4 py-2 border-r hover:bg-gray-100">
    &minus;
  </button>

  {/* Counter Value */}
  <span className="px-6 py-2 text-center">1</span>

  {/* Increment Button */}
  <button className="px-4 py-2 border-l hover:bg-gray-100">
    &#43;
  </button>
</div>


        </div>
        <div className=" ml-4 col-span-3">
          <div className="flex items-center justify-between">
            <h1>Ths:5000</h1>
           <button> <Trash2 className='text-red-500'/></button>
          </div>
        </div>
       </div>
       <div className="grid grid-cols-12 mt-4 ml-4 items-center justify-between pb-3 font-semibold border-b border-gray-500">
        <div className="flex col-span-6 ">
   <Image src="/banners/1.jpg" alt='image' height={556} width={556} className='w-14 h-14 rounded-full object-cover border border-lime-800'/>
         <div className="flex flex-col px-3">
          <h2>Apple Watch Series 7 -44mm</h2>
          <small>Golden</small>
         </div>
        </div>
        <div className="col-span-3">
        <div className="inline-flex items-center border rounded-full overflow-hidden">
  {/* Decrement Button */}
  <button className="px-4 py-2 border-r hover:bg-gray-100">
    &minus;
  </button>

  {/* Counter Value */}
  <span className="px-6 py-2 text-center">1</span>

  {/* Increment Button */}
  <button className="px-4 py-2 border-l hover:bg-gray-100">
    &#43;
  </button>
</div>


        </div>
        <div className=" ml-4 col-span-3">
          <div className="flex items-center justify-between">
            <h1>Ths:5000</h1>
           <button> <Trash2 className='text-red-500'/></button>
          </div>
        </div>
       </div>
       {/* COUPON FORM */}
       <div className="flex items-center justify-between py-5 gap-5">
       <input type="text" id="voice-search" classNmae="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Coupon" />
       <button href="#" className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'>
     <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'> Apply Coupon</span>
      </button>
       </div>
       
      </div>
      
      <div className="col-span-4 shadow-lg bg-white border border-gray-300 rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700 hidden sm:block mt-6">
      <h2 className="bg-slate-100 py-4 px-3 dark:bg-slate-500 font-semibold border-b border-gray-300 text-2xl">Cart total</h2> 
      <div className="flex items-center justify-between px-3 border-b border-gray-500 py-4">
        <span>Subtotal</span>
        <span className='font-semibold'>Tsh:40000/=</span>
      </div>
      <div className="flex items-center justify-between px-3 border-b border-gray-500 py-4">
        <span>Tax</span>
        <span className='font-semibold'>Ths:0/=</span>
      </div>
     <div className="flex flex-col border-b border-gray-500 py-4">
     <div className="flex items-center justify-between px-3 py-4">
        <span>Shopping in Us</span>
        <span className='font-semibold'>Ths:500/=</span>
      </div>
      <p className='px-6 text-sm'>we charging only for delivery in us for itema more than 2kg</p>
     </div>
     <div className="flex items-center justify-between px-3 border-b border-gray-500 py-4">
        <span>Total</span>
        <span className='font-semibold'>Ths:100000/=</span>
      </div>
     <div className="flex items-center justify-center py-5">
     <Link href="#" className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'>
     <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'> Contunue to Payments</span>
      </Link>
     </div>
      </div>
     </div>
    </div>
  )
}
