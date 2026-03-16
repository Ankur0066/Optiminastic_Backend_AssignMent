import { Router } from "express";
import { getOrderData, placeOrderData,  } from "../controllers/order.controller";


const router = Router();

router.get("/getOrders",getOrderData);
router.post("/createOrder",placeOrderData);




export default router;
