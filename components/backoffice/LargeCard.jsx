import { Layers } from 'lucide-react'
import React from "react"

export default function LargeCard({ data }) {
    return (
        <div className={data.color}>
            <Layers />
            <h4>{data.period}</h4>
            <h2 className='lg:text-3xl text-2xl'>tsh.{data.sales}</h2>
        </div>
    )
}