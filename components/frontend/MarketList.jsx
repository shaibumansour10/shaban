import React from 'react'
import MarketsCarousel from "./MarketsCarousel"
export default function MarketList() {
  return (
    <div className='text-white py-16'>
      <h2>market list</h2>
     { /*Market Slider*/}
   <div className="bg-green-400 rounded-lg p-4">
    <h2 className='py-2 text-center text-slate-100 text-2xl  rounded-lg'>Shop By Market</h2>
   <MarketsCarousel/>
   </div>
    </div>
  )
}
