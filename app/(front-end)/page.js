import React from "react" 
// import GlobalPage from "@/components/frontend/GlobalPage"
import Hero from "@/components/frontend/Hero"
import MarketList from "@/components/frontend/MarketList"
import CategoryList from "@/components/frontend/CategoryList"
import CommunityTraining from "@/components/frontend/CommunityTraining"
export default function Home() {
  return (
    <div className="min-h-screen shadow-xl ">
      
        <Hero/>
        <MarketList/>
       <div className="py-4">
       <CategoryList/>
       </div>
       <div className="py-4">
       <CategoryList/>
       </div>
       <div className="py-4">
       <CategoryList/>
       </div>
       <div className="py-4">
       <CategoryList/>
       </div>
       <div className="py-4">
       <CommunityTraining/>
       </div>
    </div>
  )
}
// lg:max-w-xl p-6 space-y-8 sm:p-8