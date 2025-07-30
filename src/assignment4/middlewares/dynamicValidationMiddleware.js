"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicValidationMiddleware = dynamicValidationMiddleware;
const ValidationConfig_1 = require("../schemas/ValidationConfig");
function dynamicValidationMiddleware(req, res, next) {
    const schema = ValidationConfig_1.validationConfig[req.route.path];
    if (!schema) {
        return next();
    }
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).json({ errors: error.details.map(detail => detail.message) });
    }
    req.body = value;
    next();
}
