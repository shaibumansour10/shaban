"use client";
import { generateCouponCode } from "@/lib/generateCouponCode";
import { makePostRequest } from "@/lib/apiRequest";
import TextInput from "@/components/formInputs/TextInput";
import React, { useState } from 'react';
import FormHeader from "@/components/backoffice/FormHeader";
import SubmitButton from "@/components/formInputs/SubmitButton";
import { useForm } from "react-hook-form";

export default function NewCoupon({ data }) {
  const [loading, setLoading] = useState(false);
  const [CouponCode, setCouponCode] = useState('');  // Set an empty string initially
  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm();
  
  // Watch form fields
  const title = watch('title=""');
  const ExpiryData = watch('ExpiryData=""');
  
  // onSubmit function
  async function onSubmit(formData) {
    setLoading(true);
    
    // Generate coupon code based on form data (formData will have title and ExpiryData)
    const generatedCode = generateCouponCode(formData.title, formData.ExpiryData);
    
    // Ensure couponCode is never undefined
    const couponCode = generatedCode || ''; // Fallback to a default code if undefined
    
    // Set the coupon code in the form data before submitting
    formData.couponCode = couponCode;
    
    console.log("Generated Coupon Code:", couponCode);
    console.log("Form Data:", formData);
    
    // Make API request to create the coupon
    const endpoint = "api/coupon";
    const resourceName = "Coupon";
    makePostRequest(setLoading, endpoint, formData, resourceName, reset);
  }

  return (
    <div>
      <FormHeader title="New Coupon" />  
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-6"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Coupon Title"
            name="title"
            register={register}
            errors={errors}
           
          />
          <TextInput
            label="Coupon Expiry Date"
            name="ExpiryData"
            type="date"
            register={register}
            errors={errors}
           
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Coupon"
          loadingButtonTitle="Creating Coupon... Please Wait"
        />
      </form>
    </div>
  );
}