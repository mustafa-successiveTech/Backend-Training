import express from "express";
import { ErrorTestController } from "../controller/ErrorTestController";

const router = express.Router();

const controller = new ErrorTestController(); //


export default router;