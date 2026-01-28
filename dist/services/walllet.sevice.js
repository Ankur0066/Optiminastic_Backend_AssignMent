"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWalletLogsForUser = exports.getUserWallet = exports.RechargeWallet = exports.getWalletLogs = exports.GetWalletDashboard = exports.getWallet = void 0;
const dbconfig_1 = require("../config/dbconfig");
const getWallet = async () => {
    try {
        const wallet = await (0, dbconfig_1.executeStoredProcedure)("Stp_Wallet", [
            { name: "flag", value: "getWallets" }
        ]);
        return wallet;
    }
    catch (error) {
        console.error("Error fetching wallet:", error);
        throw error;
    }
};
exports.getWallet = getWallet;
const GetWalletDashboard = async () => {
    try {
        const wallet = await (0, dbconfig_1.executeStoredProcedure)("Stp_Wallet", [
            { name: "flag", value: "GetWalletDashboard" }
        ]);
        return wallet;
    }
    catch (error) {
        console.error("Error fetching wallet:", error);
        throw error;
    }
};
exports.GetWalletDashboard = GetWalletDashboard;
const getWalletLogs = async () => {
    try {
        const wallet = await (0, dbconfig_1.executeStoredProcedure)("Stp_Wallet", [
            { name: "flag", value: "walletLogs" }
        ]);
        return wallet;
    }
    catch (error) {
        console.error("Error fetching wallet logs:", error);
        throw error;
    }
};
exports.getWalletLogs = getWalletLogs;
const RechargeWallet = async (amount, walletId) => {
    try {
        const wallet = await (0, dbconfig_1.executeStoredProcedure)("Stp_Wallet", [
            { name: "flag", value: "RechargeWallet" },
            { name: "AddAmnt", value: amount },
            { name: "walletId", value: walletId }
        ]);
        return wallet;
    }
    catch (error) {
        console.error("Error Recharging wallet:", error);
        throw error;
    }
};
exports.RechargeWallet = RechargeWallet;
const getUserWallet = async (empId) => {
    try {
        const wallet = await (0, dbconfig_1.executeStoredProcedure)("Stp_Wallet", [
            { name: "flag", value: "UserWallet" },
            { name: "empId", value: empId }
        ]);
        return wallet;
    }
    catch (error) {
        console.error("Error fetching user wallet:", error);
        throw error;
    }
};
exports.getUserWallet = getUserWallet;
const getWalletLogsForUser = async (empId) => {
    try {
        const wallet = await (0, dbconfig_1.executeStoredProcedure)("Stp_Wallet", [
            { name: "flag", value: "walletLogsForUser" },
            { name: "empId", value: empId }
        ]);
        console.log(wallet);
        return wallet;
    }
    catch (error) {
        console.error("Error fetching wallet logs:", error);
        throw error;
    }
};
exports.getWalletLogsForUser = getWalletLogsForUser;
