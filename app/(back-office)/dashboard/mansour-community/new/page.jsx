import { getData } from "@/lib/getData";
import NewCommunityForm from "@/components/backoffice/NewCommunityForm";
import React from 'react'

export default async function NewCommunities() {
  try {
    // Fetch categories and users (farmers)
    const communityData = await getData("community");
    

    // Check if categoriesData is an array, otherwise default to empty array
    const categories = Array.isArray(communityData)
      ? communityData.map((category) => ({
          id: category.id,
          title: category.title,
        }))
      : [];
    return <NewCommunityForm categories={categories}/>;
  } catch (error) {
    // Log the error and show a fallback UI (e.g., a loading message or error)
    console.error("Error fetching data:", error);
    return <div>Error loading data, please try again later.</div>;
  }
     
 
  }