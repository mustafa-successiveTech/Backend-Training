"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCustomHeader = void 0;
const addCustomHeader = (headerName, headerValue) => {
    return (req, res, next) => {
        res.setHeader(headerName, headerValue);
        next();
    };
};
exports.addCustomHeader = addCustomHeader;
