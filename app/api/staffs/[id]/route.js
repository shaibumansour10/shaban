import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params:{id}}) {
    try {
        const staff = await db.staff.findUnique({
            where: {
                id
            },
            include:{
                products:true,
            },
        });
        

        return NextResponse.json(staff);
    } catch (error) {
        console.error("Error fetching staff:", error.message);
        return NextResponse.json({
            message: "Failed to fetch staff",
            error: error.message
        }, { status: 500 });
    }
}


export async function DELETE(request,{params:{id}}) {
    try {
        const existingStaff = await db.staff.findUnique({
            where: {
                id
            },
        });
        if(!existingStaff){
            return NextResponse.json({
                data:null,
                message:"staff Not found"
            },{status:404});
        }
         const deletedStaff =await db.staff.delete({
            where: {
                id
            }, 
         })
        return NextResponse.json(deletedStaff);
    } catch (error) {
        console.error("Error deleting staff:", error.message);
        return NextResponse.json({
            message: "Failed to delete staff",
            error: error.message
        }, { status: 500 });
    }
}