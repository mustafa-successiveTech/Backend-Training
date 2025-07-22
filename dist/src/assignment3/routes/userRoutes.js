"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthMiddleware_1 = __importDefault(require("../middleware/AuthMiddleware"));
const authController_1 = require("../controllers/authController");
const seededDataController_1 = require("../controllers/seededDataController");
const router = express_1.default.Router();
router.get("/profile", AuthMiddleware_1.default, (req, res) => {
    res.json({ message: "Access Granted", user: req.user });
});
router.post("/login", authController_1.login);
router.post("/seeded", seededDataController_1.mockData);
exports.default = router;
