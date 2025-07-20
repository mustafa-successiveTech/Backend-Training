import express from "express";
import createError from "http-errors";
import { Request, Response, NextFunction } from "express";
import assignment5 from "./src/assignment5/routes/errorRoutes";

const app = express();

app.use(express.json());

app.use("/assignment-5", assignment5);

// app.use((req: Request, res: Response, next: NextFunction) => {
//   next(createError(404, "Not Found"));
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
