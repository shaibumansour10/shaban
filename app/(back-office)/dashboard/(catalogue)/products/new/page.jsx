"use client"
import { generateSlug } from "@/lib/generateSlug"
import { makePostRequest } from "@/lib/apiRequest"
import TextAreaInput from "@/components/formInputs/TextAreaInput"
import SubmitButton from "@/components/formInputs/SubmitButton"
import ArrayIterms from "@/components/formInputs/ArrayIterms"
import TextInput from "@/components/formInputs/TextInput"
import SelectInput from "@/components/formInputs/SelectInput"
import React, { useState } from 'react'
import FormHeader from "@/components/backoffice/FormHeader"
import ImageInput from "@/components/formInputs/ImageInput"
import { useForm } from "react-hook-form"
import { title } from "process"
import { Plus, X } from "lucide-react"

export default function NewProduct() {
 
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
  const [tags, setTags]=useState(["tag1","tag4"]);
 
  // TAGS END
  const [loading, setLoading] = useState(false)
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  async function onSubmit(data) {
    setLoading(true)
    const Endpoint = "api/products"
    const resourceName = "Products"
    const slug = generateSlug(data.title)
    data.slug = slug
    data.tags=tags
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
          
          <ArrayIterms setItems={setTags} items={tags}/> 
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
