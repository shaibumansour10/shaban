import Link from 'next/link'
import React from 'react'

export default function CartSubTotalCart({subTotal}) {
  const shipping=10.00
  const tax=0.00
  const totalPrice =("")
  return (
    <div className="col-span-4  shadow-lg bg-white border border-gray-300 rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700 mt-6">
      <h2 className="bg-slate-100 py-4 px-3 dark:bg-slate-500 font-semibold border-b border-gray-300 text-2xl">Cart total</h2> 
      <div className="flex items-center justify-between px-3 border-b border-gray-500 py-4">
        <span>Subtotal</span>
        <span className='font-semibold'>Tsh:{subTotal}/=</span>
      </div>
      <div className="flex items-center justify-between px-3 border-b border-gray-500 py-4">
        <span>Tax</span>
        <span className='font-semibold'>Ths:{tax}/=</span>
      </div>
     <div className="flex flex-col border-b border-gray-500 py-4">
     <div className="flex items-center justify-between px-3 py-4">
        <span>Shopping in Us</span>
        <span className='font-semibold'>Ths:{shipping}/=</span>
      </div>
      <p className='px-6 text-sm'>we charging only for delivery in us for itema more than 2kg</p>
     </div>
     <div className="flex items-center justify-between px-3 border-b border-gray-500 py-4">
        <span>Total</span>
        <span className='font-semibold'>Ths:{totalPrice}/=</span>
      </div>
     <div className="flex items-center justify-center py-5">
     <Link href="#" className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'>
     <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'> Contunue to Payments</span>
      </Link>
     </div>
      </div>
  )
}
