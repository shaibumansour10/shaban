"use client"

import Image from "next/image"

export const columns = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "imageUrl",
    header: "Category Image ",
    cell: ({ row }) => {
      const imageUrl= row.getValue("imageUrl")
     
      return <div className="shrink-0">
        <Image width={556} height={556} alt="img" src={imageUrl} className="w-10 h-10 rounded-full object-cover"/>
      </div>
    },
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "isActive",
    header: "IsActive",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
  },
]
