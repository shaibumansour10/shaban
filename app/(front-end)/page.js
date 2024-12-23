import React from "react" 
// import GlobalPage from "@/components/frontend/GlobalPage"
import Hero from "@/components/frontend/Hero"
import MarketList from "@/components/frontend/MarketList"
import CategoryList from "@/components/frontend/CategoryList"
import CommunityTraining from "@/components/frontend/CommunityTraining"
import { getData } from '@/lib/getData'
export default async function Home() {
  // use this only when yuo have not access to mongodb
  const categories=await getData('categories')

  //WHEN YOU HAVE ACCESS UNCOMMIT THIS CODE AND COMMIT ABOVE CODE

  // const categoriesData=await getData('categories')
  // const  categories=categoriesData.filter((category)=>{
  //   return category.products.length>3
  // })
  // console.log(categories)
  return (
    <div className="min-h-screen shadow-xl ">
      
        <Hero/>
        <MarketList/>
       {
        categories.length>0?(
          categories.map((category,i)=>{
            return(
              <div className="py-4" key={i}>
       <CategoryList category={category}/>
       </div>
            )
          })
        ):(
          <p>no category available</p>
        )
       }
       
       <div className="py-4">
       <CommunityTraining/>
       </div>
    </div>
  )
}
// lg:max-w-xl p-6 space-y-8 sm:p-8