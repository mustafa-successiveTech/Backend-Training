// routes/status.routes.ts
import express from "express";
import { StatusController } from "../controller/StatusController";

const router = express.Router();
const controller = new StatusController();

router.get("/ok", controller.ok);
router.post("/create", controller.create);
router.delete("/delete", controller.delete);
router.get("/redirect-permanent", controller.redirectPermanent);
router.get("/redirect-temporary", controller.redirectTemporary);
router.all("/method-not-allowed", controller.methodNotAllowed);
router.get("/internal-server-error", controller.internalError);

export default router;
