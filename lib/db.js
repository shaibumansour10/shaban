// 
import { PrismaClient } from "@prisma/client";

const db = globalThis.prisma || new PrismaClient();

db.$connect()
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

export default db;
