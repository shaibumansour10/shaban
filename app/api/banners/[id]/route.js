import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params:{id}}) {
    try {
        const banner = await db.banner.findUnique({
            where: {
                id
            },
            include:{
                products:true,
            },
        });
        

        return NextResponse.json(banner);
    } catch (error) {
        console.error("Error fetching banner:", error.message);
        return NextResponse.json({
            message: "Failed to fetch banner",
            error: error.message
        }, { status: 500 });
    }
}


export async function DELETE(request,{params:{id}}) {
    try {
        const existingBanner = await db.banner.findUnique({
            where: {
                id
            },
        });
        if(!existingBanner){
            return NextResponse.json({
                data:null,
                message:"banner Not found"
            },{status:404});
        }
         const deletedBanner =await db.banner.delete({
            where: {
                id
            }, 
         })
        return NextResponse.json(deletedBanner);
    } catch (error) {
        console.error("Error deleting banner:", error.message);
        return NextResponse.json({
            message: "Failed to delete banner",
            error: error.message
        }, { status: 500 });
    }
}