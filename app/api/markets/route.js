import { NextResponse } from "next/server";
import db from "@/lib/db" 

export async function POST(request){
 try {
 const {title,slug
    ,categoryIds,logoUrl,description,isActive}=await request.json();

    const existingMarket=await db.market.findUnique({
      where:{
          slug,
      }
  });
  if(existingMarket){
      return NextResponse({
          data:null,
          message:"Market already exist"
      },
  {status:400}
);}

const  newMarket=await db.market.create({
   data: { title,slug
      ,categoryIds,logoUrl,description,isActive},
});

 console.log(newMarket)
 return NextResponse.json(newMarket)
 }  catch (error) {
console.log(error)
return NextResponse.json({
    message:"failed to create market",error
},{status:500})
 } 
}

export async function GET(request){
   try{
   const markets= await db.market.findMany({
       orderBy:{
           createdAt:"desc"
       },
   },);
   return NextResponse.json(markets)
   } catch (error) {
 console.log(error)
 return NextResponse.json({
     message:"failed to fetch markets",error
 },{status:500})
   }
 }