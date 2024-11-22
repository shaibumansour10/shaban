import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request){
 try {
    const { title, couponCode, ExpiryData,isActive } = await request.json();

 
    const newCoupon = await db.Coupon.create({
      data: {
        title,
        couponCode,
        ExpiryData, // Pass the Date object
        isActive
      },
    });
    
 console.log(newCoupon)
 return NextResponse.json(newCoupon)
 }  catch (error) {
console.log(error)
return NextResponse.json({
    message:"failed to create coupon",error
},{status:500})
 } 
}