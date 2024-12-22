import React from 'react'
import DataTable from '../../../../../components/data-table-components/DataTable'
import PageHeader from "@/components/backoffice/PageHeader"
import { getData } from '@/lib/getData'
import {columns} from "./columns"

export default async function page() {
  const coupons = await getData("coupons")
  return (
    <div>
      {/*Header */}
      <PageHeader heading="Coupons" linkTitle="Add Coupon" href="/dashboard/coupons/new" />

      {/*Table  Action*/}
      <div className="py-4">
      <DataTable data={coupons} columns={columns} />
      </div>

    </div>
  )
}
