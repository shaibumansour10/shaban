import { NextResponse } from "next/server";

export async function POST(request){
 try {
 const {title,slug, imageUrl,description}=await request.json();
 const newCoupons ={title,slug, imageUrl,description}
 console.log(newCoupons)
 return NextResponse.json(newCoupons)
 }  catch (error) {
console.log(error)
return NextResponse.json({
    message:"failed to create coupon",error
},{status:500})
 } 
}