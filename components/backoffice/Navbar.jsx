
import { AlignJustify, Bell, Sun, SunIcon, User } from 'lucide-react'
import React from 'react'

export default function Navbar() {
    return (
        <div className='flex items-center justify-between bg-slate-800 text-slate-50'>
            {/*Icons */}
            <button>
                <AlignJustify />
            </button>
            {/*3 Icons */}
            <div className="flex space-x-3">
                <button><SunIcon /></button>
                <button><Bell /></button>
                <button><User /></button>
            </div>
        </div>
    )
}

