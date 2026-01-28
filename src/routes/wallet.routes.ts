import { Router } from "express";
import { getUserWalletData, getWalletDashboardData, getWalletData, getWalletLogsData, getWalletLogsDataForUser, rechargeWallet } from "../controllers/wallet.controller";

const router = Router();

router.get("/getWallet",getWalletData);
router.get("/getWalletDashboard",getWalletDashboardData);
router.post("/rechargeWallet",rechargeWallet);
router.get("/getWalletLogs",getWalletLogsData);
router.post("/getUserWallet",getUserWalletData);
router.post("/getWalletLogsForUser",getWalletLogsDataForUser);




export default router;