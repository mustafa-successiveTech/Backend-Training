import "./types/express";
import express from "express";
import userRoutes from "./src/assignment3/routes/userRoutes";
import ErrorHandlingMiddleware from "./src/assignment3/middleware/errorHandlingMiddleware";
import { addCustomHeader } from "./src/assignment3/middleware/customHeader";
import { Rate_limit } from "./src/assignment3/middleware/Rate_limiting";
import joiValidatorRoutes from "./src/assignment4/routes/joiValidatorRoutes"
import assignment5 from "./src/assignment5/routes/assignment5";

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
