"use client"
import {generateCouponCode} from "@/lib/generateCouponCode"
import {makePostRequest} from "@/lib/apiRequest"
import TextAreaInput from "@/components/formInputs/TextAreaInput"
import SubmitButton from "@/components/formInputs/SubmitButton"
import TextInput from "@/components/formInputs/TextInput"
import React ,{useState} from 'react'
import FormHeader from "@/components/backoffice/FormHeader"
import ImageInput from "@/components/formInputs/ImageInput"
import { useForm } from "react-hook-form"
export default function NewCoupon() {
 
  const [loading, setLoading]=useState(false)
  const [CouponCode, setCouponCode]=useState()
  const {register,reset,handleSubmit,formState:{errors}}=useForm();
   async function onSubmit(data) {
    setLoading(true)
    const endpoint="api/coupons"
    const resourceName="Coupons"
     const CouponCode =generateCouponCode(data.title)
    // data.slug=slug
     console.log(data);
    // data.imageUrl=imageUrl
    {/*
            id =>auto
            title
            code=>auto
            validity data
            
            
            */}
      console.log(data);
      makePostRequest(
        setLoading,
        endpoint,
        data,
      resourceName,
        reset
        )
    
}
  return (
    <div>
    <FormHeader title="New Coupons"/>  
    <form 
    onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-4xl p-4 bg-white border
    border-gray-200 rounded-lg shadow sm:p-6 md:p-8
    dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-6">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

    <TextInput label="coupons Title"
         name="title"
         register={register}
         errors={errors}
         
         />
    
    <TextInput label="coupons Code"
         name="CouponCode"
         register={register}
         errors={errors}
         className="w-full"
         />
         <TextInput label="coupons ExpiryData"
         name="ExpiryData"
         type="date"
         register={register}
         errors={errors}
         className="w-full"
         />
    
                
    </div>
    <SubmitButton
                isLoading={loading}
                buttonTitle="Create Coupon"
                loadingButtonTitle="Create Coupon please wait..."
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
