"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Canteen API",
            version: "1.0.0",
            description: "API documentation for Canteen Management System",
        },
        servers: [
            {
                url: "http://localhost:5000/api",
            },
        ],
    },
    // 👇 Path to your route files
    apis: ["src/routes/**/*.ts"],
};
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
