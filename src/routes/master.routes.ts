import { Router } from "express";
import { createEmployee, getEmployees,createVendor  } from "../controllers/master.controller";

const router = Router();

//employee
router.post("/createEmployee", createEmployee);
router.get("/getEmployees", getEmployees);
//vendor
router.post("/createVendor", createVendor);

export default router;
