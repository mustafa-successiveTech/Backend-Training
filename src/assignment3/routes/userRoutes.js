"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthMiddleware_1 = __importDefault(require("../middleware/AuthMiddleware"));
const authController_1 = require("../controllers/authController");
const seededDataController_1 = require("../controllers/seededDataController");
const logMiddleware_1 = __importDefault(require("../middleware/logMiddleware"));
const A_middleware_1 = __importDefault(require("../middleware/A_middleware"));
const B_middleware_1 = __importDefault(require("../middleware/B_middleware"));
const router = express_1.default.Router();
router.get("/profile", AuthMiddleware_1.default, (req, res) => {
    res.json({ message: "Access Granted", user: req.user });
});
router.get("/Chain-middleware", A_middleware_1.default, B_middleware_1.default);
router.get('/logUrl', logMiddleware_1.default);
router.post("/login", authController_1.login);
router.post("/seeded", seededDataController_1.mockData);
exports.default = router;
