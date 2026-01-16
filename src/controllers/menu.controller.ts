import { Request, Response } from "express";
import { createMenuItem, getMenuData } from "../services/menu.service";

export async function getMenu(
  req: Request,
  res: Response
): Promise<void> {

    try{
        const menu = await getMenuData();
        res.status(200).json({ message: "Menu fetched", data: menu });

    }
    catch(error){
        console.error("Error fetching menu:", error);
        res.status(500).json({ message: "Failed to fetch menu data" }); 
    }
}

export async function createMenu(
  req: Request,
  res: Response
): Promise<void> {
    try{
        const menuItemDetails = req.body;
        console.log("Menu Item Details:", menuItemDetails);
        const result = await createMenuItem(menuItemDetails);
        res.status(200).json({ message: "Menu item created", data: result });
    }
    catch(error){
        console.error("Error creating menu item:", error);
        res.status(500).json({ message: "Failed to create menu item" });
    }
}
