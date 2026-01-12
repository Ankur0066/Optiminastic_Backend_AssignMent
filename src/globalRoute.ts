const express = require("express")
const app = express();
const router = express.Router()
import  userRoutes  from "./routes/user.routes"
import  authRoutes  from "./routes/auth.routes"
import  masterRoutes  from "./routes/master.routes"
import inventoryRoutes from "./routes/inventory.routes"
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/master", masterRoutes);
router.use("/inventory",inventoryRoutes)

export default router;