import React from 'react'
import {columns} from "./columns"
import PageHeader from "@/components/backoffice/PageHeader"
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'

export default async function page() {
  const community =await getData("community")
  return (
    <div>
      {/*Header */}
      <PageHeader heading="Mansour Communities" linkTitle="Add Community" href="/dashboard/mansour-community/new" />

      <div className="py-4">
      <DataTable data={community} columns={columns} />
      </div>

    </div>
  )
}
