import { NextResponse } from "next/server";

export async function POST(request){
 try {
 const {name,
    phone,
    email,
    physicalAddress,
    contantPerson,
    contantPersonPhone,
    notes,
    isActive,
    farmerUniqueCode,
    profileImageUrl,
    terms}=await request.json();
 const newFarmerProfile ={name,
    phone,
    email,
    physicalAddress,
    contantPerson,
    contantPersonPhone,
    notes,
    isActive,
    farmerUniqueCode,
    profileImageUrl,
    terms}
 console.log(newFarmerProfile)
 return NextResponse.json(newFarmeProfile)
 }  catch (error) {
console.log(error)
return NextResponse.json({
    message:"failed to create Farmer",error
},{status:500})
 } 
}