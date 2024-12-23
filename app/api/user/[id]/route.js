import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(request,{params:{id}}){
    try{
    const user = await db.user.findUnique({
     where:{
        id,
    }
  },);
    return NextResponse.json(user)
    } catch (error) {
  console.log(error)
  return NextResponse.json({
      message:"failed to fetch user",error
  },{status:500})
    }
  }