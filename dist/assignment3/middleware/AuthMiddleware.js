"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secret_key = process.env.jwt_secret;
function AuthMiddleware(req, res, next) {
    const authHeader = req.headers["authorization"];
    console.log(authHeader, "hgcjycycjhcvkuvkj,hv");
    const authToken = authHeader && authHeader.split(" ")[1];
    if (!authToken) {
        return res.status(401).json({ message: "Token missing" });
    }
    jsonwebtoken_1.default.verify(authToken, secret_key, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Invalid or expires token" });
        }
        req.user = decoded;
        console.log(req.user);
        next();
    });
}
exports.default = AuthMiddleware;
