"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
// import dynamic from 'next/dynamic';

// const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });
import Image from "next/image"
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';
import { BaggageClaim, Minus, Plus } from 'lucide-react';
import Product from './Product';
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
     products && products.length > 0 ? (

     products.map((product,i)=>{
      return(
       <Product product={product} key={i}/>
      )
     })
      ):(
        <p>no products available</p>
      )
    }
  </Carousel>
  )
}
