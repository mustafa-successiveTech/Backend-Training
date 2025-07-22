import "./types/express";
import express from "express";
import userRoutes from "./src/assignment3/routes/userRoutes";
import ErrorHandlingMiddleware from "./src/assignment3/middleware/errorHandlingMiddleware";
import { addCustomHeader } from "./src/assignment3/middleware/customHeader";
import { Rate_limit } from "./src/assignment3/middleware/Rate_limiting";
import joiValidatorRoutes from "./src/assignment4/routes/joiValidatorRoutes"

const app = express();

app.use(express.json());

app.use('/assignment-4', joiValidatorRoutes)

app.get("/", (req, res) => {
  res.send(`Hello with custom header! ${res.getHeader("XYZ")}`);
});

app.use("/assignment3", userRoutes);

app.use(ErrorHandlingMiddleware);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
