import mongoose from "mongoose";
import dotenv from "dotenv";

if (!process.env.MONGODB_URL) {
  //   throw new Error("Please provide MongoDB url");
}

async function connectDB(params) {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected");
  } catch (error) {
    console.log("Error");
    process.exit(1);
  }
}

export default connectDB;
