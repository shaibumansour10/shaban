// "use client"
// import Image from 'next/image';
// import React from 'react';
// import { Carousel } from 'nuka-carousel';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// export default function HeroCarousel() {
//   const config = {
//     nextButtonText: <ChevronRight />,
//     prevButtonText: <ChevronLeft />,
//     pagingDotsClassName: "me-2 h-4 w-4",
//   };

//   return (
//     <Carousel
//       autoplay
//       wrapAround
//       defaultControlsConfig={config}
//       className="rounded-md overflow-hidden"
//     >
//       {/* Responsive Images */}
      
//         <Image
//           alt="mansour"
//           src="/banners/1.jpg"
//           fill
//           className="object-cover w-full relative h-[50vw] sm:h-[384px]"
//         />
//         <Image
//           alt="mansour"
//           src="/banners/2.jpg"
//           fill
//           className="object-cover w-full relative h-[50vw] sm:h-[384px]"
//         />
    
      
//     </Carousel>
//   );
// }

"use client"
import Image from 'next/image';
import React from 'react';
import {Carousel} from 'nuka-carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export  default function HeroCarousel({banners}) {
  const  config = {
    // containerClassName: "rounded-full h-12 w-12 overflow-hidden",
    // nextButtonClassName: "string",
    // nextButtonStyle: "CSSProperties",
    nextButtonText: <ChevronRight/>,
    pagingDotsClassName: "me-2 h-4 w-4",
    // pagingDotsContainerClassName: "string",
    // pagingDotsStyle: "CSSProperties",
    // prevButtonClassName: "string",
    // prevButtonStyle: "CSSProperties",
    prevButtonText:   <ChevronLeft/>,
   

  }
    return (
      <Carousel autoplay defaultControlsConfig={config} className='rounded-md overflow-hidden' 
      wrapAround  >
        {
          banners.length>0 ?(
            banners.map((banner,i)=>{
              return(
               <Link key={i} href={banner.link} className='' >
                <Image  alt={banner.title} src={banner.imageUrl} width={712} height={384} className='w-full'/>
               </Link>
              )
            })
          ) : (
            <p>the banners not available</p>
          )
        }
        
        {/* <Link href="#" className=''>
        <Image alt="mansour" width={712} height={384} src='/banners/1.jpg'  className= "w-full"/>
        </Link>
        
        <Link href="#" className=''>
        <Image alt="mansour" width={712} height={384} src='/banners/2.jpg'  className= "w-full"/>
        </Link>
        <Link href="#" className=''>
        <Image alt="mansour" width={712} height={384} src='/banners/3.jpg'  className= "w-full"/>
        </Link>
        <Link href="#" className=''>
        <Image alt="mansour" width={712} height={384} src='/banners/4.gif'  className= "w-full"/>
        </Link> */}
      </Carousel>
    );
  }