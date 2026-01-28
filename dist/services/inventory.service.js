"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wastage = exports.getInvLogs = exports.stockInData = exports.addInventory = exports.getInventory = exports.GetSpecificData = void 0;
const dbconfig_1 = require("../config/dbconfig");
const GetSpecificData = async (category) => {
    try {
        const inventory = await (0, dbconfig_1.executeStoredProcedure)("Stp_InventoryMaster", [
            { name: "flag", value: "GetSpecificData" },
            { name: "category", value: category }
        ]);
        return inventory;
    }
    catch (error) {
        console.error("Error fetching inventory:", error);
        throw error;
    }
};
exports.GetSpecificData = GetSpecificData;
const getInventory = async () => {
    try {
        const inventory = await (0, dbconfig_1.executeStoredProcedure)("Stp_InventoryMaster", [
            { name: "flag", value: "GetAllInventory" }
        ]);
        return inventory;
    }
    catch (error) {
        console.error("Error fetching inventory:", error);
        throw error;
    }
};
exports.getInventory = getInventory;
const addInventory = async (inventoryData) => {
    try {
        const { itemId, unitId, reorderLvl, amount, vendorId } = inventoryData;
        const result = await (0, dbconfig_1.executeStoredProcedure)("Stp_InventoryMaster", [
            { name: "itemId", value: itemId },
            { name: "unitId", value: unitId },
            { name: "reorderLvl", value: reorderLvl },
            { name: "amount", value: amount },
            { name: "vendorId", value: vendorId },
            { name: "flag", value: "CreateInventory" }
        ]);
        return result;
    }
    catch (error) {
        console.error("Error creating vendor master:", error);
        throw error;
    }
};
exports.addInventory = addInventory;
const stockInData = async (inventoryId, itemId, changeQty) => {
    try {
        const result = await (0, dbconfig_1.executeStoredProcedure)("Stp_InventoryMaster", [
            { name: "itemId", value: itemId },
            { name: "inventoryId", value: inventoryId },
            { name: "changeQty", value: changeQty },
            { name: "flag", value: "StockIn" }
        ]);
        return result;
    }
    catch (error) {
        console.error("Error creating vendor master:", error);
        throw error;
    }
};
exports.stockInData = stockInData;
const getInvLogs = async (inventoryId) => {
    try {
        const inventory = await (0, dbconfig_1.executeStoredProcedure)("Stp_InventoryMaster", [
            { name: "flag", value: "logs" },
            { name: "inventoryId", value: inventoryId }
        ]);
        return inventory;
    }
    catch (error) {
        console.error("Error fetching log:", error);
        throw error;
    }
};
exports.getInvLogs = getInvLogs;
const wastage = async (inventoryId, itemId, changeQty, reason) => {
    try {
        const result = await (0, dbconfig_1.executeStoredProcedure)("Stp_InventoryMaster", [
            { name: "itemId", value: itemId },
            { name: "inventoryId", value: inventoryId },
            { name: "changeQty", value: changeQty },
            { name: "reason", value: reason },
            { name: "flag", value: "Wastage" }
        ]);
        return result;
    }
    catch (error) {
        console.error("Error Putting to wastage", error);
    }
};
exports.wastage = wastage;
