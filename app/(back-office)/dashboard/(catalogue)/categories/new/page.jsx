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
import ImageInput from "@/components/formInputs/ImageInput"
import { useForm } from "react-hook-form"
import { title } from "process"
export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState("")
  const markets = [
    {
      id: 1,
      title: "sproutes  Market"
    },
    {
      id: 2,
      title: "buggati  Market"
    },
    {
      id: 3,
      title: "Massidz Market"
    },
    {
      id: 4,
      title: "toyota Market"
    },
  ]
  const [loading, setLoading] = useState(false)
  const {register,reset,watch,handleSubmit,formState:{errors}}=useForm({defaultValues:{
    isActive:true,},});
    const isActive = watch("isActive");
console.log(isActive);
  async function onSubmit(data) {
    setLoading(true)
    const Endpoint = "api/categories"
    const resourceName = "Categories"
    const slug = generateSlug(data.title)
    data.slug = slug
    data.imageUrl = imageUrl
    {/*
            id =>auto
            title
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
      reset
    )

  }
  return (
    <div>
      <FormHeader title="New Category" />
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
            className="w-full" />
          <SelectInput label="Select Markets"
            name="marketIds"
            multiple="true"
            register={register}
            errors={errors}
            className="w-full"
            option={markets}
            />
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
          register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
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
