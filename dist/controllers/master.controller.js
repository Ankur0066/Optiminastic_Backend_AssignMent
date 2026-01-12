"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmployee = createEmployee;
exports.getEmployees = getEmployees;
exports.createVendor = createVendor;
exports.getVendors = getVendors;
exports.getAllItems = getAllItems;
exports.createItemMaster = createItemMaster;
exports.getGenericMaster = getGenericMaster;
const master_service_1 = require("../services/master.service");
async function createEmployee(req, res) {
    try {
        const { EmployeeCode, EmployeeName, Email, CapAmount } = req.body;
        // validate input
        if (!EmployeeCode || !EmployeeName || !Email || CapAmount === undefined) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }
        const result = await (0, master_service_1.createEmployeeMaster)(req.body);
        res.status(201).json({ message: "Employee created successfully", result });
    }
    catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Failed to fetch users" });
    }
}
async function getEmployees(req, res) {
    try {
        const employees = await (0, master_service_1.getEmployeeData)();
        res.status(200).json({ message: "Employee fetched", data: employees });
    }
    catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json({ message: "Failed to fetch employees" });
    }
}
async function createVendor(req, res) {
    try {
        const { VendorCode, VendorName, Email, Mobile } = req.body;
        // validate input
        if (!VendorCode || !VendorName || !Email || Mobile === undefined) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }
        const result = await (0, master_service_1.createVendorMaster)(req.body);
        if (result[0]?.Result === 0) {
            res.status(400).json({ message: "Vendor already exists" });
            return;
        }
        res.status(201).json({ message: "Vendor created successfully", result });
    }
    catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Failed to Create vendor" });
    }
}
async function getVendors(req, res) {
    try {
        const vendor = await (0, master_service_1.getVendorData)();
        res.status(200).json({ message: 'Vendor Data Fetched', data: vendor });
    }
    catch (error) {
        console.error("Error fetching vendor:", error);
        res.status(500).json({ message: "Failed to fetch vendor" });
    }
}
async function getAllItems(req, res) {
    try {
        const items = await (0, master_service_1.getItemData)();
        res.status(200).json({ message: "Data fetched successfully", data: items });
    }
    catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({ message: "Failed to fetch items" });
    }
}
async function createItemMaster(req, res) {
    try {
        const { itemName, category } = req.body;
        if (!itemName || !category) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }
        const result = await (0, master_service_1.createItem)(req.body);
        res.status(201).json({ message: "Item created successfully", result });
    }
    catch (error) {
        console.error("Error creating item:", error);
        res.status(500).json({ message: "Failed to Create item" });
    }
}
async function getGenericMaster(req, res) {
    try {
        const { masterTypeId } = req.body;
        // validate input
        if (!masterTypeId) {
            res.status(400).json({ message: "MastertypeId are required" });
            return;
        }
        const result = await (0, master_service_1.genericMasterDropdown)(req.body);
        res.status(201).json({ message: "Dropdown data fetched successfully", result });
    }
    catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Failed to fetch data" });
    }
}
