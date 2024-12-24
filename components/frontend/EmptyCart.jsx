import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function EmptyCart() {
  return (
    <div className='flex items-center justify-center'>
     <p>Your Cart is Empty <Link href="/" className='text-lime-600 font-bold'>start Shopping</Link></p>
      {/* <Image src="/sha.avif" alt='sha' height={556} width={556}/> */}
    </div>
  )
}
