"use client"

import { Checkbox } from "@/components/ui/checkbox"
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
    accessorKey: "logoUrl",
    header: "Market Logo ",
    cell: ({ row }) => (<ImageColumn row={row} imageTitle="logoUrl"/>)
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
    cell: ({ row }) => (<ActionTable row={row} title="Category"/>)
  },
]
