import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params:{id}}) {
    try {
        const category = await db.category.findUnique({
            where: {
                id
            },
            include:{
                products:true,
            },
        });
        

        return NextResponse.json(category);
    } catch (error) {
        console.error("Error fetching category:", error.message);
        return NextResponse.json({
            message: "Failed to fetch category",
            error: error.message
        }, { status: 500 });
    }
}


export async function DELETE(request,{params:{id}}) {
    try {
        const existingCategory = await db.category.findUnique({
            where: {
                id
            },
        });
        if(!existingCategory){
            return NextResponse.json({
                data:null,
                message:"category Not found"
            },{status:404});
        }
         const deletedCategory =await db.category.delete({
            where: {
                id
            }, 
         })
        return NextResponse.json(deletedCategory);
    } catch (error) {
        console.error("Error deleting category:", error.message);
        return NextResponse.json({
            message: "Failed to delete category",
            error: error.message
        }, { status: 500 });
    }
}