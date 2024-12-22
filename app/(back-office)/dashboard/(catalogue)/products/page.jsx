import React from 'react'
import DataTable from "@/components/data-table-components/DataTable"
import PageHeader from "@/components/backoffice/PageHeader"
import { columns } from './columns'
import {getData} from "@/lib/getData"


export default async function page() {
  const products =await getData("products")
  return (
    <div>
      {/*Header */}
      <PageHeader heading="Products" linkTitle="Add Product" href="/dashboard/products/new" />

      {/*Table  Action*/}
      <div className="py-4">
      <DataTable data={products} columns={columns} />
      </div>

    </div>
  )
}
