import "./types/express";
import express from "express";
import { HealthRoutes } from "./src/assignment7/routes/healthRoutes";
import { HelmetWrapper } from "./src/assignment12/middlewares/HelmetWrapper";
import { RateLimit } from "./src/assignment12/middlewares/rateLimitting";
import { securityHeader } from "./src/assignment12/middlewares/securityHeader";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use(HelmetWrapper.apply());
app.use(RateLimit.apply());
app.use(securityHeader.apply);

app.get("/", (req, res) => {
  res.send("Secure App");
});

app.get("/test", (req, res) => {
  res.status(200).send("Headers set");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
