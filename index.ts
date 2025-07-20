import express from 'express';
import healthRoutes from './src/assignment7/routes/healthRoutes';

const app = express();

const PORT = process.env.PORT || 3001;

app.use('/api', healthRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});