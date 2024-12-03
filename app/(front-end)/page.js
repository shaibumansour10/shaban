import React from "react" 
import Link from "next/link";
// import GlobalPage from "@/components/frontend/GlobalPage"
import Hero from "@/components/frontend/Hero"
export default function Home() {
  return (
    <div className="min-h-screen shadow-xl ">
      
        <Hero/>
        <Link href="/register-farmer" className="px-4 py-2 text-sm mt-6 font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
  Become a Supplier
  </Link> 
    </div>
  )
}
// lg:max-w-xl p-6 space-y-8 sm:p-8