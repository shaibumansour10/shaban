"use client"
import { generateSlug } from "@/lib/generateSlug"
import { makePostRequest } from "@/lib/apiRequest"
import TextAreaInput from "@/components/formInputs/TextAreaInput"
import SubmitButton from "@/components/formInputs/SubmitButton"
import TextInput from "@/components/formInputs/TextInput"
import ToggleInput from "@/components/formInputs/ToggleInput"
import SelectInput from "@/components/formInputs/SelectInput"
import React, { useState } from 'react'
import FormHeader from "@/components/backoffice/FormHeader"
import { useRouter } from "next/navigation"

import ImageInput from "@/components/formInputs/ImageInput"
import dynamic from "next/dynamic";
const QuillEditor =dynamic(
  () => import("@/components/formInputs/QuillEditor"),
  {
    ssr:false
  }
);
import { useForm } from "react-hook-form"

export default function NewCommunityForm({categories}) {
  const [imageUrl, setImageUrl] = useState("")
 
  const [loading, setLoading] = useState(false)
  const {register,reset,watch,handleSubmit,formState:{errors}}=useForm({defaultValues:{
    isActive:true,},});
    const isActive = watch("isActive");
console.log(isActive);
const router=useRouter();
function redirect(){
  router.push("/dashboard/mansour-community")
}
  //Quill Editor
  const [content, setContent]=useState('');
  async function onSubmit(data) {
    setLoading(true)
    const Endpoint = "api/community"
    const resourceName = "Community"
    const slug = generateSlug(data.title)
    data.slug = slug
    data.content=content
    data.imageUrl = imageUrl
    setImageUrl("");
    setContent("");
    {/*
            id =>auto
            expertId
            title
            content=>richText
            categoryId
            password=D4nt9ukSrBdGHPW5
            slag=>auto
            description
            image
            
            */}
    console.log(data);
    makePostRequest(
      setLoading,
      Endpoint,
      data,
      resourceName,
      reset,
      redirect
    )

  }
  return (
    <div>
      <FormHeader title="New Community" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border
    border-gray-200 rounded-lg shadow sm:p-6 md:p-8
    dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-6">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput label="Community Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full" />
          <SelectInput label="Select Categories"
            name="categoryId"
            register={register}
            errors={errors}
            className="w-full"
            option={categories}
            />
          <TextAreaInput label="Community description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="communityImageUploader"
            label="Community Thumbnail"
          />
          {/* content */}
          <QuillEditor content={content} setContent={setContent}
          label="Blog content"
          className="sm:col-span-2"
          />
          {/* content end  */}
          
          <ToggleInput 
          label="Publish Your Community"
          name="isActive"
          trueTitle="Active"
          falseTitle="Draft"
          isActive={isActive}
          register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Community"
          loadingButtonTitle="Create Community please wait..."
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
