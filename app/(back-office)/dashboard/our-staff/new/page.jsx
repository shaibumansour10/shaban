"use client";
import { generateUserCode } from "@/lib/generateUserCode";
import { makePostRequest } from "@/lib/apiRequest";
import TextInput from "@/components/formInputs/TextInput";
import ImageInput from "@/components/formInputs/ImageInput"
import ToggleInput from "@/components/formInputs/ToggleInput"
import TextAreaInput from "@/components/formInputs/TextAreaInput";
import React, { useState } from 'react';
import FormHeader from "@/components/backoffice/FormHeader";
import SubmitButton from "@/components/formInputs/SubmitButton";
import { useForm } from "react-hook-form";

export default function NewStaff({ data }) {
     const [imageUrl,setImageUrl]=useState("")
  const [loading, setLoading] = useState(false);
  const [staffUniqueCode, setStaffUniqueCode] = useState('');  // Set an empty string initially
  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm();
  
  // Watch form fields
//   const title = watch('title=""');
  const name = watch('name=""');
  
  // onSubmit function
  async function onSubmit(data) {
    setLoading(true);
    
    // Generate Staff code based on form data (formData will have title and ExpiryData)
    const generatedCode = generateUserCode('MMS', data.name);
    
    // Ensure StaffCode is never undefined
    const StaffUniqueCode = generatedCode || ''; // Fallback to a default code if undefined
    
    // Set the Staff code in the form data before submitting
    data.StaffUniqueCode = StaffUniqueCode;
    data.imageUrl=imageUrl;
    console.log("Generated Staff Code:", staffUniqueCode);
    console.log("Form Data:", data);
    
    // Make API request to create the Staff
    const endpoint = "api/staffs";
    const resourceName = "Staff";
    makePostRequest(setLoading, endpoint, data, resourceName, reset);
  }

  return (
    <div>
      <FormHeader title="New Staff" />  
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-6"
      >
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
    </div>
  );
}
