"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePassword = exports.verifyOTp = exports.ForgetPassword = exports.manageForgetCode = exports.ChangePassword = exports.adminLogin = exports.GetUserDetailsByEmpId = exports.GetUserDetailsByUserName = exports.validateUser = exports.getUsers = void 0;
const dbconfig_1 = require("../config/dbconfig");
const email_1 = require("../config/email");
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
const manageForgetCode = async (type, code, userId, userName) => {
    try {
        if (type === "SETCODE") {
            const users = await (0, dbconfig_1.executeStoredProcedure)("Stp_UserLogin", [
                { name: "empId", value: userId },
                { name: "Code", value: code },
                { name: "flag", value: "AddCode" }
            ]);
            return users;
        }
        const users = await (0, dbconfig_1.executeStoredProcedure)("Stp_UserLogin", [
            { name: "UserName", value: userName },
            { name: "flag", value: "GetCode" }
        ]);
        return users;
    }
    catch (error) {
        console.error("Error Data", error);
    }
};
exports.manageForgetCode = manageForgetCode;
const ForgetPassword = async (userName) => {
    try {
        const users = await (0, exports.GetUserDetailsByUserName)(userName);
        if (!users || users.length === 0) {
            return {
                success: false,
                message: "User not found",
            };
        }
        const userDetails = users[0];
        const resetCode = (0, password_1.generate4DigitCode)();
        const res = await (0, email_1.sendEmail)({
            to: "admin.hr@canimagemediatech.com",
            subject: `Forget Password Reset Code [Canteen Module]`,
            html: `<div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;"> <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);"> <h2 style="color: #2c3e50; text-align: center;">CIMT - Canteen Management System</h2> <p style="font-size: 16px; color: #333;"> Hello <strong>${userDetails.Username}</strong>, </p> <p style="font-size: 15px; color: #555;"> We received a request to reset your password for the Canteen Module. </p> <p style="font-size: 15px; color: #555;"> Your password reset code is: </p> <div style="text-align: center; margin: 20px 0;"> <span style="font-size: 24px; font-weight: bold; letter-spacing: 3px; color: #ffffff; background-color: #007bff; padding: 10px 20px; border-radius: 6px;"> ${resetCode} </span> </div> <p style="font-size: 14px; color: #777;"> This code is valid for a limited time. Please do not share this code with anyone. </p> <hr style="margin: 25px 0; border: none; border-top: 1px solid #eee;" /> <p style="font-size: 14px; color: #555;"> If you did not request this password reset, please ignore this email. </p> <p style="font-size: 15px; color: #333; margin-top: 30px;"> Regards,<br/> <strong>Canteen Module Team</strong><br/> CIMT </p> </div> </div>`,
        });
        if (!res.success) {
            return {
                success: false,
                message: "Email sending failed",
            };
        }
        await (0, exports.manageForgetCode)("SETCODE", resetCode, userDetails.Id, "empty");
        return {
            success: true,
            message: "Reset code sent successfully",
        };
    }
    catch (error) {
        console.error("Error during Password Forget :", error);
        throw error;
    }
};
exports.ForgetPassword = ForgetPassword;
const verifyOTp = async (userName, code) => {
    try {
        const user = await (0, exports.manageForgetCode)("GETCODE", 1234, 124, userName);
        if (!user || user.length === 0) {
            return {
                success: false,
                message: "User not found",
            };
        }
        const userDetails = user[0];
        if (!userDetails.forgetCode) {
            return {
                success: false,
                message: "Reset code not found or expired",
            };
        }
        const storedCode = Number(userDetails.forgetCode);
        const enteredCode = Number(code);
        if (storedCode !== enteredCode) {
            return {
                success: false,
                message: "Invalid reset code",
            };
        }
        // ✅ Code matched
        return {
            success: true,
            message: "Code verified successfully",
            user: userDetails,
        };
    }
    catch (error) {
        console.error("Error Data", error);
        return {
            success: false,
            message: "Internal server error",
        };
    }
};
exports.verifyOTp = verifyOTp;
const updatePassword = async (newPassword, empId) => {
    try {
        const hashedPassword = await (0, password_1.hashPassword)(newPassword);
        console.log("has", hashedPassword);
        const updated = await (0, dbconfig_1.executeStoredProcedure)("Stp_UserLogin", [
            { name: "passWord", value: hashedPassword },
            { name: "empId", value: empId },
            { name: "flag", value: "UpdatePassword" }
        ]);
        return updated;
    }
    catch (error) {
        console.error("Error Data", error);
    }
};
exports.updatePassword = updatePassword;
