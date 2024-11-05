import React from 'react'
import Heading from "@/components/backoffice/Heading"
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function FormHeader({title}) {
  const router=useRouter()
  return (
    <div className="flex items-center justify-between py-6 mb-12  px-12 dark:bg-slate-600 bg-slate-200 rounded-lg">
    <Heading title={title}/>
    <button onClick={()=>router.back()} className='text-black dark:text-white'>
      <X/>
    </button>
    </div>
  )
}
