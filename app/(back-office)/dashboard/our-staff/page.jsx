import React from 'react'

import PageHeader from "@/components/backoffice/PageHeader"
import TableAction from "@/components/backoffice/TableAction"

export default function page() {
  return (
    <div>
      {/*Header */}
      <PageHeader heading="All Staffs" linkTitle="Add Staff" href="/dashboard/our-staff/new" />

      {/*Table  Action*/}
      {/*Export // saerch // Bulk delete*/}
    <TableAction/>
      <div className="py-4">
        Table
      </div>

    </div>
  )
}
