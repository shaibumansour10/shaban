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
    farmerUniqueCode,
    terms}=await request.json();
 const newFarmer ={name,
    phone,
    email,
    physicalAddress,
    contantPerson,
    contantPersonPhone,
    notes,
    farmerUniqueCode,
    terms}
 console.log(newFarmer)
 return NextResponse.json(newFarmer)
 }  catch (error) {
console.log(error)
return NextResponse.json({
    message:"failed to create Farmer",error
},{status:500})
 } 
}