// import { NextResponse } from "next/server";

// export async function POST(request){
//  try {
//  const {
//    PhysicalAddress,
//    StaffUniqueCode,
//    dob,
//    email,
//    imageUrl,
//    name,
//    nin,
//    notes,
//    password,
//    phone,
//    role}=await request.json();
//  const newStaff ={  PhysicalAddress,
//    StaffUniqueCode,
//    dob,
//    email,
//    imageUrl, 
//    name,
//    nin,
//    notes,
//    password,
//    phone,
//    role}
//  console.log(newStaff)
//  return NextResponse.json(newStaff)
//  }  catch (error) {
// console.log(error)
// return NextResponse.json({
//     message:"failed to create Staff",error
// },{status:500})
//  } 
// }
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "@/lib/db"; 

export async function POST(request) {
    try {
        // Extract fields from the request body
        const {
            PhysicalAddress,
            StaffUniqueCode,
            dob,
            email,
            imageUrl,
            name,
            nin,
            notes,
            password,
            phone,
            role
        } = await request.json();

        // Basic validation to ensure required fields are present
        if (!name || !email || !password || !role) {
            return NextResponse.json({
                message: "Missing required fields",
                error: "Validation error",
            }, { status: 400 });
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new staff object (without password encryption logic)
        const newStaff = {
            PhysicalAddress,
            StaffUniqueCode,
            dob,
            email,
            imageUrl,
            name,
            nin,
            notes,
            password: hashedPassword,  // Storing the hashed password
            phone,
            role
        };

        console.log("New staff created:", newStaff);

        // Ideally, you'd now save `newStaff` to your database (using Prisma or your preferred method)
        // Example:
        // const staff = await db.staff.create({ data: newStaff });

        return NextResponse.json({
            message: "Staff created successfully",
            data: newStaff,  // Return the created staff data (except for the password)
        }, { status: 201 });
    } catch (error) {
        console.error("Error creating staff:", error);
        return NextResponse.json({
            message: "Failed to create staff",
            error: error.message,
        }, { status: 500 });
    }
}
export async function GET(request) {
  try {
      // Fetch all staff records from the database
      const staffs = await db.staff.findMany({
          orderBy: {
              createdAt: "desc", // Sort staff by creation date (you can customize this)
          },
      });

      // Return the list of staff
      return NextResponse.json({
          message: "Staffs fetched successfully",
          data: staffs, // Return the staff data (without password)
      });
  } catch (error) {
      console.error("Error fetching staff:", error);
      return NextResponse.json({
          message: "Failed to fetch staff",
          error: error.message,
      }, { status: 500 });
  }
}
