import express from 'express';
import authRoutes from './src/assignment11/routes/user.route';
import {mongoDB} from './public/config/db';

mongoDB();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use('/assignment-11', authRoutes);

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});