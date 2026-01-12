"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericMasterDropdown = exports.createItem = exports.getItemData = exports.getVendorData = exports.createVendorMaster = exports.getEmployeeData = exports.createEmployeeMaster = void 0;
const dbconfig_1 = require("../config/dbconfig");
//employeeMaseter
const createEmployeeMaster = async (employeDetails) => {
    try {
        const { EmployeeCode, EmployeeName, Email, CapAmount } = employeDetails;
        const result = await (0, dbconfig_1.executeStoredProcedure)("Stp_Employee", [
            { name: "flag", value: "createEmployee" },
            { name: "employee_code", value: EmployeeCode },
            { name: "employee_name", value: EmployeeName },
            { name: "email", value: Email },
            { name: "cap_amount", value: CapAmount },
        ]);
        return result;
    }
    catch (error) {
        console.error("Error creating employee master:", error);
        throw error;
    }
};
exports.createEmployeeMaster = createEmployeeMaster;
const getEmployeeData = async () => {
    try {
        const employees = await (0, dbconfig_1.executeStoredProcedure)("Stp_Employee", [
            { name: "flag", value: "getAllEmployee" }
        ]);
        return employees;
    }
    catch (error) {
        console.error("Error fetching employees:", error);
        throw error;
    }
};
exports.getEmployeeData = getEmployeeData;
//vendor master
const createVendorMaster = async (vendorDetails) => {
    try {
        const { VendorCode, VendorName, Email, Mobile } = vendorDetails;
        const result = await (0, dbconfig_1.executeStoredProcedure)("Stp_Vendor", [
            { name: "vendor_code", value: VendorCode },
            { name: "vendor_name", value: VendorName },
            { name: "email", value: Email },
            { name: "mobileNumber", value: Mobile },
            { name: "flag", value: "createVendor" }
        ]);
        return result;
    }
    catch (error) {
        console.error("Error creating vendor master:", error);
        throw error;
    }
};
exports.createVendorMaster = createVendorMaster;
const getVendorData = async () => {
    try {
        const vendors = await (0, dbconfig_1.executeStoredProcedure)("Stp_Vendor", [
            { name: "flag", value: "getAllVendor" }
        ]);
        return vendors;
    }
    catch (error) {
        console.error("Error fetching vendors:", error);
        throw error;
    }
};
exports.getVendorData = getVendorData;
//------------------------------------------ITEM MASTER-----------------------------------
const getItemData = async () => {
    try {
        const items = await (0, dbconfig_1.executeStoredProcedure)("Stp_ItemMaster", [
            { name: "flag", value: "GetAllItems" }
        ]);
        return items;
    }
    catch (error) {
        console.error("Error fetching items:", error);
        throw error;
    }
};
exports.getItemData = getItemData;
const createItem = async (itemsDetails) => {
    try {
        const { itemName, category } = itemsDetails;
        const result = await (0, dbconfig_1.executeStoredProcedure)("Stp_ItemMaster", [
            { name: "itemName", value: itemName },
            { name: "category", value: category },
            { name: "flag", value: "CreateItem" }
        ]);
        return result;
    }
    catch (error) {
        console.error("Error creating item master:", error);
        throw error;
    }
};
exports.createItem = createItem;
//---------------------------------------Category--------------------------------
const genericMasterDropdown = async (masterType) => {
    try {
        const { masterTypeId } = masterType;
        const category = await (0, dbconfig_1.executeStoredProcedure)("Stp_ItemMaster", [
            { name: "flag", value: "GetCategory" },
            { name: "masterTypeId", value: masterTypeId }
        ]);
        console.log(category);
        return category;
    }
    catch (error) {
        console.error("Error fetching category:", error);
        throw error;
    }
};
exports.genericMasterDropdown = genericMasterDropdown;
