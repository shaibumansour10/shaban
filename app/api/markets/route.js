// import { NextResponse } from "next/server";
// import db from "@/lib/db";

// export async function POST(request) {
//     try {
//         // Parse request body
//         const { title, slug, categoryIds, logoUrl, description, isActive } = await request.json();

//         // Validation: Ensure all required fields are present
//         if (!title || !slug || !categoryIds || !logoUrl || !description || typeof isActive !== "boolean") {
//             return NextResponse.json(
//                 {
//                     data: null,
//                     message: "Missing required fields: title, slug, categoryIds, logoUrl, description, isActive.",
//                 },
//                 { status: 400 }
//             );
//         }

//         // Check if market with the same slug already exists
//         const existingMarket = await db.market.findUnique({
//             where: {
//                 slug,
//             },
//         });

//         if (existingMarket) {
//             return NextResponse.json(
//                 {
//                     data: null,
//                     message: "Market with this slug already exists.",
//                 },
//                 { status: 409 }  // Use 409 for conflict due to duplicate
//             );
//         }

//         // Create a new market
//         const newMarket = await db.market.create({
//             data: {
//                 title,
//                 slug,
//                 categoryIds,
//                 logoUrl,
//                 description,
//                 isActive,
//             },
//         });

//         console.log("New market created:", newMarket);

//         return NextResponse.json({
//             data: newMarket,
//             message: "Market created successfully.",
//         }, { status: 201 });
//     } catch (error) {
//         console.error("Error creating market:", error.message);
//         return NextResponse.json(
//             {
//                 data: null,
//                 message: "Failed to create market.",
//                 error: error.message,
//             },
//             { status: 500 }
//         );
//     }
// }
import { NextResponse } from "next/server";
import db from "@/lib/db"; // Ensure this points to your database instance

export async function POST(request) {
    try {
        // Parse request body
        const body = await request.json();
        console.log("Received payload:", body);

        // Destructure fields (no validation)
        const { title, slug, categoryIds, logoUrl, description, isActive } = body;

        // Check for duplicate slug
        const existingMarket = await db.market.findUnique({
            where: { slug },
        });

        if (existingMarket) {
            console.error("Conflict Error: Duplicate slug detected.");
            return NextResponse.json(
                {
                    data: null,
                    message: "Market with this slug already exists.",
                },
                { status: 409 } // Conflict status
            );
        }

        // Create a new market
        const newMarket = await db.market.create({
            data: {
                title,
                slug,
                categoryIds,
                logoUrl,
                description,
                isActive,
            },
        });

        console.log("New market created successfully:", newMarket);

        return NextResponse.json(
            {
                data: newMarket,
                message: "Market created successfully.",
            },
            { status: 201 } // Created status
        );
    } catch (error) {
        console.error("Error creating market:", error);

        // Handle invalid JSON payload errors
        if (error instanceof SyntaxError) {
            return NextResponse.json(
                {
                    data: null,
                    message: "Invalid JSON payload.",
                    error: error.message,
                },
                { status: 400 }
            );
        }

        // Generic server error
        return NextResponse.json(
            {
                data: null,
                message: "Failed to create market due to server error.",
                error: error.message,
            },
            { status: 500 }
        );
    }
}



export async function GET(request) {
    try {
        // Fetch all markets ordered by creation date
        const markets = await db.market.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json({
            data: markets,
            message: "Markets fetched successfully.",
        });
    } catch (error) {
        console.error("Error fetching markets:", error.message);
        return NextResponse.json(
            {
                data: null,
                message: "Failed to fetch markets.",
                error: error.message,
            },
            { status: 500 }
        );
    }
}
