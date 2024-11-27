
import NewFarmerForm from "@/components/backoffice/NewFarmerForm"

import {getData} from "@/lib/getData"
import React from "react";

export default async  function page({params:{id}}){
    const user = await getData(`users/${id}`)
    console.log(id)
    console.log(user);
    return (
        <div className="flex flex-col gap-6 p-16">
           <div className="max-w-4xl p-4 mx-auto">
          
           <h2 className=' text-2xl font-semibold text-slate-900 dark:text-slate-50'>
            Hello {user?.name}, Tell Us More About Your Self</h2>
           </div>
            <NewFarmerForm user={user}/>
        </div>
    );
}