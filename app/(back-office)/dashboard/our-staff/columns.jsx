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
    accessorKey: "name",
    header: ({ column }) => (<SortTableColumn column={column} title="Name"/>)
  },
  {
    accessorKey: "imageUrl",
    header: "profile ",
    cell: ({ row }) => (<ImageColumn row={row} imageTitle="imageUrl"/>)
  },
  {
    accessorKey: "phone",
    header: "Phone No",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "physicalAddress",
    header: "Physical Address",
  },
  {
    accessorKey: "role",
    header: "Role",
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
    cell: ({ row }) => (<ActionTable row={row} title="Staff"/>)
  },
]
