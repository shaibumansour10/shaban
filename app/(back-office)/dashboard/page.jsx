import CustomerDataTable from "@/components/backoffice/CustomerDataTable"
import DashboardCarts from "@/components/backoffice/DashboardCarts"
import Heading from "@/components/backoffice/Heading"
import React from 'react'
import LargeCards from "@/components/backoffice/LargeCards"
import SmallCards from "@/components/backoffice/SmallCards"
export default function page() {
    return (
        <div >
            <Heading title="Dashboard Overviews" />
            {/*Large Cards */}
            <LargeCards />
            {/*Small Cards */}
            <SmallCards />
            {/*Charts*/}
            <DashboardCarts />
            {/*Recent Order Table */}
            <CustomerDataTable />
        </div>
    )
}
