import { Router } from "express";
import { getUserWalletData,  getWalletData, rechargeWallet,  } from "../controllers/wallet.controller";

const router = Router();

router.get("/getWallet",getWalletData);

router.post("/rechargeWallet",rechargeWallet);

router.post("/getClientWallet",getUserWalletData);





export default router;