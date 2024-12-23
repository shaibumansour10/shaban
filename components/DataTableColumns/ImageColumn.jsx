import React from 'react'
import Image from "next/image"
export default function ImageColumn({row,accessorKey}) {
    const imageUrl= row.getValue(`${accessorKey}`)
     
      return <div className="shrink-0">
        <Image width={556} height={556} alt={accessorKey} src={imageUrl} className="w-10 h-10 rounded-full object-cover"/>
      </div>
  
}
