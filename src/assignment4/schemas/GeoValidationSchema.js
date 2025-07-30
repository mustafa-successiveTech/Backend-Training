"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const GeoValidator = joi_1.default.object({
    latitude: joi_1.default.number().min(-90).max(90).required,
    longitude: joi_1.default.number().min(-90).max(90).required,
});
exports.default = GeoValidator;
