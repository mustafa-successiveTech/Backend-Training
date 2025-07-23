import express, { Request, Response } from "express";
import AuthMiddleware from "../middleware/AuthMiddleware";
import { JwtPayload } from "jsonwebtoken";
import { login } from "../controllers/authController";
import { mockData } from "../controllers/seededDataController";
import LogMiddleware from "../middleware/logMiddleware";
import A_middleware from "../middleware/A_middleware";
import B_middleware from "../middleware/B_middleware";

const router = express.Router();

router.get("/profile", AuthMiddleware, (req: Request, res: Response) => {
  res.json({ message: "Access Granted", user: req.user });
});

router.get("/Chain-middleware", A_middleware, B_middleware);

router.get('/logUrl', LogMiddleware);

router.post("/login", login);

router.post("/seeded", mockData);

export default router;
