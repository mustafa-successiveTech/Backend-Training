import express from 'express';
import dotenv from 'dotenv';
import user from './src/assignment9/routes/user.route';
import { connectDB } from './src/assignment9/config/db'


dotenv.config();
const PORT = process.env.PORT || 3000;

connectDB();
const app = express();
app.use(express.json());

console.log("Before main route");
app.use('/create-api', user);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});