import { NextResponse } from "next/server";
import db from "@/lib/db" ;

export async function POST(request){
 try {
 const {categoryId,
    content,
    description,
    isActive,
    imageUrl,
    slug,
    title}=await request.json();

    const existingCommunity=await db.community.findUnique({
      where:{
          slug,
      }
  });
  if(existingCommunity){
      return NextResponse({
          data:null,
          message:"Community already exist"
      },
  {status:400}
);}

const  newCommunity=await db.community.create({
   data: {categoryId,
      content,
      description,
      imageUrl,
      isActive,
      slug,
      title},
});

 
 console.log(newCommunity)
 return NextResponse.json(newCommunity)
 }  catch (error) {
console.log(error)
return NextResponse.json({
    message:"failed to create community",error
},{status:500})
 } 
}


export async function GET(request){
   try{
   const communities= await db.community.findMany({
       orderBy:{
           createdAt:"desc"
       },
   },);
   return NextResponse.json(communities)
   } catch (error) {
 console.log(error)
 return NextResponse.json({
     message:"failed to fetch communities",error
 },{status:500})
   }
 }