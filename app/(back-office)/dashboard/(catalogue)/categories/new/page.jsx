import React from 'react'
import FormHeader from "@/components/backoffice/FormHeader"
export default function NewCategory() {
  return (
    <div>
    <FormHeader title="New Category"/>  
    <form className="w-full max-w-4xl p-4 bg-white border
    border-gray-200 rounded-lg shadow sm:p-6 md:p-8
    dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"></form>
   
     {/*
     -id
     -title
     -slug
     -discription
     -image
     */}
    </div>
  )
}
