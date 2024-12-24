"use client"
import { generateSlug } from "@/lib/generateSlug"
import { makePostRequest, makePutRequest } from "@/lib/apiRequest"
import TextAreaInput from "@/components/formInputs/TextAreaInput"
import SubmitButton from "@/components/formInputs/SubmitButton"
import TextInput from "@/components/formInputs/TextInput"
import ToggleInput from "@/components/formInputs/ToggleInput"
import SelectInput from "@/components/formInputs/SelectInput"
import React, { useState } from 'react'

import ImageInput from "@/components/formInputs/ImageInput"
import { useForm } from "react-hook-form"

import{ useRouter} from "next/navigation"
export default function NewCategoryForm({updateData={}}) {
    const initialImageUrl=updateData?.imageUrl??""
    const id= updateData?.id??""
  const [imageUrl, setImageUrl] = useState(initialImageUrl)
  // const markets = []
  const [loading, setLoading] = useState(false)
  const {register,reset,watch,handleSubmit,formState:{errors}}=useForm({defaultValues:{
    isActive:true,
...updateData,
},});
    const isActive = watch("isActive");
console.log(isActive);
const router =useRouter();
function redirect(){
  router.push("/dashboard/categories")
}
  async function onSubmit(data) {
    setLoading(true)
    const Endpoint = "api/categories"
    const resourceName = "Categories"
    const slug = generateSlug(data.title)
    data.slug = slug
    data.imageUrl = imageUrl
    console.log(data);
  if(id){
//make put request (update)
makePutRequest(
  setLoading,
    `api/categories/${id}`,
    data,
    "Category",
    reset,
    redirect
);

  }else{
//make post request (create)
makePostRequest(
  setLoading,
  Endpoint,
  data,
  resourceName,
  reset,
  redirect
);
setImageUrl("")
  }
 
  }
  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-4xl p-4 bg-white border
border-gray-200 rounded-lg shadow sm:p-6 md:p-8
dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-6">
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
      <TextInput label="category Title"
        name="title"
        register={register}
        errors={errors}
        // className="w-full" 
        />
      {/* <SelectInput label="Select Markets"
        name="marketIds"
        multiple="true"
        register={register}
        errors={errors}
        className="w-full"
        option={markets}
        /> */}
      <TextAreaInput label="Category description"
        name="description"
        register={register}
        errors={errors}
      />
      <ImageInput
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        endpoint="categoryImageUploader"
        label="category Image"
      />
      
      <ToggleInput 
      label="Publish Your Category"
      name="isActive"
      trueTitle="Active"
      falseTitle="Draft"
      isActive={isActive}
      register={register}
      />
    </div>
    <SubmitButton
      isLoading={loading}
      buttonTitle={id ? "Update Category":"Create Category"}
      loadingButtonTitle={id? "Updating Category please wait...":"Creating Category please wait..."}
    />
  </form>
  )
}
