import { executeStoredProcedure } from "../config/dbconfig";

interface inventoryData {
    itemId: Number,
    unitId: Number,
    reorderLvl: Number,
    amount: Number,
    vendorId: Number,
    price : Number
}


export const getInventory = async () => {
    try {
        const inventory = await executeStoredProcedure("Stp_InventoryMaster", [
            { name: "flag", value: "GetAllInventory" }
        ]);
        return inventory;
    } catch (error) {
        console.error("Error fetching inventory:", error);
        throw error;
    }
};

export const addInventory = async (inventoryData: inventoryData) => {
    try {
        const { itemId,unitId,reorderLvl,amount,vendorId, price} = inventoryData;
       
        const result = await executeStoredProcedure("Stp_InventoryMaster", [
            { name: "itemId", value: itemId },
            { name: "unitId", value: unitId },
            { name: "reorderLvl", value: reorderLvl },
            { name: "amount", value: amount },
            { name: "vendorId", value: vendorId },
            { name: "price", value: price },
            { name: "flag", value: "CreateInventory" }
        ]);
        return result;

    }
    catch (error) {
        console.error("Error creating vendor master:", error);
        throw error;
    }
}



