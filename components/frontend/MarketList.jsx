import React from 'react'
import MarketsCarousel from "./MarketsCarousel"
export default function MarketList() {
  return (
    <div className='text-white py-16'>
      <h2>market list</h2>
     { /*Market Slider*/}
     <MarketsCarousel/>
    </div>
  )
}
