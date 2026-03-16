import { Request, Response } from "express";
import { addInventory, getInventory } from "../services/inventory.service";



export async function getAllInventoryData(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const Inventorys = await getInventory();
    res.status(200).json({ message: "Inventory fetched", data: Inventorys });
  } catch (error) {
    console.error("Error fetching Inventorys:", error);
    res.status(500).json({ message: "Failed to fetch Inventorys" });
  }
}


export async function createInventory(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const {itemId,unitId,reorderLvl,amount,vendorId , price } = req.body;
    // validate input
    if (!itemId || !unitId || !reorderLvl || !amount || !vendorId || !price) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }
    console.log("gg", req.body)
    const result = await addInventory(req.body);
    
    res.status(201).json({ message: "Inventory created successfully", result });


  }
  catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Failed to Create Inventory" });
  }
}
