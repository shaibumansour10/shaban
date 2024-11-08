import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, slug, marketIds, imageUrl, description } = await request.json();
        const newCategory = { title, slug, marketIds, imageUrl, description }
        console.log(newCategory)
        return NextResponse.json(newCategory)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "failed to create Category", error
        }, { status: 500 })
    }
}