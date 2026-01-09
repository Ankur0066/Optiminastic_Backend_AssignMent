import { executeStoredProcedure } from "../config/dbconfig";

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
        ]);
        return data;
    } catch (error) {
        console.error("Error fetching user details by UserId:", error);
        throw error;
    }
}
