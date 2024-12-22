import React from 'react'
import {getData }from "@/lib/getData"
import {  columns } from "./columns"
import PageHeader from "@/components/backoffice/PageHeader"
import TableAction from "@/components/backoffice/TableAction"
import DataTable from '../../../../../components/data-table-components/DataTable'

export default async function page() {
  const categories =await getData("categories")
  return (
    <div>
      {/*Header */}
      <PageHeader heading="Categories" linkTitle="Add Category" href="/dashboard/categories/new" />

      {/*Table  Action*/}
     
    
      <div className="py-4">
      <DataTable data={categories} columns={columns} />
      </div>

    </div>
  )
}
