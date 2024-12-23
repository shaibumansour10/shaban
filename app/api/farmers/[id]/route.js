import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params:{id}}) {
    try {
        const farmer = await db.user.findUnique({
            where: {
                id
            },
            include:{
                farmerProfile:true,
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
        const existingUser = await db.user.findUnique({
            where: {
                id
            },
        });
        if(!existingUser){
            return NextResponse.json({
                data:null,
                message:"User Not found"
            },{status:404});
        }
         const deletedUser =await db.user.delete({
            where: {
                id
            }, 
         })
        return NextResponse.json(deletedUser);
    } catch (error) {
        console.error("Error deleting user :", error.message);
        return NextResponse.json({
            message: "Failed to delete user",
            error: error.message
        }, { status: 500 });
    }
}