"use client"
import React from 'react';
import Carousel from 'nuka-carousel';
import Image from 'next/image'
export default function HeroCarousel() {
  
    return (
      <Carousel>
        <Image src='/profile.jpg' alt='mansour'/>
        <Image src='/profile.jpg' alt='mansour'/>
        <Image src='/profile.jpg' alt='mansour'/>
        <Image src='/profile.jpg' alt='mansour'/>
        <Image src='/profile.jpg' alt='mansour'/>
      </Carousel>
    );
  }