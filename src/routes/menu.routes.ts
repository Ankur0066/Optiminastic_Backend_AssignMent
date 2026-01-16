import { Router } from "express";
import { createMenu, getMenu } from "../controllers/menu.controller";



const router = Router();

/**
 * @swagger
 * /menu/getMenu:
 *   get:
 *     summary: Get all menu
 *     tags: [Master]
 *     responses:
 *       200:
 *         description: Menu list fetched successfully
 */
router.get("/getMenu", getMenu);

router.post("/createMenu",createMenu );


export default router;
