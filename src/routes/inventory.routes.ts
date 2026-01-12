import { Router } from "express";
import { createInventory, getAllInventoryData } from "../controllers/inventory.controller";

const router = Router();

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
router.get("/getAllInventory",getAllInventoryData)
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
router.post("/createInventory", createInventory);

export default router;
