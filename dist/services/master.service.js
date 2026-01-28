"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategorySpecificData = exports.createPrice = exports.getPriceData = exports.genericMasterDropdown = exports.createItem = exports.getItemData = exports.getVendorData = exports.createVendorMaster = exports.getEmployeeData = exports.createEmployeeMaster = void 0;
const dbconfig_1 = require("../config/dbconfig");
//employeeMaseter
const createEmployeeMaster = async (employeDetails) => {
    try {
        const { EmployeeCode, EmployeeName, Email, CapAmount, mobile, userName } = employeDetails;
        const result = await (0, dbconfig_1.executeStoredProcedure)("Stp_Employee", [
            { name: "flag", value: "createEmployee" },
            { name: "employee_code", value: EmployeeCode },
            { name: "employee_name", value: EmployeeName },
            { name: "email", value: Email },
            { name: "mobile", value: mobile },
            { name: "userName", value: userName },
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
        /// console.log(category);
        return category;
    }
    catch (error) {
        console.error("Error fetching category:", error);
        throw error;
    }
};
exports.genericMasterDropdown = genericMasterDropdown;
//price master
const getPriceData = async () => {
    try {
        const price = await (0, dbconfig_1.executeStoredProcedure)("Stp_PriceMAster", [
            { name: "flag", value: "GetAllPrice" },
            { name: "itemId", value: null },
            { name: "price", value: null },
            { name: "periodFrom", value: null },
            { name: "periodTo", value: null }
        ]);
        // console.log(price)
        return price;
    }
    catch (error) {
        console.error("Error fetching price:", error);
        throw error;
    }
};
exports.getPriceData = getPriceData;
const createPrice = async (priceDetails) => {
    try {
        const { itemId, price, periodFrom, periodTo } = priceDetails;
        const result = await (0, dbconfig_1.executeStoredProcedure)("Stp_PriceMAster", [
            { name: "itemId", value: itemId },
            { name: "price", value: price },
            { name: "periodFrom", value: periodFrom },
            { name: "periodTo", value: periodTo },
            { name: "flag", value: "CreateItem" }
        ]);
        return result;
    }
    catch (error) {
        console.error("Error creating item master:", error);
        throw error;
    }
};
exports.createPrice = createPrice;
const getCategorySpecificData = async (category) => {
    try {
        const price = await (0, dbconfig_1.executeStoredProcedure)("Stp_ItemMaster", [
            { name: "flag", value: "getCategorySpecific" },
            { name: "category", value: category }
        ]);
        // console.log(price)
        return price;
    }
    catch (error) {
        console.error("Error fetching price:", error);
        throw error;
    }
};
exports.getCategorySpecificData = getCategorySpecificData;
