import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
    try {
        // Parse request body
        const farmerData = await request.json();

        // Validation: Check if essential fields are present
        if (
            !farmerData.name ||
            !farmerData.phone ||
            !farmerData.email ||
            !farmerData.farmerUniqueCode ||
            !farmerData.userId
        ) {
            return NextResponse.json(
                {
                    data: null,
                    message: "Missing required fields: name, phone, email, farmerUniqueCode, userId.",
                },
                { status: 400 }
            );
        }

        // Check if a farmer profile already exists with the same farmerUniqueCode
        const existingFarmer = await db.farmerProfile.findUnique({
            where: { farmerUniqueCode: farmerData.farmerUniqueCode },
        });
        if (existingFarmer) {
            return NextResponse.json(
                {
                    data: null,
                    message: "Farmer profile with this unique code already exists.",
                },
                { status: 409 }
            );
        }

        // Parse landSize as a float
        const landSize = parseFloat(farmerData.landSize);
        if (isNaN(landSize)) {
            return NextResponse.json(
                {
                    data: null,
                    message: "Invalid landSize, must be a valid number.",
                },
                { status: 400 }
            );
        }

        // Create the new farmer profile
        const newFarmerProfile = await db.farmerProfile.create({
            data: {
                name: farmerData.name,
                phone: farmerData.phone,
                email: farmerData.email,
                physicalAddress: farmerData.physicalAddress,
                contactPerson: farmerData.contactPerson,
                contactPersonPhone: farmerData.contactPersonPhone,
                profileImageUrl: farmerData.profileImageUrl,
                isActive: farmerData.isActive,
                notes: farmerData.notes,
                terms: farmerData.terms,
                farmerUniqueCode: farmerData.farmerUniqueCode,
                products: farmerData.products,
                landSize: landSize,
                mainCrop: farmerData.mainCrop,
                userId: farmerData.userId,
            },
        });

        console.log("New farmer profile created:", newFarmerProfile);

        return NextResponse.json({
            data: newFarmerProfile,
            message: "Farmer profile created successfully.",
        }, { status: 201 });
        
    } catch (error) {
        console.error("Error creating farmer profile:", error.message);

        return NextResponse.json(
            {
                data: null,
                message: "Failed to create farmer profile.",
                error: error.message,
            },
            { status: 500 }
        );
    }
}

export async function GET(request) {
    try {
        // Fetch all farmer profiles ordered by creation date
        const farmers = await db.user.findMany({
            orderBy: {
                createdAt: "desc",
            },
            where:{
                role: "FARMER",
            },
            include:{
                farmerProfile:true
            }
        });

        return NextResponse.json({
            data: farmers,
            message: "Farmer profiles fetched successfully.",
        });

    } catch (error) {
        console.error("Error fetching farmer profiles:", error.message);

        return NextResponse.json(
            {
                data: null,
                message: "Failed to fetch farmer profiles.",
                error: error.message,
            },
            { status: 500 }
        );
    }
}
