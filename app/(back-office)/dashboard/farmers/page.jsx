import React from 'react'
import {columns} from "./columns"
import PageHeader from "@/components/backoffice/PageHeader"
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'

export default async function page() {
  const farmers = await getData("farmers")
  return (
    <div>
      {/*Header */}
      <PageHeader heading="Farmers" linkTitle="Add Farmer" href="/dashboard/farmers/new" />

      {/*Table  Action*/}
      <div className="py-4">
      <DataTable data={farmers} columns={columns} filterKeys={["name"]} />
      </div>

    </div>
  )
}
