import BestSalesProductCart from "./BestSalesProductCart"
import WeeklySalesCart from "./WeeklySalesCart"
import React from 'react'

export default function DashboardCarts() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <WeeklySalesCart />
            <BestSalesProductCart />
        </div>
    )
}
