"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GeoValidationSchema_1 = __importDefault(require("../schemas/GeoValidationSchema"));
function GeoValidatorMiddleware(req, res, next) {
    const { error, value } = GeoValidationSchema_1.default.validate(req.body);
    console.log("Geo-Validator");
    if (error) {
        console.log("Inside error");
        res.status(400).json({ errors: error.details });
    }
    console.log(req.body);
    console.log("Hello");
    next();
}
exports.default = GeoValidatorMiddleware;
