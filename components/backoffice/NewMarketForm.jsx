"use client"
import {generateSlug} from "@/lib/generateSlug"
import {makePostRequest} from "@/lib/apiRequest"
import TextAreaInput from "@/components/formInputs/TextAreaInput"
import SubmitButton from "@/components/formInputs/SubmitButton"
import TextInput from "@/components/formInputs/TextInput"
import SelectInput from "@/components/formInputs/SelectInput"
import ToggleInput from "@/components/formInputs/ToggleInput"
import { useRouter } from "next/navigation"
import React ,{useState} from 'react'
import FormHeader from "@/components/backoffice/FormHeader"
import ImageInput from "@/components/formInputs/ImageInput"
import { useForm } from "react-hook-form"
export default function NewMarketForm({categories}) {
  const [imageUrl,setImageUrl]=useState("")
  const [loading, setLoading]=useState(false)
  const {register,reset,watch,handleSubmit,formState:{errors}}=useForm({defaultValues:{
    isActive:true,},});
    const isActive = watch("isActive");
console.log(isActive);
const router=useRouter();
function redirect(){
  router.push("/dashboard/markets")
}
   async function onSubmit(data) {
    setLoading(true)
    const endpoint="api/markets"
    const resourceName="Market"
    const slug =generateSlug(data.title)
    data.slug=slug
 
    data.logoUrl=imageUrl;
    {/*
            id =>auto
            title
            slag=>auto
            link
            image
            
            */}
      console.log(data);
      makePostRequest(
        setLoading,
        endpoint,
        data,
      resourceName,
        reset,
        redirect
        )
        setImageUrl("");
    
}
  return (
    <div>
    <FormHeader title="New Market"/>  
    <form 
    onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-4xl p-4 bg-white border
    border-gray-200 rounded-lg shadow sm:p-6 md:p-8
    dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-6">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
    <TextInput label="Market Title"
         name="title"
         register={register}
         errors={errors}
         className='w-full'
         />
         <SelectInput label="Select Categories"
            name="categoryId"
            multiple="true"
            register={register}
            errors={errors}
            className="w-full"
            option={categories}
            />
    <TextAreaInput label="Market Description"
         name="description"
         register={register}
         errors={errors}
         />
    
                <ImageInput
                    imageUrl={imageUrl}
                    setImageUrl={setImageUrl}
                    endpoint="marketLogoUploader"
                    label="Market Logo"
                />
                
          <ToggleInput 
          label="Publish Your Market"
          name="isActive"
          trueTitle="Active"
          falseTitle="Draft"
          isActive={isActive}
          register={register}
          />
    </div>
    <SubmitButton
                isLoading={loading}
                buttonTitle="Create Market"
                loadingButtonTitle="Create Market please wait..."
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
