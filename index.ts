import "./types/express";
import express from "express";
import mongoose from "mongoose";
import { HealthRoutes } from "./src/assignment7/routes/healthRoutes";
import countries from "./src/assignment8/routes/countries";
import { setupSwagger } from "./src/assignment8/swagger";
import dotenv from "dotenv";

dotenv.config();
export const app = express();
app.use(express.json());

console.log("Before swagger");
app.use("/api/countries", countries);
setupSwagger(app);

const healthRoutes = new HealthRoutes();
app.use("/", healthRoutes.router);

// app.use((req: Request, res: Response, next: NextFunction) => {
//   next(createError(404, "Not Found"));
// });

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGO_URI!).then(() => {
    console.log("Connected to MongoDB");
  app.listen(3000, () => console.log(" Server on http://localhost:3000"));
});
