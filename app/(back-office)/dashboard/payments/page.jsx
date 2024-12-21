import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import {getData}  from "@/lib/getData"

export default async function DemoPage() {
  const data = await getData("categories")

  return (
    <div className="container text-black dark:text-white mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
