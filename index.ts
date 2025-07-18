
import express from "express";
import joiValidatorRoutes from "./src/assignment4/routes/joiValidatorRoutes";

const app = express();

app.use(express.json());

app.use('/assignment-4', joiValidatorRoutes)

app.get("/", (req, res) => {
  res.send(`Hello with custom header! ${res.getHeader("XYZ")}`);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
