import db from "@/lib/db"
import { NextResponse } from "next/server";

export async function POST(request){
    try {
  const {  barcode,
    catogeryId,
    description,
    farmerId,
    imageUrl,
    isActive,
    isWholesale,
    productCode,
    productprice,
    salesprice,
    sku,
    slug,
    tags,
    title,
    unit,
    wholeSalesPrice,
    productStock,
    wholesaleQty,
   
     qty
    }=await request.json();


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
    //  productStock:parseInt(wholesaleQty),
     productStock,
     qty:parseInt(qty),
    },
});
//  const newProduct ={productData}
//  console.log(productData)
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
// import db from "@/lib/db";
// import { NextResponse } from "next/server";

// export async function POST(request) {
//     try {
//         // Extract product data from the request
//         const {
//             barcode,
//             catogeryId,
//             description,
//             farmerId,
//             imageUrl,
//             isActive,
//             isWholesale,
//             productCode,
//             productprice,
//             salesprice,
//             sku,
//             slug,
//             tags,
//             title,
//             unit,
//             wholeSalesPrice,
//             wholesaleQty,
//             productStock,
//             qty
//         } = await request.json();

//         // Validate required fields
//         if (!title || !slug || !productprice || !salesprice || !productStock || !qty) {
//             return NextResponse.json({
//                 message: "Missing required fields",
//                 error: "Validation error",
//             }, { status: 400 });
//         }

//         // Ensure numeric fields are valid
//         if (isNaN(productprice) || isNaN(salesprice) || isNaN(wholeSalesPrice) || isNaN(wholesaleQty) || isNaN(productStock) || isNaN(qty)) {
//             return NextResponse.json({
//                 message: "Invalid numeric fields",
//                 error: "Validation error",
//             }, { status: 400 });
//         }

//         // Check if the product already exists
//         const existingProduct = await db.product.findUnique({
//             where: {
//                 slug,
//             },
//         });

//         if (existingProduct) {
//             return NextResponse.json({
//                 data: null,
//                 message: "Product already exists",
//             }, { status: 409 }); // 409 for Conflict
//         }

//         // Create the new product
//         const newProduct = await db.product.create({
//             data: {
//                 barcode,
//                 catogeryId,
//                 description,
//                 userId: farmerId,
//                 imageUrl,
//                 isActive,
//                 isWholesale,
//                 productCode,
//                 productprice: parseFloat(productprice),
//                 salesprice: parseFloat(salesprice),
//                 sku,
//                 slug,
//                 tags,
//                 title,
//                 unit,
//                 wholeSalesPrice: parseFloat(wholeSalesPrice),
//                 wholesaleQty: parseInt(wholesaleQty),
//                 productStock: parseInt(productStock), // Corrected productStock to use its own value
//                 qty: parseInt(qty),
//             },
//         });

//         console.log("New product created:", newProduct);
//         return NextResponse.json({
//             data: newProduct,
//             message: "Product created successfully",
//         }, { status: 201 });

//     } catch (error) {
//         console.error("Error creating product:", error);
//         return NextResponse.json({
//             message: "Failed to create product",
//             error: error.message,
//         }, { status: 500 });
//     }
// }
// export async function GET(request) {
//     try {
//         // Fetch all products ordered by creation date
//         const products = await db.product.findMany({
//             orderBy: {
//                 createdAt: "desc",
//             },
//         });
//         return NextResponse.json(products);
//     } catch (error) {
//         // Ensure error is not null or undefined and is an object with a message
//         const errorMessage = error && error.message ? error.message : "An unknown error occurred";
        
//         // Log the error
//         console.error("Error fetching products:", errorMessage);
        
//         // Return the error response
//         return NextResponse.json({
//             message: "Failed to fetch products",
//             error: errorMessage,
//         }, { status: 500 });
//     }
// }
