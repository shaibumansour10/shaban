"use client"

import { Checkbox } from "@/components/ui/checkbox"

import ActionColumn from "@/components/DataTableColumns/ActionColumn"

import SortTableColumn from "@/components/DataTableColumns/SortTableColumn"
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
    accessorKey: "couponCode",
    header: "Coupon Code",
  },
  {
    accessorKey: "expiryDate",
    header: "Expiry Date",
    cell: ({ row }) => (<DateColumn row={row} accessorKey="expiryDate" />)
  },
  {
    accessorKey: "isActive",
    header: "IsActive",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => (<DateColumn row={row} accessorKey="createdAt" />)
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const coupon=row.original
      return (
      <ActionColumn row={row} title="Coupon"
        endpoint={`coupons/${coupon.id}`}
        editEndpoint={`coupons/update/${coupon.id}`}/>)
    }
  },
]
