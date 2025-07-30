"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = B_middleware;
function B_middleware(req, res, next) {
    const my_Url = req.url;
    const my_Method = req.method;
    console.log(`[${my_Method}] ${my_Url} B_middleware`);
    next();
}
;
