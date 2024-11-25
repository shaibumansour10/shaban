import db from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcrypt"

export default async function POST(request){
    try {
     const {name,email,password}=await request.json()
    //  check if the user is already exists in db
    
    const existingUser =await db.user.findUnique({
        where:{
            email
        }
    })
    if(existingUser){
        return NextResponse.json({
            data:null,
            massege:"User already exists"
        },{status:409})
    }
    // Encrypt yhe password => bcrypt
    const hashedPassword =await bcrypt.hash(password,10)
    const newUser =await db.user.create({
        data:{
            name,
            email,
            password: hashedPassword
        }
    });
    console.log(newUser)
    return NextResponse.json(newUser);
    } catch (error) {
     console.log(error)
     return NextRequest.json({
        maseega:"failed to register user",
        error
     },{status:500})   
    }
}