import { PrismaClient } from '@prisma/client';
import db from "@/lib/db"
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


export async function GET(request){
    try{
    const banners = await db.banner.findMany({
        orderBy:{
            createdAt:"desc"
        },
    },);
    return NextResponse.json(banners)
    } catch (error) {
  console.log(error)
  return NextResponse.json({
      message:"failed to fetch banners",error
  },{status:500})
    }
  }