import React from 'react'

import PageHeader from "@/components/backoffice/PageHeader"
import TableAction from "@/components/backoffice/TableAction"

export default function page() {
  return (
    <div>
      {/*Header */}
      <PageHeader heading="Markets" linkTitle="Add Market" href="/dashboard/markets/new" />

      {/*Table  Action*/}
      {/*Export // saerch // Bulk delete*/}
    <TableAction/>
      <div className="py-4">
        Table
      </div>

    </div>
  )
}
