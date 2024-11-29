import db from "@/lib/db"
import { NextResponse } from "next/server";

export async function POST(request){
 
//   const{  barcode,
//     catogeryId,
//     description,
//     userId:farmerId,
//     imageUrl,
//     isActive,
//     isWholesale,
//     productCode,
//     productprice,
//     salesprice,
//     sku,
//     slug,
//     tags,
//     title,
//     unit,
//     wholeSalesPrice,
//     wholesaleQty,
//  productStock
//  qty
//     }=await request.json();
try {
const productData= await request.json;
const existingProduct=await db.product.findUnique({
    where:{
        slug,
    }
});
if(existingProduct){
    return NextResponse({
        data:null,
        message:"Product already exist"
    },
{status:400}
);
} 
const  newProduct=await db.product.create({
    data: {barcode,
        catogeryId,
        description,
        userId:farmerId,
        imageUrl,
        isActive,
        isWholesale,
        productCode,
        productprice:parseFloat(productprice),
        salesprice:parseFloat(salesprice),
        sku,
        slug,
        tags,
        title,
        unit,
        wholeSalesPrice:parseFloat(wholeSalesPrice),
        wholesaleQty:parseInt(wholesaleQty),
     productStock:parseInt(wholesaleQty),
     qt:parseInt(qty),
    },
});
//  const newProduct ={productData}
 console.log(productData)
 return NextResponse.json(newProduct)
 }  catch (error) {
console.log(error)
return NextResponse.json({
    message:"failed to create product",error
},{status:500})
 } 
}

export async function GET(request){
    try{
    const products = await db.product.findMany({
        orderBy:{
            createdAt:"desc"
        },
    },);
    return NextResponse.json(products)
    } catch (error) {
  console.log(error)
  return NextResponse.json({
      message:"failed to fetch products",error
  },{status:500})
    }
  }