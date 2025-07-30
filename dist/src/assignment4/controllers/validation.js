"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFunction = void 0;
const validateFunction = (req, res) => {
    console.log('joi-validator routes');
    return res.status(200).json({
        message: "Joi-Validated"
    });
};
exports.validateFunction = validateFunction;
