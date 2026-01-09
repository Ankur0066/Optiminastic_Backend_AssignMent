import { executeStoredProcedure } from "../config/dbconfig";

interface employeDetails {
    EmployeeCode: string;
    EmployeeName: string;
    Email: string;
    CapAmount: number;
}
interface vendorDetails {
    VendorCode: string;
    VendorName: string;
    Email: string;
    Mobile: number;
}

//employeeMaseter
export const createEmployeeMaster = async (employeDetails : employeDetails) => {
    try {
        const {EmployeeCode, EmployeeName, Email, CapAmount} = employeDetails;
        const result = await executeStoredProcedure("Stp_Employee", [
            {name : "flag", value : "createEmployee"},
            { name: "employee_code", value: EmployeeCode },
            { name: "employee_name", value: EmployeeName },
            { name: "email", value: Email },
            { name: "cap_amount", value: CapAmount },
        ]);
        return result;
        
    }
    catch (error) {
        console.error("Error creating employee master:", error);
        throw error;
    }
}

export const getEmployeeData = async () => {
    try {
        const employees = await executeStoredProcedure("Stp_Employee",[
             {name : "flag", value : "getAllEmployee"}
        ]);
        return employees;
    } catch (error) {
        console.error("Error fetching employees:", error);
        throw error;
    }
};

//vendor master
export const createVendorMaster = async (vendorDetails : vendorDetails) => {
    try {
        const {VendorCode, VendorName, Email, Mobile} = vendorDetails;
        const result = await executeStoredProcedure("Stp_Vendor", [
            { name: "vendor_code", value: VendorCode },
            { name: "vendor_name", value: VendorName },
            { name: "email", value: Email },
            { name: "mobileNumber", value: Mobile },
            { name: "flag", value: "createVendor" }
        ]);
        return result;
        
    }
    catch (error) {
        console.error("Error creating vendor master:", error);
        throw error;
    }
}

export const getVendorData = async () => {
    try {
        const vendors = await executeStoredProcedure("Stp_Vendor",[
            { name: "flag", value: "getAllVendor" }
        ]);
        return vendors;
    } catch (error) {
        console.error("Error fetching vendors:", error);
        throw error;
    }
};


export const getItemData = async () => {
    try {
        const items = await executeStoredProcedure("Stp_ItemMaster",[
            {name : "flag",value:"GetAllItems"}
        ]);        
        return items;
    } catch (error) {
        console.error("Error fetching items:", error);
        throw error;
    }
};