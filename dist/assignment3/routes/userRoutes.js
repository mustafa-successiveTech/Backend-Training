"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthMiddleware_1 = __importDefault(require("../middleware/AuthMiddleware"));
const router = express_1.default.Router();
router.get("/profile", AuthMiddleware_1.default, (req, res) => {
    res.json({ message: "Access Granted" });
});
exports.default = router;
