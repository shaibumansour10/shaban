"use client"
import {generateSlug} from "@/lib/generateSlug"
import {makePostRequest ,makePutRequest} from "@/lib/apiRequest"
import { useRouter } from "next/navigation"
import TextAreaInput from "@/components/formInputs/TextAreaInput"
import SubmitButton from "@/components/formInputs/SubmitButton"
import TextInput from "@/components/formInputs/TextInput"
import ToggleInput from "@/components/formInputs/ToggleInput"
import React ,{useState} from 'react'
import FormHeader from "@/components/backoffice/FormHeader"
import ImageInput from "@/components/formInputs/ImageInput"
import { useForm } from "react-hook-form"
export default function BannerForms({updateData={}}) {
     const initialImageUrl=updateData?.imageUrl??""
    const id= updateData?.id??""
  const [imageUrl,setImageUrl]=useState(initialImageUrl)
  const [loading, setLoading]=useState(false)
  const {register,reset,watch,handleSubmit,formState:{errors}}=useForm({defaultValues:{
    isActive:true,
...updateData,
},});
    const isActive = watch("isActive");
console.log(isActive);
const router = useRouter();
function redirect(){
  router.push("/dashboard/banners")
}
   async function onSubmit(data) {
    setLoading(true)
    const endpoint="api/banners"
    const resourceName="Banner"
    const slug =generateSlug(data.title)
    data.slug=slug
 
    data.imageUrl=imageUrl;
    {/*
            id =>auto
            title
            slag=>auto
            link
            image
            isActive
            
            */}
      console.log(data);
      if(id){
        makePutRequest(
            setLoading,
            `api/banners/${id}`,
            data,
          "Banner",
          redirect,
            reset,redirect,
            )
      }else{
        makePostRequest(
            setLoading,
            endpoint,
            data,
          resourceName,
          redirect,
            reset,redirect,
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
    <TextInput label="Banner Title"
         name="title"
         register={register}
         errors={errors}
         />
    <TextAreaInput label="Banner link"
              name="link"
              type="url"
              register={register}
              errors={errors}
                 
                    
                />
                <ImageInput
                    imageUrl={imageUrl}
                    setImageUrl={setImageUrl}
                    endpoint="BannerImageUploader"
                    label="Banner Image"
                />
                
          <ToggleInput 
          label="Publish Your Banner"
          name="isActive"
          trueTitle="Active"
          falseTitle="Draft"
          isActive={isActive}
          register={register}/>
    </div>
    <SubmitButton
                isLoading={loading}
                buttonTitle={id? "Update Banner": "Create Banner"}
                loadingButtonTitle={id? "Updating Banner please wait...":"Creating Banner please wait..."}
            />
    </form>
  )
}
