import { NextResponse } from "next/server";

export async function POST(request){
 try {
 const {categoryId,
    content,
    description,
    isActive,
    imageUrl,
    slug,
    title}=await request.json();
 const newCommunity ={categoryId,
    content,
    description,
    imageUrl,
    isActive,
    slug,
    title
    }
 console.log(newCommunity)
 return NextResponse.json(newCommunity)
 }  catch (error) {
console.log(error)
return NextResponse.json({
    message:"failed to create community",error
},{status:500})
 } 
}