"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderStatus = exports.PlaceOrder = exports.getOrders = exports.getAllOrders = void 0;
const dbconfig_1 = require("../config/dbconfig");
const getAllOrders = async () => {
    try {
        const orders = await (0, dbconfig_1.executeStoredProcedure)("Stp_Order", [
            { name: "flag", value: "getAllOrders" }
        ]);
        const formattedOrders = orders.map(order => {
            return {
                ...order,
                items: order.items && typeof order.items === 'string'
                    ? JSON.parse(order.items)
                    : order.items
            };
        });
        return formattedOrders;
    }
    catch (error) {
        console.error("Error fetching orders:", error);
        throw error;
    }
};
exports.getAllOrders = getAllOrders;
const getOrders = async (empId) => {
    try {
        const orders = await (0, dbconfig_1.executeStoredProcedure)("Stp_Order", [
            { name: "flag", value: "getOrder" },
            { name: "empId", value: empId }
        ]);
        const formattedOrders = orders.map(order => {
            return {
                ...order,
                items: order.items && typeof order.items === 'string'
                    ? JSON.parse(order.items)
                    : order.items
            };
        });
        return formattedOrders;
    }
    catch (error) {
        console.error("Error fetching orders:", error);
        throw error;
    }
};
exports.getOrders = getOrders;
const PlaceOrder = async (cart, orderInfo) => {
    try {
        const { orderRefId, empId, orderAmnt, walletId, capDeduction, walletDeduction } = orderInfo;
        const order = await (0, dbconfig_1.executeStoredProcedure)("Stp_Order", [
            { name: "flag", value: "PlaceOrder" },
            { name: "orderRefId", value: orderRefId },
            { name: "empId", value: empId },
            { name: "orderAmnt", value: orderAmnt },
            { name: "walletId", value: walletId },
            { name: "capDeduction", value: capDeduction },
            { name: "walletDeduction", value: walletDeduction },
            { name: "cart", value: JSON.stringify(cart) }
        ]);
        return order;
    }
    catch (error) {
        console.error("Error placing order:", error);
        throw error;
    }
};
exports.PlaceOrder = PlaceOrder;
const updateOrderStatus = async (orderId, statusId) => {
    try {
        const result = await (0, dbconfig_1.executeStoredProcedure)("Stp_Order", [
            { name: "flag", value: "UpdateStatus" },
            { name: "orderId", value: orderId },
            { name: "statusId", value: statusId }
        ]);
        return result;
    }
    catch (error) {
        console.error("Error updating order status:", error);
        throw error;
    }
};
exports.updateOrderStatus = updateOrderStatus;
