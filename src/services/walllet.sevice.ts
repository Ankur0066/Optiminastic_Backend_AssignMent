import { executeStoredProcedure } from "../config/dbconfig";

export const getWallet = async () => {
    try {
        const wallet = await executeStoredProcedure("Stp_Wallet", [
            { name: "flag", value: "getWallets" }
        ]);
        return wallet;
    } catch (error) {
        console.error("Error fetching wallet:", error);
        throw error;
    }
};
export const GetWalletDashboard = async () => {
    try {
        const wallet = await executeStoredProcedure("Stp_Wallet", [
            { name: "flag", value: "GetWalletDashboard" }
        ]);
        return wallet;
    } catch (error) {
        console.error("Error fetching wallet:", error);
        throw error;
    }
};
export const RechargeWallet = async (amount: number, walletId: string) => {
    try {
        const wallet = await executeStoredProcedure("Stp_Wallet", [
            { name: "flag", value: "RechargeWallet" },
            { name: "AddAmnt", value: amount },
            { name: "walletId", value: walletId }
        ]);
        return wallet;
    } catch (error) {
        console.error("Error Recharging wallet:", error);
        throw error;
    }
};