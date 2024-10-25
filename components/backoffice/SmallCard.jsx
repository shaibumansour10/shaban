
import React from 'react'

export default function SmallCard({ data }) {
    const {
        Title, number, IconBg, Icon,
    } = data
    return (
        <div className={'rounded-lg  text-white shawod-lg bg-slate-700 p-4'}>
            <div className="flex space-x-4">
                <div className={'w-12 h-12${IconBg} rounded-full item-center flex justify-center'}>
                    <Icon className='' />
                </div>
                <div className="">
                    <p>{Title}</p>
                    <h3 className='text-2xl font-bold'>{number}</h3>
                </div>
            </div>
        </div >
    );
}