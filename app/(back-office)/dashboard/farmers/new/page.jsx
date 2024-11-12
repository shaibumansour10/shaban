"use client";
import { generateUserCode } from "@/lib/generateUserCode";
import { makePostRequest } from "@/lib/apiRequest";
import TextInput from "@/components/formInputs/TextInput";
import ToggleInput from "@/components/formInputs/ToggleInput"
import TextAreaInput from "@/components/formInputs/TextAreaInput";
import React, { useState } from 'react';
import FormHeader from "@/components/backoffice/FormHeader";
import SubmitButton from "@/components/formInputs/SubmitButton";
import { useForm } from "react-hook-form";

export default function NewFarmer({ data }) {
  const [loading, setLoading] = useState(false);
  const [FarmerUniquewCode, setFarmerUniqueCode] = useState('');  // Set an empty string initially
  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm();
  
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
    
    // Make API request to create the Farmer
    const endpoint = "api/farmers";
    const resourceName = "Farmers";
    makePostRequest(setLoading, endpoint, data, resourceName, reset);
  }

  return (
    <div>
      <FormHeader title="New Farmer" />  
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-6"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Farmer's FullName"
            name="name"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Farmer's Phone"
            name="phone"
            type="tel"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Farmer's Email Address"
            name="email"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Farmer's Physical Address"
            name="physicalAddress"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Farmer's Contant Person"
            name="contantPerson"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Farmer's Contant Person Phone"
            name="contantPersonPhone"
            type="tel"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextAreaInput
            label="Farmer's Payment Terms"
            name="terms"
            register={register}
            errors={errors}
           
          />
          <TextAreaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            isRequired={false}
          />
          
          <ToggleInput 
          label="Publish Your Farmer"
          name="isActive"
          trueTitle="Active"
          falseTitle="Draft"/>
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Farmer"
          loadingButtonTitle="Creating Farmer... Please Wait"
        />
      </form>
    </div>
  );
}
