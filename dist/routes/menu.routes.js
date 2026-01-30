"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menu_controller_1 = require("../controllers/menu.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /menu/getMenu:
 *   get:
 *     summary: Get all menu
 *     tags: [Master]
 *     responses:
 *       200:
 *         description: Menu list fetched successfully
 */
router.get("/getMenu", menu_controller_1.getMenu);
router.post("/createMenu", menu_controller_1.createMenu);
router.post("/deleteMenu", menu_controller_1.deleteMenu);
exports.default = router;
