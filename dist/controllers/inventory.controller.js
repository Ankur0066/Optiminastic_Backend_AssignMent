"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemData = getItemData;
exports.getInventoryLogs = getInventoryLogs;
exports.getAllInventoryData = getAllInventoryData;
exports.createInventory = createInventory;
exports.StockIn = StockIn;
exports.InventoryWastage = InventoryWastage;
const inventory_service_1 = require("../services/inventory.service");
async function getItemData(req, res) {
    const { category } = req.body;
    try {
        const Inventorys = await (0, inventory_service_1.GetSpecificData)(category);
        res.status(200).json({ message: "Inventory fetched", data: Inventorys });
    }
    catch (error) {
        console.error("Error fetching Inventorys:", error);
        res.status(500).json({ message: "Failed to fetch Inventorys" });
    }
}
async function getInventoryLogs(req, res) {
    const { inventoryId } = req.body;
    try {
        const Inventorys = await (0, inventory_service_1.getInvLogs)(inventoryId);
        res.status(200).json({ message: "Inventory Logs fetched", data: Inventorys });
    }
    catch (error) {
        console.error("Error fetching Inventorys:", error);
        res.status(500).json({ message: "Failed to fetch Inventory logs" });
    }
}
async function getAllInventoryData(req, res) {
    try {
        const Inventorys = await (0, inventory_service_1.getInventory)();
        res.status(200).json({ message: "Inventory fetched", data: Inventorys });
    }
    catch (error) {
        console.error("Error fetching Inventorys:", error);
        res.status(500).json({ message: "Failed to fetch Inventorys" });
    }
}
async function createInventory(req, res) {
    try {
        const { itemId, unitId, reorderLvl, amount, vendorId, price } = req.body;
        // validate input
        if (!itemId || !unitId || !reorderLvl || !amount || !vendorId || !price) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }
        console.log("gg", req.body);
        const result = await (0, inventory_service_1.addInventory)(req.body);
        res.status(201).json({ message: "Inventory created successfully", result });
    }
    catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Failed to Create Inventory" });
    }
}
async function StockIn(req, res) {
    try {
        const { inventoryId, itemId, changeQty } = req.body;
        // validate input
        if (!itemId || !itemId || !changeQty) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }
        const result = await (0, inventory_service_1.stockInData)(inventoryId, itemId, changeQty);
        res.status(201).json({ message: "Stockin successfully", result });
    }
    catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Failed to Stockin Inventory" });
    }
}
async function InventoryWastage(req, res) {
    try {
        const { inventoryId, itemId, changeQty, reason } = req.body;
        if (!itemId || !itemId || !changeQty || !reason) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }
        const result = await (0, inventory_service_1.wastage)(inventoryId, itemId, changeQty, reason);
        res.status(201).json({ message: "Wasted Removed successfully", result });
    }
    catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Failed to remove Wasted Inventory" });
    }
}
