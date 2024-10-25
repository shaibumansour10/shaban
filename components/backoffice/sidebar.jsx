import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
    return (
        <div className='bg-slate-700 space-y-6 w-60 h-screen text-slate-50 p-3 fixed top-0 left-0'>
            <Link className='mt-6' href="#">logo</Link>

            <div className='space-y-3 flex flex-col'>
                <Link href="#">Dashboard</Link>
                <Link href="#">Catalogue</Link>
                <Link href="#">markerts</Link>
                <Link href="#">orders</Link>
                <Link href="#">our staff</Link>
                <Link href="#">limi community</Link>
                <Link href="#">online store</Link>
                <Link href="#">setting</Link>
                <Link href="#">wallets</Link>
                <Link href="#">categories</Link>
                <Link href="#">logo</Link>
            </div>
        </div >

    )
}
