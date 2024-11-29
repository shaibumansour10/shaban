import { getData } from "@/lib/getData";
import NewProductForm from "@/components/backoffice/NewProductForm";
import React from "react";

export default async function NewProduct() {
  try {
    // Fetch categories and users (farmers)
    const categoriesData = await getData("categories");
    const usersData = await getData("users");

    // Check if categoriesData is an array, otherwise default to empty array
    const categories = Array.isArray(categoriesData)
      ? categoriesData.map((category) => ({
          id: category.id,
          title: category.title,
        }))
      : [];

    // Ensure usersData is an array, then filter for farmers
    const farmersData = Array.isArray(usersData)
      ? usersData.filter((user) => user.role === "FARMER")
      : [];
    
    // Map the farmers to a desired structure
    const farmers = farmersData.map((farmer) => ({
      id: farmer.id,
      title: farmer.name,
    }));

    // Render the form with the categories and farmers data
    return <NewProductForm categories={categories} farmers={farmers} />;
  } catch (error) {
    // Log the error and show a fallback UI (e.g., a loading message or error)
    console.error("Error fetching data:", error);
    return <div>Error loading data, please try again later.</div>;
  }
}

// import {getData} from "@/lib/getData"
// import NewProductForm from "@/components/backoffice/NewProductForm"
// import React from 'react'

// export default async function NewProduct() {
//    // categories and farmer
//    const categoriesData = await getData("categories")
//    const usersData = await getData("users")
//    const categories =categoriesData.map((category)=>{
//     return{
//       id:category.id,
//       title:category.title,
//     }
//    })
//    const farmersData =usersData.filter((user)=>user.role==="FARMER");
//    const farmers =farmersData.map((farmer)=>{
//     return{
//       id:farmer.id,
//       title:farmer.name,
//     }
//    })
//   return (
   
//    <NewProductForm categories={categories} farmers={farmers}/>
//   )
// }
