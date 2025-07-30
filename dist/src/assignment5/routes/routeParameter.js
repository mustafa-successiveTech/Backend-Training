"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_errors_1 = __importDefault(require("http-errors"));
const router = (0, express_1.Router)();
router.get('/validate/:id', (req, res, next) => {
    const id = Number(req.params.id);
    const name = req.query.name;
    if (isNaN(id)) {
        return next((0, http_errors_1.default)(400, 'ID parameter must be a number'));
    }
    if (!name || name.length < 3) {
        return next((0, http_errors_1.default)(400, 'Query parameter "name" is required and must be at least 3 characters'));
    }
    res.json({ message: `Validated! ID: ${id}, Name: ${name}` });
});
exports.default = router;
