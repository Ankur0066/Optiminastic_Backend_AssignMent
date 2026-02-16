"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate4DigitCode = exports.verifyPassword = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const SALT_ROUNDS = 12;
const hashPassword = async (plainPassword) => {
    return await bcrypt_1.default.hash(plainPassword, SALT_ROUNDS);
};
exports.hashPassword = hashPassword;
const verifyPassword = async (plainPassword, hashedPassword) => {
    return await bcrypt_1.default.compare(plainPassword, hashedPassword);
};
exports.verifyPassword = verifyPassword;
const generate4DigitCode = () => {
    return Math.floor(1000 + Math.random() * 9000);
};
exports.generate4DigitCode = generate4DigitCode;
