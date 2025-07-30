import express from "express";
import { errorTestControllerObject } from "../middleware/errorMiddleware";

const router = express.Router();

router.get("/async-error", (req, res, next) =>
  errorTestControllerObject.throwAsyncError(req, res, next)
);

export default router;
