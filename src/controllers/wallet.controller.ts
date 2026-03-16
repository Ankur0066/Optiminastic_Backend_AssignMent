import { Request, Response } from "express";
import { getUserWallet, getWallet, RechargeWallet } from "../services/walllet.sevice";

export async function getWalletData(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const wallet = await getWallet();
        res.status(200).json({ message: "Wallet Data Fetched", data: wallet });
    } catch (error) {

        console.error("Error fetching wallet:", error);
        res.status(500).json({ message: "Failed to fetch wallet data" });
    }
}

export async function rechargeWallet(
    req: Request,
    res: Response   
): Promise<void> {
    try {
        const { amount, walletId } = req.body;
        const wallet = await RechargeWallet(amount, walletId);
        res.status(200).json({ message: "Wallet Recharged Successfully", data: wallet });
    } catch (error) {
        console.error("Error recharging wallet:", error);

        res.status(500).json({ message: "Failed to recharge wallet" });
    }
}

export async function getUserWalletData(
    req: Request,
    res: Response
): Promise<void> {
    try {
       const { empId } = req.body;
        const wallet = await getUserWallet(empId);
        res.status(200).json({ message: "User Wallet Fetched", data: wallet });
    } catch (error) {
        console.error("Error fetching user wallet:", error);
        res.status(500).json({ message: "Failed to fetch user wallet" });
    }
}