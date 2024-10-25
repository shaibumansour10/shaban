
import React from 'react'
import LargeCard from './LargeCard';

export default function LargeCards() {
    const orderStats = [
        {
            period: "Today Orders",
            sales: 11000,
            color: "bg-green-600",
        },
        {
            period: "yesterday Orders",
            sales: 13000,
            color: "bg-blue-600",
        },
        {
            period: "This month",
            sales: 154000,
            color: "bg-orange-600",
        },
        {
            period: "All-time sales",
            sales: 1123000,
            color: "bg-purple-600",
        },
    ]
    return (
        <div className='grid drid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg grid-cols-4 gap-4 py-8'>
            { /*Card */}
            {orderStats.map((item, i) => {
                return <LargeCard className="flex bg-green-600" data={item} key={i} />
            })}
        </div>
    );
}
