"use client"
import Image from 'next/image';
import React from 'react';
import {Carousel} from 'nuka-carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export  default function HeroCarousel() {
  const  config = {
    containerClassName: "border-4 border-red-500 rounded-full h-12 w-12 overflow-hidden",
    nextButtonClassName: "string",
    nextButtonStyle: "CSSProperties",
    nextButtonText: <ChevronRight/>,
    pagingDotsClassName: "me-2",
    pagingDotsContainerClassName: "string",
    pagingDotsStyle: "CSSProperties",
    prevButtonClassName: "string",
    prevButtonStyle: "CSSProperties",
    prevButtonText:   <ChevronLeft/>,
   

  }
    return (
      <Carousel autoplay defaultControlsConfig={config} className='rounded-md overflow-hidden'>
        <img src='/banners/1.jpg' alt='mansour'/>
        <img src='/banners/2.jpg' alt='mansour'/>
        <img src='/banners/3.jpg' alt='mansour'/>
        <img src='/banners/4.gif' alt='mansour'/>
      </Carousel>
    );
  }