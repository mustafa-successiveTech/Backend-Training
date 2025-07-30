import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const mongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI as string);
    console.log("Database connected");
  } catch (error) {
    console.error("Error occured while connecting to MongoDB", error);
  }
};

mongoDB();