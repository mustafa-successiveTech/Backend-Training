import express from 'express';
import dotenv from 'dotenv';
import user from './src/assignment10/routes/user.route';
import {mongoDB} from './src/assignment10/config/db';


dotenv.config();
const PORT = process.env.PORT || 3000;

mongoDB();
const app = express();
app.use(express.json());

console.log("1");
app.use('/assignment10', user);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});