
import React from 'react';
import NewFarmerForm from "@/components/backoffice/NewFarmerForm";0
import FormHeader from "@/components/backoffice/FormHeader";

export default function NewFarmer() {
  return (
    <div>
      <FormHeader title="New Farmer" />  
      <NewFarmerForm/>
    </div>
  );
}
