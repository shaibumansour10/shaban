import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params:{id}}) {
    try {
        const categories = await db.category.findUnique({
            where: {
                id
            },
            include:{
                products:true,
            },
        });
        

        return NextResponse.json(category);
    } catch (error) {
        console.error("Error fetching categories:", error.message);
        return NextResponse.json({
            message: "Failed to fetch categories",
            error: error.message
        }, { status: 500 });
    }
}