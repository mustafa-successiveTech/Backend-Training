import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        console.log("Before connecting to MongoDB");
        mongoose.connect(process.env.MONGO_URI!);
        console.log('MongoDB connected');
    } catch (error) {
        console.error("MongoDB connection failed");
        process.exit(1);
    }
}

connectDB();