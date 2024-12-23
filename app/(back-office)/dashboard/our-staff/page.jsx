import React from 'react'
import {columns} from "./columns"
import PageHeader from "@/components/backoffice/PageHeader"
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'

export default async function page() {
  const staffs =await getData("staffs")
  return (
    <div>
      {/*Header */}
      <PageHeader heading="All Staffs" linkTitle="Add Staff" href="/dashboard/our-staff/new" />

      {/*Table  Action*/}
      <div className="py-4">
      <DataTable data={staffs} columns={columns} />
      </div>

    </div>
  )
}
