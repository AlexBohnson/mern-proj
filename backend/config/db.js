import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_uri;
    if (!mongoUri) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }
    const conn = await mongoose.connect(mongoUri);
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1); //process code 1 means failure. 0 means success
  }
}