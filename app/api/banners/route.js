import { NextResponse } from "next/server";

export async function POST(request){
 try {
 const {title,imageUrl,link,isActive}=await request.json();
 const newBanner = await db.banner.create({
    data:{
        title,imageUrl,link,isActive  
    }
 })
 console.log(newBanner)
 return NextResponse.json(newBanner)
 }  catch (error) {
console.log(error)
return NextResponse.json({
    message:"failed to create banner",error
},{status:500})
 } 
}