import { Router } from "express";
import {
  createEmployee,
  getEmployees,
  createVendor,
} from "../controllers/master.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Master
 *   description: Master data APIs (Employee, Vendor)
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
router.post("/createEmployee", createEmployee);

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
router.get("/getEmployees", getEmployees);

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
router.post("/createVendor", createVendor);

export default router;
