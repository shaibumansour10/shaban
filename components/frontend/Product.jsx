"use client"
import { BaggageClaim, Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import addToCart from "@/redux/slices/cartSlice"
import React from 'react'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'

export default function Product({product}) {
    const dispatch =useDispatch()
    function handleAddToCart(){
        //Dishpatch the reducer
        dispatch(addToCart(product))
        toast.success("Item added successfully")
    }
  return (
    <div key={i}  alt="shaibu" className='rounded-lg mr-3 border bg-white dark:bg-slate-900 shadow overflow-hidden'>
    <Link href={`/products/${product.slug}`}>
    <Image src={product.imageUrl} width={556} height={556} className='w-full h-48 object-cover rounded-lg' alt={product.title}/>
    </Link>
    <div className="px-4">
  
    <Link href={`/products/${product.slug}`}>
    <h2 className='text-center dark:text-white text-black bg-slate-600 dark:bg-black rounded-md my-2 font-bold'>{product.title}</h2>
    </Link>
    <div className="flex items-center dark:text-white text-black justify-between gap-2 text-sm pb-3">
      <p>Tsh{product.salePrice}</p>
      <button className='flex items-center space-x-1 bg-lime-300 px-4 py-2 rounded-md text-white'>
        <p><Minus/></p>
        <BaggageClaim/>
        <p><Plus/></p>
      </button>
    </div>
    </div>
      </div>
  )
}
