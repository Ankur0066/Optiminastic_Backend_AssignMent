"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const master_controller_1 = require("../controllers/master.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /master/getGenericMaster:
 *   post:
 *     summary: Get Generic Master data
 *     tags: [Master]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - masterTypeId
 *             properties:
 *               masterTypeId:
 *                 type: int
 *                 example: 4
 *     responses:
 *       201:
 *         description: Data fetched successfully
 *       400:
 *         description: Invalid input
 */
router.post("/getGenericMaster", master_controller_1.getGenericMaster);
/**
 * @swagger
 * tags:
 *   name: Master
 */
/* ===================== EMPLOYEE APIs ===================== */
/**
 * @swagger
 * /master/createEmployee:
 *   post:
 *     summary: Create a new employee
 *     tags: [Master]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - employeeName
 *               - email
 *             properties:
 *               employeeName:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john@example.com
 *               phone:
 *                 type: string
 *                 example: "9876543210"
 *               cap_amount:
 *                  type: float
 *                  example: 100
 *     responses:
 *       201:
 *         description: Employee created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/createEmployee", master_controller_1.createEmployee);
/**
 * @swagger
 * /master/getEmployees:
 *   get:
 *     summary: Get all employees
 *     tags: [Master]
 *     responses:
 *       200:
 *         description: Employee list fetched successfully
 */
router.get("/getEmployees", master_controller_1.getEmployees);
/* ===================== VENDOR APIs ===================== */
/**
 * @swagger
 * /master/createVendor:
 *   post:
 *     summary: Create a new vendor
 *     tags: [Master]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - vendorName
 *               - contactPerson
 *             properties:
 *               vendorName:
 *                 type: string
 *                 example: ABC Suppliers
 *               contactPerson:
 *                 type: string
 *                 example: Ramesh Kumar
 *               phone:
 *                 type: string
 *                 example: "9998887776"
 *     responses:
 *       201:
 *         description: Vendor created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/createVendor", master_controller_1.createVendor);
/**
 * @swagger
 * /master/getAllVendors:
 *   get:
 *     summary: Get all vendors
 *     tags: [Master]
 *     responses:
 *       200:
 *         description: vendors list fetched successfully
 */
router.get("/getAllVendors", master_controller_1.getVendors);
//---------------------------------------------ITEM API--------------------
/**
 * @swagger
 * /master/createItem:
 *   post:
 *     summary: Create a new vendor
 *     tags: [Master]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - itemName
 *               - category
 *             properties:
 *               itemName:
 *                 type: string
 *                 example: Sugar
 *               category:
 *                  type: number
 *                  example: 1
 *     responses:
 *       201:
 *         description: Item created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/createItem", master_controller_1.createItemMaster);
/**
 * @swagger
 * /master/getAllItems:
 *   get:
 *     summary: Get all Items
 *     tags: [Master]
 *     responses:
 *       200:
 *         description: Items list fetched successfully
 */
router.get("/getAllItems", master_controller_1.getAllItems);
/**
 * @swagger
 * /master/getAllPrice:
 *   get:
 *     summary: Get all Price
 *     tags: [Master]
 *     responses:
 *       200:
 *         description: Items list fetched successfully
 */
router.get("/getAllPrice", master_controller_1.getAllPrice);
/**
 * @swagger
 * /master/createPriceMaster:
 *   post:
 *     summary: Create a new Price
 *     tags: [Master]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - itemId
 *               - price
 *               - periodFrom
 *               - periodTo
 *             properties:
 *                itemId:
 *                 type: number
 *                 example: 1
 *                price:
 *                  type: float
 *                  example: 1.00
 *                periodFrom :
 *                   type : date
 *                periodTo :
 *                    type : date
 *
 *     responses:
 *       201:
 *         description: PRice created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/createPriceMaster", master_controller_1.createPriceMaster);
router.post("/getCategorySpecific", master_controller_1.getCategorySpecific);
exports.default = router;
