"use client"
import {generateSlug} from "@/lib/generateSlug"
import {makePostRequest} from "@/lib/apiRequest"
import TextAreaInput from "@/components/formInputs/TextAreaInput"
import SubmitButton from "@/components/formInputs/SubmitButton"
import TextInput from "@/components/formInputs/TextInput"
import ImageInput from "@/components/formInputs/ImageInput"
import ToggleInput from "@/components/formInputs/ToggleInput"
import React ,{useState} from 'react'
import FormHeader from "@/components/backoffice/FormHeader"

import { useForm } from "react-hook-form"
export default function NewMarkets() {
  const [imageUrl,setImageUrl]=useState("")
  const [loading, setLoading]=useState(false)
  const {register,reset,handleSubmit,formState:{errors}}=useForm();
   async function onSubmit(data) {
    setLoading(true)
    const endpoint="api/staffs"
    const resourceName="Staff"
    const slug =generateSlug(data.title)
    data.slug=slug
 
    data.imageUrl=imageUrl;
    {/*
           name 
           password
           email
           phone
           physicalAddress
           NIN
           DOB
           notes
           isActive
            
            */}
            const code = gennerateUserCode("MSM",data.name);
            data.code=code
      console.log(data);
      makePostRequest(
        setLoading,
        endpoint,
        data,
      resourceName,
        reset
        )
        setImageUrl("")
    
}
  return (
    <div>
    <FormHeader title="New Staff"/>  
    <form 
    onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-4xl p-4 bg-white border
    border-gray-200 rounded-lg shadow sm:p-6 md:p-8
    dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-6">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
    <TextInput label="Full Name"
         name="name"
         register={register}
         errors={errors}
        
         />
    <TextInput label="NIN (Id Number)"
         name="nin"
         register={register}
         errors={errors}
          className="w-full"
         />
    <TextInput label="Password"
         name="password"
         type="password"
         register={register}
         errors={errors}
          className="w-full"
         />
    <TextInput label="Phone Number"
         name="phone"
         type="number"
         register={register}
         errors={errors}
          className="w-full"
         />
    <TextInput label="Email Address"
         name="email"
         register={register}
         errors={errors}
          className="w-full"
         />
    <TextInput label="Physical Address"
         name="PhysicalAddress"
         register={register}
         errors={errors}
          className="w-full"
         />
    <TextInput label="Date of Birth"
         name="dob"
         type="date"
         register={register}
         errors={errors}
          className="w-full"
         />
    <TextInput label="Staff Role"
         name="role"
         register={register}
         errors={errors}
          className="w-full"
         />
    <TextAreaInput label="Notes"
         name="notes"
         register={register}
         errors={errors}
         isRequired={false}
          className="w-full"
         />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="staffImageUploader"
            label="Staff PIcture"
            isRequired={false}
          />
   
    
   <ToggleInput 
          label="Staff Status"
          name="isActive"
          trueTitle="Active"
          falseTitle="Draft"/> 
                
          
    </div>
    <SubmitButton
                isLoading={loading}
                buttonTitle="Add staff"
                loadingButtonTitle="Add Staff please wait..."
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
