"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthController = void 0;
class HealthController {
    checkHealth(req, res) {
        res.status(200).json({
            status: "UP",
            timestamp: new Date(),
            uptime: process.uptime(),
        });
    }
}
exports.HealthController = HealthController;
