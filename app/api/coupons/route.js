import { NextResponse } from "next/server";

export async function POST(request){
 try {
 const {title,couponCode, ExpiryData}=await request.json();
 const newCoupons ={title,couponCode, ExpiryData}
 console.log(newCoupons)
 return NextResponse.json(newCoupons)
 }  catch (error) {
console.log(error)
return NextResponse.json({
    message:"failed to create coupon",error
},{status:500})
 } 
}