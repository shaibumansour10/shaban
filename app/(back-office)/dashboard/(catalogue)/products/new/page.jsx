"use client"
import { generateSlug } from "@/lib/generateSlug"
import { makePostRequest } from "@/lib/apiRequest"
import TextAreaInput from "@/components/formInputs/TextAreaInput"
import SubmitButton from "@/components/formInputs/SubmitButton"
import TextInput from "@/components/formInputs/TextInput"
import SelectInput from "@/components/formInputs/SelectInput"
import React, { useState } from 'react'
import FormHeader from "@/components/backoffice/FormHeader"
import ImageInput from "@/components/formInputs/ImageInput"
import { useForm } from "react-hook-form"
import { title } from "process"
import { Plus, X } from "lucide-react"
import { useRouter } from "next/navigation"
export default function NewProduct() {
  const router=useRouter()
  const [imageUrl, setImageUrl] = useState("")
  const categories = [
    {
      id: 1,
      title: "Category 1"
    },
    {
      id: 2,
      title: "Category 2"
    },
    {
      id: 3,
      title: "Category 3"
    },
    {
      id: 4,
      title: "Category 4"
    },
  ];
  const farmers = [
    {
      id: 1,
      title: "Farmer 1"
    },
    {
      id: 2,
      title: "Farmer 2"
    },
    {
      id: 3,
      title: "Farmer 3"
    },
    {
      id: 4,
      title: "Farmer 4"
    },
  ];
  const [tags,setTags]=useState(["tag1","tag2"])
  const [showTagForm,setShowTagForm]=useState(false)
  const [loading, setLoading] = useState(false)
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  async function onSubmit(data) {
    setLoading(true)
    const Endpoint = "api/products"
    const resourceName = "Products"
    const slug = generateSlug(data.title)
    data.slug = slug
    data.imageUrl = imageUrl
    {/*
            id =>auto
            title
            slag=>auto
            description
            image/images[]
            SKU
            barcode
            productprice
            salePrice
            category
            farmer
            tags[]
            productQuantity
            
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
      <FormHeader title="New Product" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border
    border-gray-200 rounded-lg shadow sm:p-6 md:p-8
    dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-6">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput label="Product Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput label="Product SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full" />
          <TextInput label="Product BarCode"
            name="barcode"
            register={register}
            errors={errors}
            className="w-full" />
          <TextInput label="Product Price"
            name="productprice"
            type="number"
            register={register}
            errors={errors}
            className="w-full" />
          <TextInput label="Product Sales Price(Discounted)"
            name="salesprice"
            type="number"
            register={register}
            errors={errors}
            className="w-full" />
          <SelectInput label="Select Category"
            name="catogeryId"
            register={register}
            errors={errors}
            className="w-full"
            option={categories}
            />
          <SelectInput label="Select Farmer"
            name="farmerId"
            register={register}
            errors={errors}
            className="w-full"
            option={farmers}
            />
            <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="ProductImageUploader"
            label="Product Image"
          />
          <div className="sm:col-span-2">
          {
           showTagForm?(
           <div class="flex items-center max-w-lg mx-auto">   
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"/>
                    </svg>
                </div>
                <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." />
                <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
                    
                </button>
            </div>
            <button type="button" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               <Plus className="w-4 h-4 me-2"/>
               Add
            </button>
            <button onClick={()=>router.back} className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              <X className="w-4 h-4 me-2"/>
            </button>
        </div>):(
          <button onClick={()=>setShowTagForm(true)}
           type="button"
           className=" rounded-md flex items-center space-x-3 text-black dark:text-white px-2 py-2">
             <Plus/>
             <span>Add Tags</span>
           </button>)
          }

 
          </div>
           
          <TextAreaInput label="Product description"
            name="description"
            register={register}
            errors={errors}
          />
          {/* Tags */}
         
          
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Product"
          loadingButtonTitle="Create Product please wait..."
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
