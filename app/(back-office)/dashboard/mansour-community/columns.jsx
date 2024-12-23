"use client"

import { Checkbox } from "@/components/ui/checkbox"
import ActionColumn from "@/components/DataTableColumns/ActionColumn"

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
    header: "Community Image ",
    cell: ({ row }) => (<ImageColumn row={row} imageTitle="imageUrl"/>)
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const description= row.getValue("description")
     
      return <div className="line-clamp-1">
       {description}
      </div>
    },
  },
  {
    accessorKey: "isActive",
    header: "IsActive",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => (<DateColumn row={row} accessorKey="createdAt"/>)
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const community=row.original
      return (
      <ActionColumn row={row} title="Community"
        endpoint={`community/${community.id}`}
        editEndpoint={`mansour-community/update/{community.id}`}/>)
    }
  },
]
