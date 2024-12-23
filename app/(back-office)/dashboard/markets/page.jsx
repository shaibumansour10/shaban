import React from 'react'
import {columns} from "./columns"
import PageHeader from "@/components/backoffice/PageHeader"
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'

export default async function page() {
  const markets = await getData("markets")
  return (
    <div>
      {/*Header */}
      <PageHeader heading="Markets" linkTitle="Add Market" href="/dashboard/markets/new" />

      {/*Table  Action*/}
      <div className="py-4">
      <DataTable data={markets} columns={columns} />
      </div>
    </div>
  )
}
