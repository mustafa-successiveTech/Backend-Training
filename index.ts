import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { mongoDB } from './public/config/db';
import authRoutes from './src/assignment10/routes/user.route';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

mongoDB();

app.use('/assignment-10', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
