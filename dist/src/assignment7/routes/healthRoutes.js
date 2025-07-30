"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const HealthController_1 = require("../controller/HealthController");
class HealthRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.healthController = new HealthController_1.HealthController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('/health', this.healthController.checkHealth);
    }
}
exports.HealthRoutes = HealthRoutes;
