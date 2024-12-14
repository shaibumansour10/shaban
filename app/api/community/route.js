import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
    try {
        // Parse and validate the request body
        const {
            categoryId,
            content,
            description,
            isActive,
            imageUrl,
            slug,
            title,
        } = await request.json();

        if (
            !categoryId ||
            !content ||
            !description ||
            typeof isActive !== "boolean" ||
            !imageUrl ||
            !slug ||
            !title
        ) {
            return NextResponse.json(
                {
                    data: null,
                    message: "All fields are required, and isActive must be a boolean.",
                },
                { status: 400 }
            );
        }

        // Check if the community already exists
        const existingCommunity = await db.community.findUnique({
            where: {
                slug,
            },
        });

        if (existingCommunity) {
            return NextResponse.json(
                {
                    data: null,
                    message: "Community with this slug already exists.",
                },
                { status: 400 }
            );
        }

        // Create a new community
        const newCommunity = await db.community.create({
            data: {
                categoryId,
                content,
                description,
                isActive,
                imageUrl,
                slug,
                title,
            },
        });

        console.log("New community created:", newCommunity);

        return NextResponse.json({
            data: newCommunity,
            message: "Community created successfully.",
        }, { status: 201 });

    } catch (error) {
        console.error("Error creating community:", error.message);

        return NextResponse.json(
            {
                data: null,
                message: "Failed to create community.",
                error: error.message,
            },
            { status: 500 }
        );
    }
}

export async function GET(request) {
    try {
        // Fetch communities ordered by creation date
        const communities = await db.community.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json({
            data: communities,
            message: "Communities fetched successfully.",
        });

    } catch (error) {
        console.error("Error fetching communities:", error.message);

        return NextResponse.json(
            {
                data: null,
                message: "Failed to fetch communities.",
                error: error.message,
            },
            { status: 500 }
        );
    }
}

// import { NextResponse } from "next/server";
// import db from "@/lib/db" ;

// export async function POST(request){
//  try {
//  const {categoryId,
//     content,
//     description,
//     isActive,
//     imageUrl,
//     slug,
//     title}=await request.json();

//     const existingCommunity=await db.community.findUnique({
//       where:{
//           slug,
//       }
//   });
//   if(existingCommunity){
//       return NextResponse({
//           data:null,
//           message:"Community already exist"
//       },
//   {status:400}
// );}

// const  newCommunity=await db.community.create({
//    data: {categoryId,
//       content,
//       description,
//       imageUrl,
//       isActive,
//       slug,
//       title},
// });

 
//  console.log(newCommunity)
//  return NextResponse.json(newCommunity)
//  }  catch (error) {
// console.log(error)
// return NextResponse.json({
//     message:"failed to create community",error
// },{status:500})
//  } 
// }


// export async function GET(request){
//    try{
//    const communities= await db.community.findMany({
//        orderBy:{
//            createdAt:"desc"
//        },
//    },);
//    return NextResponse.json(communities)
//    } catch (error) {
//  console.log(error)
//  return NextResponse.json({
//      message:"failed to fetch communities",error
//  },{status:500})
//    }
//  }