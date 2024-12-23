import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params:{id}}) {
    try {
        const farmer = await db.farmer.findUnique({
            where: {
                id
            },
            include:{
                products:true,
            },
        });
        

        return NextResponse.json(farmer);
    } catch (error) {
        console.error("Error fetching farmer:", error.message);
        return NextResponse.json({
            message: "Failed to fetch farmer",
            error: error.message
        }, { status: 500 });
    }
}


export async function DELETE(request,{params:{id}}) {
    try {
        const existingFarmer = await db.farmer.findUnique({
            where: {
                id
            },
        });
        if(!existingFarmer){
            return NextResponse.json({
                data:null,
                message:"farmer Not found"
            },{status:404});
        }
         const deletedFarmer =await db.farmer.delete({
            where: {
                id
            }, 
         })
        return NextResponse.json(deletedFarmer);
    } catch (error) {
        console.error("Error deleting farmer:", error.message);
        return NextResponse.json({
            message: "Failed to delete farmer",
            error: error.message
        }, { status: 500 });
    }
}