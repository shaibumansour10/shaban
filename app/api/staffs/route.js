import { NextResponse } from "next/server";

export async function POST(request){
 try {
 const {
   PhysicalAddress,
   StaffUniqueCode,
   dob,
   email,
   imageUrl,
   name,
   nin,
   notes,
   password,
   phone,
   role}=await request.json();
 const newStaff ={  PhysicalAddress,
   StaffUniqueCode,
   dob,
   email,
   imageUrl, 
   name,
   nin,
   notes,
   password,
   phone,
   role}
 console.log(newStaff)
 return NextResponse.json(newStaff)
 }  catch (error) {
console.log(error)
return NextResponse.json({
    message:"failed to create Staff",error
},{status:500})
 } 
}