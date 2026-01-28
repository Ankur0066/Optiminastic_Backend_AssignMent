"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWalletData = getWalletData;
exports.getWalletDashboardData = getWalletDashboardData;
exports.getWalletLogsData = getWalletLogsData;
exports.rechargeWallet = rechargeWallet;
exports.getUserWalletData = getUserWalletData;
exports.getWalletLogsDataForUser = getWalletLogsDataForUser;
const walllet_sevice_1 = require("../services/walllet.sevice");
async function getWalletData(req, res) {
    try {
        const wallet = await (0, walllet_sevice_1.getWallet)();
        res.status(200).json({ message: "Wallet Data Fetched", data: wallet });
    }
    catch (error) {
        console.error("Error fetching wallet:", error);
        res.status(500).json({ message: "Failed to fetch wallet data" });
    }
}
async function getWalletDashboardData(req, res) {
    try {
        const wallet = await (0, walllet_sevice_1.GetWalletDashboard)();
        res.status(200).json({ message: "Wallet Data Fetched", data: wallet });
    }
    catch (error) {
        console.error("Error fetching wallet:", error);
        res.status(500).json({ message: "Failed to fetch wallet data" });
    }
}
async function getWalletLogsData(req, res) {
    try {
        const wallet = await (0, walllet_sevice_1.getWalletLogs)();
        res.status(200).json({ message: "Wallet Logs Fetched", data: wallet });
    }
    catch (error) {
        console.error("Error fetching wallet logs:", error);
        res.status(500).json({ message: "Failed to fetch wallet logs" });
    }
}
async function rechargeWallet(req, res) {
    try {
        const { amount, walletId } = req.body;
        const wallet = await (0, walllet_sevice_1.RechargeWallet)(amount, walletId);
        res.status(200).json({ message: "Wallet Recharged Successfully", data: wallet });
    }
    catch (error) {
        console.error("Error recharging wallet:", error);
        res.status(500).json({ message: "Failed to recharge wallet" });
    }
}
async function getUserWalletData(req, res) {
    try {
        const { empId } = req.body;
        const wallet = await (0, walllet_sevice_1.getUserWallet)(empId);
        res.status(200).json({ message: "User Wallet Fetched", data: wallet });
    }
    catch (error) {
        console.error("Error fetching user wallet:", error);
        res.status(500).json({ message: "Failed to fetch user wallet" });
    }
}
async function getWalletLogsDataForUser(req, res) {
    try {
        const { empId } = req.body;
        const wallet = await (0, walllet_sevice_1.getWalletLogsForUser)(empId);
        res.status(200).json({ message: "Wallet Logs Fetched", data: wallet });
    }
    catch (error) {
        console.error("Error fetching wallet logs:", error);
        res.status(500).json({ message: "Failed to fetch wallet logs" });
    }
}
