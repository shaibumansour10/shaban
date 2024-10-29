
import { AlignJustify, Bell, Sun, SunIcon, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Navbar() {
    return (
        <div className='flex items-center justify-between bg-slate-800 text-slate-50 h-20 px-8 py-4 ml-60 fixed top-0 w-full px-8 z-50 pr-[20rem]'>
            {/*Icons */}
            <button>
                <AlignJustify />
            </button>
            {/*3 Icons */}
            <div className="flex space-x-3 ">
                <button><SunIcon className='text-green-600' /></button>

                <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent-700 rounded-lg   dark:bg-transparent-600 ">
                    <Bell className='text-green-600' />
                    <span className="sr-only">Notifications</span>
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold  bg-red-500   rounded-full -top-0 end-6 dark:border-gray-900">20</div>
                </button>


                <button>
                    <Image src='/profile.jpg' alt='user profile' width={200} height={200} className='w-8 h-8 rounded-full' />
                </button>
            </div>
        </div>
    )
}

