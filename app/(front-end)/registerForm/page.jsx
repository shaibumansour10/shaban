// import GlobalPage from "@/components/frontend/GlobalPage"
import RegisterForm from "@/components/frontend/RegisterForm"
import React from 'react'


export default function page() {
    
  return (
    <div>
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex items-center justify-center py-8 px-4 mx-auto max-w-screen-xl">
         {/* <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">At Mansour Group, we focus on markets where technology, innovation, and capital can drive long-term value and foster sustainable economic growth..</p>
            <a href="#" className="text-lime-600 dark:text-lime-500 hover:underline font-medium text-lg inline-flex items-center">Read more about our app 
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div> */}
        {/* <GlobalPage/> */}
     <RegisterForm role="USER" />
    </div>
    </section>
    </div>
  );
}
