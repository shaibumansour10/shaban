"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
// import dynamic from 'next/dynamic';

// const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });
import Image from "next/image"
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';
import { BaggageClaim, Minus, Plus } from 'lucide-react';
export default function CategoryCarousel({products}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  
  return (
  
    <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    // deviceType={}
    dotListClass="custom-dot-list-style"
    itemClass="px-2"
  >
    {
      products.length>0? (

     products.map((product,i)=>{
      return(
        <div key={i}  alt="shaibu" className='rounded-lg mr-3 border bg-white dark:bg-slate-900 shadow overflow-hidden'>
  <Link href="#">
  <Image src={product.imageUrl} width={556} height={556} className='w-full h-48 object-cover rounded-lg' alt={product.title}/>
  </Link>
  <div className="px-4">

  <Link href="#">
  <h2 className='text-center dark:text-white text-black bg-slate-600 dark:bg-black rounded-md my-2 font-bold'>{product.title}</h2>
  </Link>
  <div className="flex items-center dark:text-white text-black justify-between gap-2 text-sm pb-3">
    <p>Tsh{product.salePrice}</p>
    <button className='flex items-center space-x-1 bg-lime-300 px-4 py-2 rounded-md text-white'>
      <p><Minus/></p>
      <BaggageClaim/>
      <p><Plus/></p>
    </button>
  </div>
  </div>
    </div>
      )
     })
      ):(
        <p>no products available</p>
      )
    }
  </Carousel>
  )
}
