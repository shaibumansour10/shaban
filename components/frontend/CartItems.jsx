import React from 'react'
import CartProduct from "@/components/frontend/CartProduct"
import EmptyCart from "@/components/frontend/EmptyCart"
export default function CartItems({cartItems}) {
  return (
    <div className="col-span-8 ">
    {cartItems.length>0 && 
    <>
      <h2 className='ml-2 mb-4 text-2xl '>Your Cart</h2>
    <div className="grid grid-cols-12 ml-4 items-center justify-between pb-3 font-semibold border-b border-gray-500">
     <h2 className="uppercase col-span-6">product</h2>
     <h2 className="uppercase col-span-3">Quantity</h2>
     <h2 className="uppercase col-span-3 ml-4">price</h2>
    </div>
    </>}
    {/* cart 1 */}
   <div className="">
  {cartItems.length>0 ? cartItems.map((item,i)=>{
   return  <CartProduct cartItem={item} key={i} />
  }):(
   <EmptyCart/>
  )}
   </div>
   
    {/* COUPON FORM */}
    <div className="flex items-center justify-between  py-5 gap-5">
    <input type="text" id="voice-search" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Coupon" />
    <button href="#" className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'>
  <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0'> Apply Coupon</span>
   </button>
    </div>
    
   </div>
   
  )
}
