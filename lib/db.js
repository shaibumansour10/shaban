// // 
// import { PrismaClient } from "@prisma/client";

// const db = globalThis.prisma || new PrismaClient();

// db.$connect()
//   .then(() => {
//     console.log("Connected to MongoDB successfully!");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//   });

// if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

// export default db;
import { PrismaClient } from "@prisma/client";

let db;

// Check if PrismaClient instance already exists in `globalThis` (for development only)
if (process.env.NODE_ENV !== "production") {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
  }
  db = globalThis.prisma;
} else {
  // For production, create a new PrismaClient instance
  db = new PrismaClient();
}

// Connect to the database
(async () => {
  try {
    await db.$connect();
    console.log("Connected to the database successfully!");
  } catch (err) {
    console.error("Error connecting to the database:", err.message);
    process.exit(1); // Exit the process on a connection failure
  }
})();

export default db;
