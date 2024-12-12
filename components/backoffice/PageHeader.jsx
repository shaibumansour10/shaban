import Heading from "@/components/backoffice/Heading"
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function PageHeader({heading, linkTitle,href}) {
  return (
    <div className="flex justify-between ">
    <Heading title={heading} />
    <Link className=" space-x-2
    text-white bg-lime-600 hover:bg-lime-600/90 focus:ring-4 focus:outline-none focus:ring-lime-600/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-lime-600/55 me-2 
" href={href}><Plus/>
    <span>{linkTitle}</span>
    </Link>
    </div>
  )
}
