import { Request, Response } from "express";
import { createEmployeeMaster, createVendorMaster, getEmployeeData, getVendorData } from "../services/master.service";

export async function createEmployee(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { EmployeeCode, EmployeeName, Email, CapAmount } = req.body;
    // validate input
    if (!EmployeeCode || !EmployeeName || !Email || CapAmount === undefined) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }
    const result = await createEmployeeMaster(req.body);

    res.status(201).json({ message: "Employee created successfully", result });

  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
}

export async function getEmployees(
  req: Request,
  res: Response
): Promise<void> {
    try {
        const employees = await getEmployeeData();
        res.status(200).json({message: "Employee fetched", data: employees});
    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json({ message: "Failed to fetch employees" });
    }
}

export async function createVendor(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { VendorCode, VendorName, Email, Mobile } = req.body;
    // validate input
    if (!VendorCode || !VendorName || !Email || Mobile === undefined) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }
    const result = await createVendorMaster(req.body);
    if (result[0]?.Result === 0) {
      res.status(400).json({ message: "Vendor already exists" });
      return;
    }
    res.status(201).json({ message: "Vendor created successfully", result });


  }
  catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Failed to Create vendor" });
  }
}


export async function getVendors(
  req: Request,
  res: Response
): Promise<void> {
 try {
        const vendor = await getVendorData();
        res.status(200).json(vendor);
    } catch (error) {
        console.error("Error fetching vendor:", error);
        res.status(500).json({ message: "Failed to fetch vendor" });
    }
}



