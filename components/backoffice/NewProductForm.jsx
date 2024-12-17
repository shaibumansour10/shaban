"use client"
import { generateSlug } from "@/lib/generateSlug"
import { generateUserCode } from "@/lib/generateUserCode"
import { makePostRequest } from "@/lib/apiRequest"
import TextAreaInput from "@/components/formInputs/TextAreaInput"
import SubmitButton from "@/components/formInputs/SubmitButton"
import ArrayIterms from "@/components/formInputs/ArrayIterms"
import ToggleInput from "@/components/formInputs/ToggleInput"
import TextInput from "@/components/formInputs/TextInput"
import SelectInput from "@/components/formInputs/SelectInput"
import React, { useState } from 'react'
import FormHeader from "@/components/backoffice/FormHeader"
import ImageInput from "@/components/formInputs/ImageInput"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"


export default function NewProductForm({categories,farmers}) {
 
  const [imageUrl, setImageUrl] = useState("")
  const [tags, setTags]=useState([]);
 
  // TAGS END
  const [loading, setLoading] = useState(false)
  const {register,reset,watch,handleSubmit,formState:{errors}}=useForm({defaultValues:{
    isActive:true,
    isWholesale:false,
  },});
    const isActive = watch("isActive");
    const  isWholesale = watch("isWholesale");
console.log(isActive);
console.log(isWholesale);
 
const router =useRouter();
function redirect(){
  router.push("/dashboard/products")
}
  async function onSubmit(data) {
    setLoading(true)
    const Endpoint = "api/products"
    const resourceName = "Products"
    const slug = generateSlug(data.title)
    const productCode = generateUserCode('MLP',data.title)
    data.slug = slug
    data.tags=tags
    data.qty=1;
    data.productCode=productCode
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
      reset,
      redirect,
    )
    setImageUrl();
    setTags([]);

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
          <TextInput label="Product Stock"
            name="productStock"
            register={register}
            errors={errors}
            className="w-full" />
           
          {/* <TextInput label="Quantity"
            name="qty"
            register={register}
            errors={errors}
            className="w-full" /> */}
            <TextInput label="unit of measurement(eg kilograms)"
            name="unit"
            type="number"
            register={register}
            errors={errors}
            className="w-full"/>
          
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
            <ToggleInput 
          label="Supports Wholesale selling"
          name="isWholesale"
          trueTitle="Supported"
          falseTitle="Not Supported"
          isActive={isWholesale}
          register={register}
          />
        {
          isWholesale&&(
            <>
            <TextInput label="wholesale Price"
            name="wholeSalesPrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full" />
            <TextInput label="Minimum Wholesales Qty"
            name="wholesaleQty"
            type="number"
            register={register}
            errors={errors}
            className="w-full" />
            </>
          )
        }
            
            <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="ProductImageUploader"
            label="Product Image"
          />
          
          <ArrayIterms setItems={setTags} itemTitle="Add Tag" items={tags}/> 
          <TextAreaInput label="Product description"
            name="description"
            register={register}
            errors={errors}
          />
          {/* Tags */}
         
          <ToggleInput 
          label="Publish Your Product"
          name="isActive"
          trueTitle="Active"
          falseTitle="Draft"
          isActive={isActive}
          register={register}
          />
          
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
