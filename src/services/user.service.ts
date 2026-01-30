import { executeStoredProcedure } from "../config/dbconfig";
import { hashPassword } from "../config/password";

export const getUsers = async () => {
    try {
        const users = await executeStoredProcedure("Stp_GetAllUsers");
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const validateUser = async (Username: string) => {
    try {
        const data = await executeStoredProcedure("Stp_GetUserDetailsById", [
            { name: "Username", value: Username },
        ]);
        return data;
    } catch (error) {
        console.error("Error validating user:", error);
        throw error;
    }
}

export const GetUserDetailsByUserName = async (Username: string) => {
    try {
        const data = await executeStoredProcedure("Stp_UserLogin", [
            { name: "Username", value: Username },
            { name: "flag", value: "GetDataByUserName" }
        ]);
        return data;
    } catch (error) {
        console.error("Error fetching user details by UserId:", error);
        throw error;
    }
}
export const GetUserDetailsByEmpId = async (empId: string) => {
    try {
        const data = await executeStoredProcedure("Stp_UserLogin", [
            { name: "empId", value: empId },
            { name: "flag", value: "GetDataByUserId" }
        ]);
        return data;
    } catch (error) {
        console.error("Error fetching user details by UserId:", error);
        throw error;
    }
}


export const adminLogin = async (Username: string, Password: string) => {
    try {
        const data = await executeStoredProcedure("Stp_AdminLogin", [   
            { name: "Username", value: Username },
            { name: "Password", value: Password }
        ]);
        return data;
    } catch (error) {
        console.error("Error during admin login:", error);
        throw error;
    }
};
export const ChangePassword = async(empId: Number, inputpassword : string, NewPass : string)=>{
    try{
        const hasPass = await hashPassword(NewPass)
        const data = await executeStoredProcedure("Stp_ChangePassword", [
            { name: "empId", value: empId },
            { name: "NewPass", value: hasPass }
        ])
         return data;
    }catch(error) {
        console.error("Error during Password change :", error);
        throw error;
    }
}

