"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joiValidatorMiddleware_1 = __importDefault(require("../middlewares/joiValidatorMiddleware"));
const express_1 = __importDefault(require("express"));
const queryValidator_1 = __importDefault(require("../middlewares/queryValidator"));
const GeoValidatorMiddleware_1 = __importDefault(require("../middlewares/GeoValidatorMiddleware"));
const dynamicValidationMiddleware_1 = require("../middlewares/dynamicValidationMiddleware");
const router = express_1.default.Router();
console.log("Before, joi-validator");
router.post("/userValidator", joiValidatorMiddleware_1.default);
router.post('/query-validator', queryValidator_1.default);
router.post('/geo-validator', GeoValidatorMiddleware_1.default);
console.log("after, joi-validator");
router.post('/users', dynamicValidationMiddleware_1.dynamicValidationMiddleware, (req, res) => {
    res.json({ message: 'User data is valid', data: req.body });
});
router.post('/geo-validator', dynamicValidationMiddleware_1.dynamicValidationMiddleware, (req, res) => {
    res.json({ message: 'Geo data is valid', data: req.body });
});
exports.default = router;
