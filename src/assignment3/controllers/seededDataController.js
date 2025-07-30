"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockData = void 0;
const seedUsers_1 = __importDefault(require("../seeders/seedUsers"));
const mockData = (req, res) => {
    const users = (0, seedUsers_1.default)(5);
    return res.status(200).json(users);
};
exports.mockData = mockData;
