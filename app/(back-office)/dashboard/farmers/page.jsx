import React from 'react'

import PageHeader from "@/components/backoffice/PageHeader"
import TableAction from "@/components/backoffice/TableAction"

export default function page() {
  return (
    <div>
      {/*Header */}
      <PageHeader heading="Farmers" linkTitle="Add Farmer" href="/dashboard/farmers/new" />

      {/*Table  Action*/}
      {/*Export // saerch // Bulk delete*/}
    <TableAction/>
      <div className="py-4">
        Table
      </div>

    </div>
  )
}
