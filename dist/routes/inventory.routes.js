"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventory_controller_1 = require("../controllers/inventory.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Inventory
 */
/**
 * @swagger
 * /inventory/getItemData:
 *   get:
 *     summary: Get all vendors
 *     tags: [Inventory]
 *     responses:
 *       200:
 *         description: vendors list fetched successfully
 */
router.post("/getItemData", inventory_controller_1.getItemData);
/**
 * @swagger
 * tags:
 *   name: Inventory
 */
/**
 * @swagger
 * /inventory/getAllInventory:
 *   get:
 *     summary: Get all vendors
 *     tags: [Inventory]
 *     responses:
 *       200:
 *         description: vendors list fetched successfully
 */
router.get("/getAllInventory", inventory_controller_1.getAllInventoryData);
/**
 * @swagger
 * tags:
 *   name: Inventory
 */
/**
 * @swagger
 * /inventory/getInventoryLogs:
 *   get:
 *     summary: Get all vendors
 *     tags: [Inventory]
 *     responses:
 *       200:
 *         description: getInventoryLogs list fetched successfully
 */
router.post("/getInventoryLogs", inventory_controller_1.getInventoryLogs);
/**
 * @swagger
 * /inventory/createInventory:
 *   post:
 *     summary: Create a new inventory
 *     tags: [Inventory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - itemId
 *               - unitId
 *               - reorderLvl
 *               - amount
 *               - vendorId
 *             properties:
 *               itemId:
 *                 type: integer
 *               unitId:
 *                 type: integer
 *               reorderLvl:
 *                 type: number
 *               amount:
 *                 type: number
 *               vendorId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Inventory created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/createInventory", inventory_controller_1.createInventory);
/**
 * @swagger
 * /inventory/StockIn:
 *   post:
 *     summary: Create a new inventory
 *     tags: [Inventory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - itemId
 *               - unitId
 *               - reorderLvl
 *               - amount
 *               - vendorId
 *             properties:
 *               itemId:
 *                 type: integer
 *               unitId:
 *                 type: integer
 *               reorderLvl:
 *                 type: number
 *               amount:
 *                 type: number
 *               vendorId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Inventory created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/StockIn", inventory_controller_1.StockIn);
/**
 * @swagger
 * /inventory/wastage:
 *   post:
 *     summary: Create a new inventory
 *     tags: [Inventory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - itemId
 *               - unitId
 *               - reorderLvl
 *               - amount
 *               - vendorId
 *             properties:
 *               itemId:
 *                 type: integer
 *               unitId:
 *                 type: integer
 *               reorderLvl:
 *                 type: number
 *               amount:
 *                 type: number
 *               vendorId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Inventory created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/wastage", inventory_controller_1.InventoryWastage);
exports.default = router;
