

import React from 'react'

export default function SmallCard({ data }) {
    const {
        Title, number, IconBg, Icon,
    } = data
    return (
        <div className={'rounded-lg  dark:text-slate-50 text-slate-900  shawod-lg bg-slate-200 dark:bg-slate-700 p-4'}>
            <div className="flex space-x-4">
                <div className={IconBg}>
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