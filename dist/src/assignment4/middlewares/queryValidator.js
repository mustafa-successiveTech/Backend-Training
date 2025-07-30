"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const querySchema_1 = __importDefault(require("../schemas/querySchema"));
function queryValidatorMiddleware(req, res, next) {
    const { error, value } = querySchema_1.default.validate(req.query, { abortEarly: false });
    if (error) {
        return res.status(400).json({ errors: error.details });
    }
    const { page } = value;
    if (typeof page === 'number') {
        return res.json({ message: 'Query is a number', page });
    }
    return res.json({ message: "Query is a string", page });
}
exports.default = queryValidatorMiddleware;
