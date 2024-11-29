import { getData } from "@/lib/getData";
import NewMarketForm from "@/components/backoffice/NewMarketForm";
import React from 'react'

export default async function NewMarkets() {
  try {
    // Fetch categories and users (farmers)
    const categoriesData = await getData("categories");
    

    // Check if categoriesData is an array, otherwise default to empty array
    const categories = Array.isArray(categoriesData)
      ? categoriesData.map((category) => ({
          id: category.id,
          title: category.title,
        }))
      : [];
    return <NewMarketForm categories={categories}/>;
  } catch (error) {
    // Log the error and show a fallback UI (e.g., a loading message or error)
    console.error("Error fetching data:", error);
    return <div>Error loading data, please try again later.</div>;
  }
     
 
  }