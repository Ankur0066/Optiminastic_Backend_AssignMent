const express = require("express")
const app = express();
const router = express.Router()

import  authRoutes  from "./routes/auth.routes"

import inventoryRoutes from "./routes/inventory.routes"
import menuRoutes from "./routes/menu.routes"
import walletRoutes from "./routes/wallet.routes"
import orderRoutes from "./routes/order.routes"

router.use("/auth", authRoutes);

router.use("/inventory",inventoryRoutes)
router.use("/menu", menuRoutes);
router.use("/wallet",walletRoutes);
router.use("/order",orderRoutes);

export default router;