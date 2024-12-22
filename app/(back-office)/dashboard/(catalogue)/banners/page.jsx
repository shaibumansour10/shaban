import React from 'react'
import {columns} from "./columns"
import{getData} from "@/lib/getData"
import DataTable from '../../../../../components/data-table-components/DataTable'
import PageHeader from "@/components/backoffice/PageHeader"
import TableAction from "@/components/backoffice/TableAction"

export default async function page() {
  const banners =await getData("banners")
  return (
    <div>
      {/*Header */}
      <PageHeader heading="Banners" linkTitle="Add Banner" href="/dashboard/banners/new" />

      {/*Table  Action*/}
      
    <div className="py-4">
      <DataTable data={banners} columns={columns} />
      </div>

    </div>
  )
}
