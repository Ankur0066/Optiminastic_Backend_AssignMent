import { Router } from "express";
import { getWalletDashboardData, getWalletData, rechargeWallet } from "../controllers/wallet.controller";

const router = Router();

router.get("/getWallet",getWalletData);
router.get("/getWalletDashboard",getWalletDashboardData);
router.post("/rechargeWallet",rechargeWallet);




export default router;