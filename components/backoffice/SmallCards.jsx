import React from 'react'
import SmallCard from "./SmallCard"
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react';
export default function SmallCards() {
    const orderstatus = [
        {
            Title: "Total order",
            number: 11000,
            IconBg: "w-12 h-12  rounded-full bg-green-300 dark:bg-green-600  flex items-center justify-center ",
            Icon: ShoppingCart,
        },
        {
            Title: "order pending",
            number: 13000,
            IconBg: "w-12 h-12  rounded-full bg-blue-300 dark:bg-blue-600 flex items-center justify-center ",
            Icon: Loader2,
        },
        {
            Title: "order processing",
            number: 154000,
            IconBg: "w-12 h-12  rounded-full bg-orange-300  dark:bg-orange-600  flex items-center justify-center ",
            Icon: RefreshCcw,
        },
        {
            Title: "order Delivered",
            number: 1123000,
            IconBg: "w-12 h-12  rounded-full bg-purple-300 dark:bg-purple-600  flex items-center justify-center ",
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
