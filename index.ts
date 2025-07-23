import "./types/express";
import express from "express";
import {HealthRoutes} from './src/assignment7/routes/healthRoutes'


const app = express();

app.use(express.json());

const healthRoutes = new HealthRoutes();        
app.use('/', healthRoutes.router); 

// app.use((req: Request, res: Response, next: NextFunction) => {
//   next(createError(404, "Not Found"));
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
