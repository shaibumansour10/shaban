import { Layers } from 'lucide-react'
import React from 'react'

export default function LargeCard({ data }) {
    return (
        <div className={'rounded-lg  text-white shawod-md  p-8 flex items-center  ${color}'}>
            <Layers />
            <h4>{data.period}</h4>
            <h2 className='lg:text-3xl text-2xl'>tsh.{data.sales}</h2>
        </div>
    )
}