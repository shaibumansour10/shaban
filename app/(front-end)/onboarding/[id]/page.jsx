
import NewFarmerForm from "@/components/backoffice/NewFarmerForm"

import {getData} from "@/lib/getData"
import React from "react";

export default async  function page({params:{id}}){
    const user = await getData(`user/${id}`)
    const FullName=user?.name
    function getLastName(FullName){
    
        const nameParts = FullName.trim( ).split(" ");
        return nameParts[nameParts.length-1];
    }
    const lastName=getLastName(FullName)
    console.log(id)
    console.log(user);
    return (
        <div className="flex flex-col gap-6 p-16">
           <div className="max-w-4xl p-4 mx-auto">
          
           <h2 className=' text-2xl font-semibold text-slate-900 dark:text-slate-50'>
            Hello {lastName}, Tell Us More About Your Self</h2>
           </div>
            <NewFarmerForm user={user}/>
        </div>
    );
}