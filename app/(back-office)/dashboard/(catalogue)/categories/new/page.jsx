"use client"
import TextInput from "@/components/formInputs/TextInput"
import React from 'react'
import FormHeader from "@/components/backoffice/FormHeader"
import { useForm } from "react-hook-form"
export default function NewCategory() {
  const {register,handleSubmit,formState:{errors}}=useForm();
   async function onSubmit(data) {
    {/*
            id =>auto
            title
            slag=>auto
            description
            image
            
            */}
    const slug = generateslug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    console.log(data);
    makePostRequest(setLoading, "api/categories", data,
        "Category", reset
    );
    setImageUrl("");
}
  return (
    <div>
    <FormHeader title="New Category"/>  
    <form 
    onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-4xl p-4 bg-white border
    border-gray-200 rounded-lg shadow sm:p-6 md:p-8
    dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
    <TextInput label="category Title"
         name="title"
         register={register}
         error={errors}
         className="w-full"/>
    </div>
    </form>
    
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
