"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const router = express.Router();
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const master_routes_1 = __importDefault(require("./routes/master.routes"));
router.use("/users", user_routes_1.default);
router.use("/auth", auth_routes_1.default);
router.use("/master", master_routes_1.default);
exports.default = router;
