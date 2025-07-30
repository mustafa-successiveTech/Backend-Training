"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ErrorHandlingMiddleware;
function ErrorHandlingMiddleware(err, req, res, next) {
    if (err) {
        console.error(err);
        res.status(500).json({ error: err.message || "Internal Server Error" });
    }
    else {
        console.log("Fine");
        next();
    }
}
;
