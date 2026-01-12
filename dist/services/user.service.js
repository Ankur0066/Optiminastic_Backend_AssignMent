"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserDetailsByUserName = exports.validateUser = exports.getUsers = void 0;
const dbconfig_1 = require("../config/dbconfig");
const getUsers = async () => {
    try {
        const users = await (0, dbconfig_1.executeStoredProcedure)("Stp_GetAllUsers");
        return users;
    }
    catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};
exports.getUsers = getUsers;
const validateUser = async (Username) => {
    try {
        const data = await (0, dbconfig_1.executeStoredProcedure)("Stp_GetUserDetailsById", [
            { name: "Username", value: Username },
        ]);
        return data;
    }
    catch (error) {
        console.error("Error validating user:", error);
        throw error;
    }
};
exports.validateUser = validateUser;
const GetUserDetailsByUserName = async (Username) => {
    try {
        const data = await (0, dbconfig_1.executeStoredProcedure)("Stp_UserLogin", [
            { name: "Username", value: Username },
        ]);
        return data;
    }
    catch (error) {
        console.error("Error fetching user details by UserId:", error);
        throw error;
    }
};
exports.GetUserDetailsByUserName = GetUserDetailsByUserName;
