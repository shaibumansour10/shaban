"use client"
import { MoreHorizontal ,ArrowUpDown} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import ActionTable from "@/components/DataTableColumns/ActionColumn"

import SortTableColumn from "@/components/DataTableColumns/SortTableColumn"
import ImageColumn from "@/components/DataTableColumns/ImageColumn"
import DateColumn from "@/components/DataTableColumns/DateColumn"


export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (<SortTableColumn column={column} title="Title"/>)
  },
  {
    accessorKey: "imageUrl",
    header: "Banner Image ",
    cell: ({ row }) => (<ImageColumn row={row} accessorKey="imageUrl"/>)
  },
//   {
//     accessorKey: "description",
//     header: "Description",
//     cell: ({ row }) => {
//       const description= row.getValue("description")
     
//       return <div className="line-clamp-1">
//        {description}
//       </div>
//     },
//   },
  {
    accessorKey: "isActive",
    header: "IsActive",
  },
  {
    accessorKey: "link",
    header: "Banner Link",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => (<DateColumn row={row} accessorKey="createdAt"/>)
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const banner=row.original
      return (
      <ActionTable row={row} title="Banner"
        endpoint={`banners/${banner.id}`}/>)
    }
  },
]
