"use client"
import React from 'react'
import Image from 'next/image'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useDispatch } from 'react-redux'
import {decrementQty, incrementQty, removeFromCart } from '@/redux/slices/cartSlice'

export default function CartProduct({cartItem}) {
  const dispatch=useDispatch();
  function handleCartItemDelete(cartId){
//dispatch the removeFromCart reducer
dispatch(removeFromCart(cartId))
  }

  function handleQtyItemIncrement(cartId){
    //dispatch the removeFromCart reducer
    dispatch(incrementQty(cartId))
      }

      function handleQtyItemDecrement(cartId){
        //dispatch the removeFromCart reducer
        dispatch(decrementQty(cartId))
          }
  return (
    <div className="grid grid-cols-12 mt-4 ml-4 items-center justify-between pb-3 font-semibold border-b border-gray-500">
    <div className="flex col-span-6 ">
<Image src={cartItem.imageUrl} alt={cartItem.title} height={556} width={556} className='w-14 h-14 rounded-full object-cover border border-lime-800'/>
     <div className="flex flex-col px-3">
      <h2>{cartItem.title}</h2>
     
     </div>
    </div>
    <div className="col-span-3">
    <div className="inline-flex items-center border rounded-full overflow-hidden">
{/* Decrement Button */}
<button
onClick={()=>handleQtyItemDecrement(cartItem.id)}
className="px-4 py-2 border-r hover:bg-gray-100">
<Minus/>
</button>

{/* Counter Value */}
<span className="px-6 py-2 text-center">{cartItem.qty}</span>

{/* Increment Button */}
<button 
onClick={()=>handleQtyItemIncrement(cartItem.id)}
className="px-4 py-2 border-l hover:bg-gray-100">
<Plus/>
</button>
</div>


    </div>
    <div className=" ml-4 col-span-3">
      <div className="flex items-center justify-between">
        <h1>Tsh{cartItem.salePrice}</h1>
       <button onClick={()=>handleCartItemDelete(cartItem.id)}> 
        <Trash2 className='text-red-500'/></button>
      </div>
    </div>
   </div>
  )
}
