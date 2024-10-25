import React from 'react'
import SmallCard from "./SmallCard"
import { CheckCheck, RefreshCcw, ShoppingCart } from 'lucide-react';
export default function SmallCards() {
    const orderstatus = [
        {
            Title: "Total order",
            number: 11000,
            IconBg: "bg-green-600",
            Icon: ShoppingCart,
        },
        {
            Title: "order pending",
            number: 13000,
            IconBg: "bg-blue-600",
            Icon: ShoppingCart,
        },
        {
            Title: "order processing",
            number: 154000,
            IconBg: "bg-orange-600",
            Icon: RefreshCcw,
        },
        {
            Title: "order Delivered",
            number: 1123000,
            IconBg: "bg-purple-600",
            Icon: CheckCheck,
        },
    ]
    return (
        <div className='grid drid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg grid-cols-4 gap-4 py-8'>
            { /*Card */}
            {orderstatus.map((data, i) => {
                return <SmallCard data={data} />
            })}
        </div>
    );
}
