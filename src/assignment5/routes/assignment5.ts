import express from "express";
import createError from "http-errors";
import { Request, Response, NextFunction } from "express";
import errorRoutes from "./errorRoutes";
import asyncErrorRoute from "./asyncErrorRoute";
import routeParameter from "./routeParameter";

const router = express.Router();

router.use(express.json());

console.log("Error ROutes");

// app.use('/async-route', asyncErrorRoute);

console.log('Async');

// app.use("/error-route", errorRoutes);
router.use("/router", router);

// app.use((req: Request, res: Response, next: NextFunction) => {
//   next(createError(404, "Not Found"));
// });

export default router;


