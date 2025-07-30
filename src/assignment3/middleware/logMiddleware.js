"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function LogMiddleware(req, res, next) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}], ${req.method} ${req.originalUrl}`);
    next();
}
;
exports.default = LogMiddleware;
