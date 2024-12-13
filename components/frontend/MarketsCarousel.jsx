"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
// import dynamic from 'next/dynamic';

// const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });
import Image from "next/image"
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';
export default function MarketsCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
    itemClass="carousel-item-padding-40-px"
  >
    <Link href="#" className='rounded-lg'>
  <Image src="/markets/1.jpg" width={556} height={556} className='w-full'/>
  <h2 className='flex items-center text-white dark:text-black bg-slate-600 dark:bg-slate-50'>mobile</h2>
    </Link>
    <Link href="#" className='rounded-lg'>
  <Image src="/markets/2.jpg" width={556} height={556} className='w-full'/>
  <h2 className='flex items-center text-white dark:text-black bg-slate-600 dark:bg-slate-50'>mobile</h2>
    </Link>
    <Link href="#" className='rounded-lg'>
  <Image src="/markets/3.jpg" width={566} height={556} className='w-full'/>
  <h2 className='flex items-center text-white dark:text-black bg-slate-600 dark:bg-slate-50'>mobile</h2>
    </Link>
    <Link href="#" className='rounded-lg'>
  <Image src="/markets/4.gif" width={556} height={556} className='w-full'/>
  <h2 className='flex text-white dark:text-black items-center bg-slate-600 dark:bg-slate-50'>mobile</h2>
    </Link>
    <Link href="#" className='rounded-lg'>
  <Image src="/markets/5.jpg" width={556} height={556} className='w-full'/>
  <h2 className='flex text-white dark:text-black items-center bg-slate-600 dark:bg-slate-50'>mobile</h2>
    </Link>
    <Link href="#" className='rounded-lg'>
  <Image src="/love.webp" width={556} height={556} className='w-full'/>
  <h2 className='flex items-center text-white dark:text-black bg-slate-600 dark:bg-slate-50'>mobile</h2>
    </Link>
    
  </Carousel>
  )
}
