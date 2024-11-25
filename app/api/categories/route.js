 import db from "@/lib/db"
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
      
        const { title, slug, imageUrl, description ,isActive} = await request.json();

        const existingCategory=await db.category.findUnique({
            where:{
                slug,
            }
        });
        if(existingCategory){
            return NextResponse({
                data:null,
                message:"Category already exist"
            },
        {status:400}
    );
        } 
        const  newCategory=await db.category.create({
            data: { title, slug, imageUrl, description ,isActive},
        });
        console.log(newCategory)
        return NextResponse.json(newCategory)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "failed to create Category", error
        }, { status: 500 })
    }
}


export async function GET(request){
    try{
    const categories = await db.category.findMany({
        orderBy:{
            createdAt:"desc"
        },
    },);
    return NextResponse.json(categories)
    } catch (error) {
  console.log(error)
  return NextResponse.json({
      message:"failed to fetch categories",error
  },{status:500})
    }
  }