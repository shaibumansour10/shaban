import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params:{id}}) {
    try {
        const market = await db.market.findUnique({
            where: {
                id
            },
            include:{
                products:true,
            },
        });
        

        return NextResponse.json(market);
    } catch (error) {
        console.error("Error fetching market:", error.message);
        return NextResponse.json({
            message: "Failed to fetch market",
            error: error.message
        }, { status: 500 });
    }
}


export async function DELETE(request,{params:{id}}) {
    try {
        const existingMarket = await db.market.findUnique({
            where: {
                id
            },
        });
        if(!existingMarket){
            return NextResponse.json({
                data:null,
                message:"market Not found"
            },{status:404});
        }
         const deletedMarket =await db.market.delete({
            where: {
                id
            }, 
         })
        return NextResponse.json(deletedMarket);
    } catch (error) {
        console.error("Error deleting market:", error.message);
        return NextResponse.json({
            message: "Failed to delete market",
            error: error.message
        }, { status: 500 });
    }
}