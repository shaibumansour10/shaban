import { NextResponse } from "next/server";

export async function POST(request){
 try {
//  const {barcode,
//     catogeryId,
//     description,
//     farmerId,
//     imageUrl,
//     productprice,
//     salesprice,
//     sku,
//     slug,
//     title,
//     tag
//     }=await request.json();
const productData=await request.json;
 const newProduct ={productData}
 console.log(productData)
 return NextResponse.json(newProduct)
 }  catch (error) {
console.log(error)
return NextResponse.json({
    message:"failed to create banner",error
},{status:500})
 } 
}