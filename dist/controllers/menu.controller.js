"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenu = getMenu;
exports.createMenu = createMenu;
exports.deleteMenu = deleteMenu;
const menu_service_1 = require("../services/menu.service");
async function getMenu(req, res) {
    try {
        const menu = await (0, menu_service_1.getMenuData)();
        res.status(200).json({ message: "Menu fetched", data: menu });
    }
    catch (error) {
        console.error("Error fetching menu:", error);
        res.status(500).json({ message: "Failed to fetch menu data" });
    }
}
async function createMenu(req, res) {
    try {
        const menuItemDetails = req.body;
        console.log("Menu Item Details:", menuItemDetails);
        const result = await (0, menu_service_1.createMenuItem)(menuItemDetails);
        res.status(200).json({ message: "Menu item created", data: result });
    }
    catch (error) {
        console.error("Error creating menu item:", error);
        res.status(500).json({ message: "Failed to create menu item" });
    }
}
async function deleteMenu(req, res) {
    try {
        const { menuId } = req.body;
        const result = await (0, menu_service_1.deleteMenuById)(menuId);
        const res1 = result[0].Result;
        if (res1 === 1) {
            res.status(200).json({ message: "Menu item deleted", data: result });
        }
    }
    catch (error) {
        console.error("Error deleting menu item:", error);
        res.status(500).json({ message: "Failed to delete menu item" });
    }
}
