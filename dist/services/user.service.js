"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgetPassword = exports.ChangePassword = exports.adminLogin = exports.GetUserDetailsByEmpId = exports.GetUserDetailsByUserName = exports.validateUser = exports.getUsers = void 0;
const dbconfig_1 = require("../config/dbconfig");
const password_1 = require("../config/password");
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
            { name: "flag", value: "GetDataByUserName" }
        ]);
        return data;
    }
    catch (error) {
        console.error("Error fetching user details by UserId:", error);
        throw error;
    }
};
exports.GetUserDetailsByUserName = GetUserDetailsByUserName;
const GetUserDetailsByEmpId = async (empId) => {
    try {
        const data = await (0, dbconfig_1.executeStoredProcedure)("Stp_UserLogin", [
            { name: "empId", value: empId },
            { name: "flag", value: "GetDataByUserId" }
        ]);
        return data;
    }
    catch (error) {
        console.error("Error fetching user details by UserId:", error);
        throw error;
    }
};
exports.GetUserDetailsByEmpId = GetUserDetailsByEmpId;
const adminLogin = async (Username, Password) => {
    try {
        const data = await (0, dbconfig_1.executeStoredProcedure)("Stp_AdminLogin", [
            { name: "Username", value: Username },
            { name: "Password", value: Password }
        ]);
        return data;
    }
    catch (error) {
        console.error("Error during admin login:", error);
        throw error;
    }
};
exports.adminLogin = adminLogin;
const ChangePassword = async (empId, inputpassword, NewPass) => {
    try {
        const hasPass = await (0, password_1.hashPassword)(NewPass);
        const data = await (0, dbconfig_1.executeStoredProcedure)("Stp_ChangePassword", [
            { name: "empId", value: empId },
            { name: "NewPass", value: hasPass }
        ]);
        return data;
    }
    catch (error) {
        console.error("Error during Password change :", error);
        throw error;
    }
};
exports.ChangePassword = ChangePassword;
const ForgetPassword = async () => {
    try {
    }
    catch (error) {
        console.error("Error during Password Forget :", error);
        throw error;
    }
};
exports.ForgetPassword = ForgetPassword;
