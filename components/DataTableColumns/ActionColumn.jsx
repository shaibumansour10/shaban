import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import DeleteButton from "../actions/DeleteButton"
  import EditBtn from "../actions/EditBtn"
  import { Button } from "@/components/ui/button"
  import { MoreHorizontal ,ArrowUpDown} from "lucide-react"

export default function ActionColumn({row ,title,endpoint,editEndpoint}) {

  // const isActive = row.isActive
  // const id=row.original.id;
  // const editEndpoint=`categorie`
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
            {/* <button>...</button> */}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            
            <DropdownMenuSeparator />
            <DropdownMenuItem>
             <DeleteButton title={title} endpoint={endpoint}/> 
            </DropdownMenuItem>
            <DropdownMenuItem>
              <EditBtn title={title} editEndpoint={editEndpoint} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    
  
}
