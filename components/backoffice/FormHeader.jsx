import React from 'react'
import Heading from "@/components/backoffice/Heading"
import { X } from 'lucide-react'
export default function FormHeader({title}) {
  return (
    <div className="flex items-center justify-between py-6  px-12 dark:bg-slate-600 bg-slate-200 rounded-lg">
    <Heading title={title}/>
    <button className='text-black dark:text-white'>
      <X/>
    </button>
    </div>
  )
}
