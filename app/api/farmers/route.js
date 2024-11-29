import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request){
 try {
   // {name,
   //    phone,
   //    email,
   //    physicalAddress,
   //    contantPerson,
   //    contantPersonPhone,
   //    notes,
   //    isActive,
   //    products,
   //    landSize,
   //    mainCrop,
   //    userId,
   //    farmerUniqueCode,
   //    profileImageUrl,
   //    terms}
 const farmerData=await request.json();
 const newFarmerProfile = await db.farmerProfile.create({
   data:{
    //  slug               :farmerData.slug,
      name               :farmerData.name,
      phone              :farmerData.phone,
      email            :farmerData.email,
      physicalAddress   :farmerData.physicalAddress,
      contactPerson      :farmerData.contactPerson,
      contactPersonPhone :farmerData.contactPersonPhone,
      profileImageUrl  :farmerData.profileImageUrl,
      isActive          :farmerData.isActive,
      notes              :farmerData.notes,
      terms            :farmerData.terms,
      farmerUniqueCode:farmerData.farmerUniqueCode,
      products           :farmerData.products,
      landSize           :parseFloat(farmerData.landSize),
      mainCrop           :farmerData.mainCrop,
      userId           :farmerData.userId,
   }
 })
 console.log(newFarmerProfile)
 return NextResponse.json(newFarmerProfile)
 }  catch (error) {
console.log(error)
return NextResponse.json({
    message:"failed to create Farmer",error
},{status:500})
 } 
}

export async function GET(request){
  try{
  const profile = await db.farmerProfile.findMany({
    orderBy:{
        createdAt:"desc"
    },
},);
  return NextResponse.json(profile)
  } catch (error) {
console.log(error)
return NextResponse.json({
    message:"failed to fetch profile",error
},{status:500})
  }
}