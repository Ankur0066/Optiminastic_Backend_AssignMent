"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderData = getOrderData;
exports.getSepcificOrderData = getSepcificOrderData;
exports.placeOrderData = placeOrderData;
exports.updateOrderStatusData = updateOrderStatusData;
const order_service_1 = require("../services/order.service");
async function getOrderData(req, res) {
    try {
        const orders = await (0, order_service_1.getAllOrders)();
        res.status(200).json({ message: "Orders fetched successfully", data: orders });
    }
    catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Failed to fetch orders" });
    }
}
async function getSepcificOrderData(req, res) {
    try {
        const { empId } = req.body;
        const orders = await (0, order_service_1.getOrders)(empId);
        res.status(200).json({ message: "Orders fetched successfully", data: orders });
    }
    catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Failed to fetch orders" });
    }
}
async function placeOrderData(req, res) {
    try {
        const { cart, orderRefId, empId, orderAmnt, walletId } = req.body;
        const orderInfo = { orderRefId, empId, orderAmnt, walletId };
        const order = await (0, order_service_1.PlaceOrder)(cart, orderInfo);
        res.status(200).json({ message: "Order placed successfully", data: order });
    }
    catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ message: "Failed to place order" });
    }
}
async function updateOrderStatusData(req, res) {
    try {
        const { orderId, statusId } = req.body;
        const result = await (0, order_service_1.updateOrderStatus)(orderId, statusId);
        res.status(200).json({ message: "Order status updated successfully", data: result });
    }
    catch (error) {
        console.error("Error updating order status:", error);
        res.status(500).json({ message: "Failed to update order status" });
    }
}
