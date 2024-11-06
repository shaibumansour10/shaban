"use client"
import {generateSlug} from "@/lib/generateSlug"
import TextAreaInput from "@/components/formInputs/TextAreaInput"
import SubmitButton from "@/components/formInputs/SubmitButton"
import TextInput from "@/components/formInputs/TextInput"
import React ,{useState} from 'react'
import FormHeader from "@/components/backoffice/FormHeader"
import ImageInput from "@/components/formInputs/ImageInput"
import { useForm } from "react-hook-form"
export default function NewCategory() {
  const [imageUrl,setImageUrl]=useState("")
  const {register,handleSubmit,formState:{errors}}=useForm();
   async function onSubmit(data) {
    const slug =generateSlug(data.title)
    data.slug=slug
    {/*
            id =>auto
            title
            slag=>auto
            description
            image
            
            */}
      console.log(data);
    
}
  return (
    <div>
    <FormHeader title="New Category"/>  
    <form 
    onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-4xl p-4 bg-white border
    border-gray-200 rounded-lg shadow sm:p-6 md:p-8
    dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-6">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
    <TextInput label="category Title"
         name="title"
         register={register}
         error={errors}
         className="w-full"/>
    <TextAreaInput label="Category description"
              name="description"
              register={register}
              error={errors}
              className="w-full"      
                    
                />
                <ImageInput
                    imageUrl={imageUrl}
                    setImageUrl={setImageUrl}
                    endpoint="categoryImageUploader"
                    label="category Image"
                />
    </div>
    <SubmitButton
                isLoading={false}
                buttonTitle="Create Category"
                loadingButtonTitle="Create Category please wait..."
            />
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
