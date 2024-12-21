import React from 'react'
import BreadCrumb from '../../../../components/frontend/BreadCrumb'
import {getData} from "@/lib/getData"
import Image from "next/image"
import { BaggageClaim, Minus, Plus, Send, Share2, Tag } from 'lucide-react'
import CategoryCarousel from "@/components/frontend/CategoryCarousel"
import Link from 'next/link'
export default async function productDetailPage({params:{slug}}) {
  const category= await getData("categories")
  return (
    <div>
     
      <BreadCrumb/>
      {/* <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <Image src="/7.jpeg" alt="mnasour" width={556} height={566} className='w-full'/>
        </div>
        <div className="col-span-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className='text-xl lg:text-3xl fonts-semibold'>banana products</h2>
           <button> <Share2/></button>
          </div>
        <div className="flex flex-col border-b border-gray-500">
        <p className='py-2 '>Show the location of the current page in a hierarchical structure using the Tailwind CSS breadcrumb components

The breadcrumb component is an important part of any website or application that can be used to show the current location of a page in a hierarchical structure of pages.

Flowbite includes two styles of breadcrumb elements, one that has a transparent background and a few more that come with a background in different colors.</p>
       <div className="flex items-center gap-8 mb-4">
       <p>SKU:121323434</p>
       <p className='bg-lime-300 px-4 py-1.5 rounded-full ml-2 text-slate-900'><b>Stock:</b> 230</p>
       </div>
        </div>
          <div className="flex  justify-between items-center gap-4 pt-8 pb-4 border-b border-gray-500">
            <div className="flex items-center gap-4 ">
              <h4 className='text-2xl'>Tsh 30000</h4>
            <del className='text-red-400'>Ths 45000</del>
            </div>
            <p className='flex items-center gap-1'> 
              <Tag className='w-5 h-5 text-lime-500 me-2'/>
            <span>save 50% rigth now</span>
            </p>
          </div>
          <div className="flex items-center justify-between mt-5 mb-5">
            <div className="py-2 px-3 space-x-4 rounded-xl border border-gray-400 flex items-center">
             <button className='border-r border-gray-500 py-2 px-4'>
              <Minus/>
              </button>
              <p className='flex-grow'>1</p>
              <button className='border-l border-gray-500 py-2 px-4'>
                <Plus/>
                </button> 
            </div>
            <button className='flex items-center space-x-1 bg-lime-300 px-4 py-2 rounded-md text-white'>
      <BaggageClaim/>
      <span>Add to Cart</span>
    </button>
          </div>
        </div>
        <div className="col-span-3 bg-white border border-gray-300 rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700 hidden sm:block">
        <h2 className='bg-slate-100 py-4 px-3 dark:bg-slate-500 font-semibold border-b border-gray-300'>DELIVERY & RETURNS</h2>
        </div>
      </div> */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 md:grid md:grid-cols-12 gap-8">
  <div className="lg:col-span-3">
    <Image src="/7.jpeg" alt="mnasour" width={556} height={566} className="w-full rounded-3xl" />
  </div>
  <div className="lg:col-span-6">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl lg:text-3xl font-semibold">Banana Products</h2>
      <button>
        <Share2 />
      </button>
    </div>
    <div className="flex flex-col border-b border-gray-500">
      <p className="py-2">
        Show the location of the current page in a hierarchical structure using the Tailwind CSS breadcrumb components.
        The breadcrumb component is an important part of any website or application that can be used to show the current
        location of a page in a hierarchical structure of pages.
        Flowbite includes two styles of breadcrumb elements, one that has a transparent background and a few more that
        come with a background in different colors.
      </p>
      <div className="flex items-center gap-8 mb-4">
        <p>SKU:121323434</p>
        <p className="bg-lime-300 px-4 py-1.5 rounded-full ml-2 text-slate-900">
          <b>Stock:</b> 230
        </p>
      </div>
    </div>
    <div className="flex justify-between items-center gap-4 pt-8 pb-4 border-b border-gray-500">
      <div className="flex items-center gap-4">
        <h4 className="text-2xl">Tsh 30000</h4>
        <del className="text-red-400">Ths 45000</del>
      </div>
      <p className="flex items-center gap-1">
        <Tag className="w-5 h-5 text-lime-500 me-2" />
        <span>Save 50% right now</span>
      </p>
    </div>
    <div className="flex flex-col sm:flex-row items-center justify-between mt-5 mb-5 gap-4">
      <div className="py-2 px-3 space-x-4 rounded-xl border border-gray-400 flex items-center">
        <button className="border-r border-gray-500 py-2 px-4">
          <Minus />
        </button>
        <p className="flex-grow">1</p>
        <button className="border-l border-gray-500 py-2 px-4">
          <Plus />
        </button>
      </div>
      <button className="flex items-center space-x-1 bg-lime-300 px-4 py-2 rounded-md text-white">
        <BaggageClaim />
        <span>Add to Cart</span>
      </button>
    </div>
  </div>
  <div className="lg:col-span-3 bg-white border border-gray-300 rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700 hidden sm:block">
    <h2 className="bg-slate-100 py-4 px-3 dark:bg-slate-500 font-semibold border-b border-gray-300">
      DELIVERY & RETURNS

    </h2>
   <div className="p-4 ">
   <div className="flex flex-col border-b border-gray-500">
   <div className="flex rounded-lg py-2 px-4 bg-orange-400 text-slate-50 items-center gap-3  ">
      <span>mansour Express</span>
      <Send/>
    </div>
    <div className='py-3'>Eligible for free Delivery. 
      <Link href="#" className='text-red-400'>View Details</Link>
    </div>
   </div>
    <h2 className='py-2'>Choose your Location</h2>
   <div className="border-b border-gray-500 py-4">
   <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500">
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
   </div>
   <div className="border-b border-gray-500 py-4">
   <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500">
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
   </div>
   <div className="border-b border-gray-500 py-4">
   <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500">
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
   </div>

   </div>
  </div>
</div>

      <div className="p-4 border border-gray-500 rounded-lg mt-8">
        <p className='bg-slate-100 py-2 text-2xl  px-3 dark:bg-slate-500 font-semibold border-b border-gray-300 '>similar products</p>
        <CategoryCarousel products={category.products}/>
        </div>
    </div>
  )
}
