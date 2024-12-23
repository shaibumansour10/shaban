import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params:{id}}) {
    try {
        const community = await db.community.findUnique({
            where: {
                id
            },
            include:{
                products:true,
            },
        });
        

        return NextResponse.json(community);
    } catch (error) {
        console.error("Error fetching community:", error.message);
        return NextResponse.json({
            message: "Failed to fetch community",
            error: error.message
        }, { status: 500 });
    }
}


export async function DELETE(request,{params:{id}}) {
    try {
        const existingCommunity = await db.community.findUnique({
            where: {
                id
            },
        });
        if(!existingCommunity){
            return NextResponse.json({
                data:null,
                message:"community Not found"
            },{status:404});
        }
         const deletedCommunity =await db.community.delete({
            where: {
                id
            }, 
         })
        return NextResponse.json(deletedCommunity);
    } catch (error) {
        console.error("Error deleting community:", error.message);
        return NextResponse.json({
            message: "Failed to delete community",
            error: error.message
        }, { status: 500 });
    }
}