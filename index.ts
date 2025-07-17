import "./types/express";
import express from "express";
import userRoutes from "./src/assignment3/routes/userRoutes";
import ErrorHandlingMiddleware from "./src/assignment3/middleware/errorHandlingMiddleware";
import { addCustomHeader } from "./src/assignment3/middleware/customHeader";
import { Rate_limit } from "./src/assignment3/middleware/Rate_limiting";

const app = express();

app.use(express.json());

app.use(Rate_limit(5, 5));

app.use(addCustomHeader("XYZ", "1.0.0"));

app.get("/", (req, res) => {
  res.send(`Hello with custom header! ${res.getHeader("XYZ")}`);
});

app.use("/assignment3", userRoutes);

app.use(ErrorHandlingMiddleware);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
