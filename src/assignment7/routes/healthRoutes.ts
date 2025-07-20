import express from "express";
import  { HealthController } from "../controller/HealthController";

const router = express.Router();

const healthController = new HealthController();

router.get("/health", healthController.check);

export default router;
