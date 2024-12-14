"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
// import dynamic from 'next/dynamic';

// const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });
import Image from "next/image"
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';
import { ArrowBigRight } from 'lucide-react';
export default function TrainingCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const slides=[
    {},{},{},{},{},{},{},{},{},{}
  ]
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
     slides.map((slide,i)=>{
      return(
        <div key={i}  alt="shaibu" className='rounded-lg mr-3 border overflow-hidden'>
            <Link href="#">
            
  <Image src="/categories/3.jpg" width={556} height={556} alt='mansour' className='w-full rounded-lg'/>
            </Link>
  <h2 className='text-center tdark:text-whitetext-black bg-slate-600 dark:bg-black rounded-md text-2xl'>
    mobile
    </h2>
    <p className='text-black px-4 line-clamp-3 mb-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iure culpa, omnis ut molestiae eum quis ipsam officia explicabo sunt consectetur enim? Doloremque nesciunt harum in, atque eveniet mollitia nulla.
    </p>
    <div className="flex justify-between items-center px-4 py-2">
    <Link href="#" className='inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-lime-700 rounded-lg border border-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800'>
    Read More
    </Link>
    <Link href="#" className='flex flex-between text-lime-700 '>Talk to the Consultant <ArrowBigRight/> </Link>
    </div>
    </div>
      )
     })
    }
  </Carousel>
  )
}
