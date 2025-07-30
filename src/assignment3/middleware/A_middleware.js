"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = A_middleware;
function A_middleware(req, res, next) {
    const my_url = req.url;
    const my_method = req.method;
    console.log(`[${my_method}] ${my_url} A_middleware`);
    next();
}
;
