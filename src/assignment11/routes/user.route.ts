import express, { NextFunction } from "express";
import { Request, Response } from "express";
import {
  handleLoginController,
  handleRegisterController,
} from "../controllers/user.controller";
import { allowRoles, authRouteMiddleware } from "../middlewares/user.middleware";
import { verifyToken } from "../utils/jwt";

const router = express.Router();

router.post("/register", handleRegisterController);

router.post("/login", handleLoginController);

router.get("/dashboard", authRouteMiddleware, (req, res) => {
  res.json({ message: "Protected route"});
});

router.get('/admin-data', verifyToken, allowRoles("admin"), (res : Response, req : Request) => {
    return res.json({ message : "Admin data"});
})

export default router;
