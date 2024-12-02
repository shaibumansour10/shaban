"use client";
import { generateUserCode } from "@/lib/generateUserCode";
import { generateSlug } from "@/lib/generateSlug"
import { makePostRequest } from "@/lib/apiRequest";
import ToggleInput from "@/components/formInputs/ToggleInput";
import TextInput from "@/components/formInputs/TextInput";
import ImageInput from "@/components/formInputs/ImageInput";
import ArrayIterms from "@/components/formInputs/ArrayIterms";
import TextAreaInput from "@/components/formInputs/TextAreaInput";
import React, { useState } from 'react';
import { useRouter } from "next/navigation"
import SubmitButton from "@/components/formInputs/SubmitButton";
import { useForm } from "react-hook-form";

export default function NewFarmerForm({ user }) {
  const [loading, setLoading] = useState(false);
  const [imageUrl,setImageUrl]=useState("")
  const [products,setProducts]=useState([]);

  const [farmerUniquewCode, setFarmerUniqueCode] = useState('');  // Set an empty string initially
  const {register,reset,watch,handleSubmit,formState:{errors}}=useForm({defaultValues:{
    isActive:true,
     ...user,
  },});
  const router = useRouter();
  function redirect(){
    router.push("/dashboard/farmers")
  }
    const isActive = watch("isActive");
console.log(isActive);
  
  // Watch form fields
//   const title = watch('title=""');
  const name = watch('name=""');
  
  // onSubmit function
  async function onSubmit(data) {
    setLoading(true);
    
    // Generate Farmer code based on form data (formData will have title and ExpiryData)
    const generatedCode = generateUserCode('SMG', data.name);
    
    // Ensure FarmerCode is never undefined
    const farmerUniqueCode = generatedCode || ''; // Fallback to a default code if undefined
    
    // Set the Farmer code in the form data before submitting
    data.farmerUniqueCode = farmerUniqueCode;
    
    console.log("Generated Farmer Code:", farmerUniqueCode);
    console.log("Form Data:", data);
    data.imageUrl=imageUrl;
    data.products=products;
    data.userId=user.id;
    const slug = generateSlug(data.title)
    data.slug = slug
    
    // Make API request to create the Farmer
    const endpoint = "api/farmers";
    const resourceName = "Farmer profile";
    makePostRequest(setLoading, endpoint, data, resourceName, reset,redirect);
  }

  return (
    
    <form 
    onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-6"
  >
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
      
      <TextInput
        label="Supplier's FullName"
        name="name"
        register={register}
        errors={errors}
        className="w-full"
      />
      <TextInput
        label="Supplier's Phone"
        name="phone"
        type="tel"
        register={register}
        errors={errors}
        className="w-full"
      />
      <TextInput
        label="Supplier's Email Address"
        name="email"
        register={register}
        errors={errors}
        className="w-full"
      />
      <TextInput
        label="Supplier's Physical Address"
        name="physicalAddress"
        register={register}
        errors={errors}
        className="w-full"
      />
      <TextInput
        label="Supplier's Contant Person"
        name="contantPerson"
        register={register}
        errors={errors}
        className="w-full"
      />
      <TextInput
        label="Supplier's Contant Person Phone"
        name="contantPersonPhone"
        type="tel"
        register={register}
        errors={errors}
        className="w-full"
      />
      <TextInput
        label="land size"
        name="landSize"
        type="number"
        register={register}
        errors={errors}
        className="w-full"
      />
      <TextInput
        label="main Crop"
        name="mainCrop"
        type="text"
        register={register}
        errors={errors}
        className="w-full"
      />
      
      {/* <TextAreaInput
        label="Supplier's Payment Terms"
        name="terms"
        register={register}
        errors={errors}
        isRequired={false}
      /> */}
      <TextAreaInput
        label="Notes"
        name="notes"
        register={register}
        errors={errors}
        isRequired={false}
      />
     
      <ImageInput
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                endpoint="farmerProfileUploader"
                label="FarmerProfile"
            />
       <ArrayIterms items={products} setItems={setProducts} itemTitle="products"/>
      <ToggleInput 
      register={register}
      label="Publish Your Supplier"
      name="isActive"
      trueTitle="Active"
      isActive={isActive}
      falseTitle="Draft"/>
    </div>
    <SubmitButton
      isLoading={loading}
      buttonTitle="Create Farmer"
      loadingButtonTitle="Creating Supplier Please Wait... "
    />
  </form>
  );
}
