// import db from "@/lib/db"
// import { NextRequest, NextResponse } from "next/server"
// import bcrypt from "bcrypt"

// export  async function POST(request){
//     try {
//      const {name,email,password,role}=await request.json()
//     //  check if the user is already exists in db
    
//     const existingUser =await db.user.findUnique({
//         where:{
//             email,
//         }
//     })
//     if(existingUser){
//         return NextResponse.json({
//             data:null,
//             massege:"User already exists"
//         },{status:409})
//     }
//     // Encrypt yhe password => bcrypt
//     const hashedPassword =await bcrypt.hash(password,10)
//     const newUser =await db.user.create({
//         data:{
//             name,
//             email,
//             password: hashedPassword,
//             role
//         }
//     });
//     console.log(newUser)
//     return NextResponse.json({
//         data:newUser,
//         message: "user Created Successfully"
//     },
// {status:201});
//     } catch (error) {
//      console.log(error)
//      return NextRequest.json({
//         error,
//         message:"Server Error:Something went wrong",
//      },
//      {status:500}); 
//     }
// }


// export async function GET(request){
//     try{
//     const users = await db.user.findMany({
//       orderBy:{
//           createdAt:"desc"
//       },
//   },);
//     return NextResponse.json(users)
//     } catch (error) {
//   console.log(error)
//   return NextResponse.json({
//       message:"failed to fetch users",error
//   },{status:500})
//     }
//   }
import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
    try {
        const { name, email, password, role } = await request.json();

        // Validate input
        if (!name || !email || !password || !role) {
            return NextResponse.json({
                message: "All fields are required",
            }, { status: 400 });
        }

        // Check if the user already exists in the database
        const existingUser = await db.user.findUnique({
            where: {
                email,
            },
        });

        if (existingUser) {
            return NextResponse.json({
                data: null,
                message: "User already exists",
            }, { status: 409 });
        }

        // Encrypt the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
            },
        });

        console.log("New user created:", newUser);

        return NextResponse.json({
            data: newUser,
            message: "User created successfully",
        }, { status: 201 });

    } catch (error) {
        console.error("Error creating user:", error.message);

        return NextResponse.json({
            message: "Server error: Something went wrong",
            error: error.message,
        }, { status: 500 });
    }
}

export async function GET(request) {
    try {
        const users = await db.user.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json(users);

    } catch (error) {
        console.error("Error fetching users:", error.message);

        return NextResponse.json({
            message: "Failed to fetch users",
            error: error.message,
        }, { status: 500 });
    }
}
