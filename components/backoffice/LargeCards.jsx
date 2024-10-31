
import React from 'react';
import LargeCard from './LargeCard';

export default function LargeCards() {
    const orderStats = [
        {
            period: "Today Orders",
            sales: 11000,
            color: " rounded-lg  text-white shawod-md   p-8 flex items-center   flex-col gap-2  bg-green-600",
        },
        {
            period: "yesterday Orders",
            sales: 13000,
            color: " rounded-lg  text-white shawod-md   p-8 flex items-center   flex-col gap-2  bg-blue-600",
        },
        {
            period: "This month",
            sales: 154000,
            color: " rounded-lg  text-white shawod-md   p-8 flex items-center   flex-col gap-2  bg-orange-600",
        },
        {
            period: "All-time sales",
            sales: 1123000,
            color: " rounded-lg  text-white shawod-md   p-8 flex items-center   flex-col gap-2  bg-purple-600",
        },
    ];
    return (
        <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8'>
            { /*Card */}
            {orderStats.map((item, i) => {
                return (<LargeCard className="flex bg-green-600" data={item} key={i} />)
            })}
        </div>
    );
}
