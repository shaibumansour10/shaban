"use client"
import React from 'react'
import CartItems from "@/components/frontend/CartItems"
import BreadCrumb from "@/components/frontend/BreadCrumb"
import CartSubTotalCart from "@/components/frontend/CartSubTotalCart"
import { useSelector } from 'react-redux'

export default function Cart() {
  const cartItems =useSelector((store)=>store.cart)
  const subTotal =cartItems.reduce((acc,currentItem)=>{
   return acc +(currentItem.salePrice*currentItem.Qty)
  },0).toFixed(2)??
  console.log(cartItems)
  return (
    <div>
     <BreadCrumb/>
     <div className="flex flex-col text-sm md:grid md:grid-cols-12 gap-5">
     <CartItems cartItems={cartItems}/>
      <CartSubTotalCart subTotal={subTotal}/>
     </div>
    </div>
  )
}
