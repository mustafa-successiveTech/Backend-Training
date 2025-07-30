"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = joiValidatorMiddleware;
const JoiValidationSchema_1 = __importDefault(require("../schemas/JoiValidationSchema"));
function joiValidatorMiddleware(req, res, next) {
    const { error, value } = JoiValidationSchema_1.default.validate(req.body);
    console.log('Inside Joi Validator Middleware');
    if (error) {
        console.log(error);
        return res.status(400).json({ errors: error.message });
    }
    req.body = value;
    console.log(req.body);
    next();
}
