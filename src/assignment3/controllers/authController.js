"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret_key = process.env.JWT_SECRET;
const login = (req, res, next) => {
    const { email, password } = req.body;
    if (email !== "mustafa@gmail.com" || password !== "1234") {
        return next(new Error('Error thrown'));
        return res.status(401).json({ message: "Invalid email or password" });
    }
    const payload = { email };
    const token = jsonwebtoken_1.default.sign(payload, secret_key, { expiresIn: "1h" });
    return res.json({ token });
};
exports.login = login;
