"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = loginUser;
exports.forgetPass = forgetPass;
exports.OTPVerify = OTPVerify;
exports.updatePasswordData = updatePasswordData;
const user_service_1 = require("../services/user.service");
const password_1 = require("../config/password");
async function loginUser(req, res) {
    try {
        const { userName, password, } = req.body;
        if (!userName || !password) {
            res.status(400).json({ message: "Username and password are required" });
            return;
        }
        // // ===== Admin Login =====
        // if (loginType === "admin") {
        //   try {
        //     const admins = await adminLogin(userName, password); // async function returning array
        //     if (!admins || admins.length === 0) {
        //       res.status(404).json({ message: "Admin not found" });
        //       return; // ✅ return after sending response
        //     }
        //     const admin = admins[0];
        //     if (admin?.Password !== password) {
        //       res.status(401).json({ message: "Invalid password" });
        //       return; // ✅ return after sending response
        //     }
        //     // login successful
        //     res.status(200).json({ message: "Login successful", admin });
        //     return; // ✅ return to stop further execution
        //   } catch (error) {
        //     console.error(error);
        //     res.status(500).json({ message: "Internal server error" });
        //     return;
        //   }
        // }
        // ===== User Login =====
        const userData = await (0, user_service_1.GetUserDetailsByUserName)(userName);
        if (!userData || userData.length === 0) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        const user = userData[0];
        const isValid = await (0, password_1.verifyPassword)(password, user.Password);
        if (!isValid) {
            res.status(401).json({ message: "Invalid password" });
            return;
        }
        res.status(200).json({ message: "Login successful", user });
    }
    catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ message: "Failed to login user" });
    }
}
async function forgetPass(req, res) {
    try {
        const { userName } = req.body;
        const passRes = await (0, user_service_1.ForgetPassword)(userName);
        if (passRes.success) {
            return res.status(200).json(passRes);
        }
        return res.status(400).json(passRes); // use 400 instead of 500 for logical failure
    }
    catch (error) {
        console.error("Error in forgetPass:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}
async function OTPVerify(req, res) {
    try {
        const { userName, code } = req.body;
        const verify = await (0, user_service_1.verifyOTp)(userName, code);
        if (!verify.success) {
            return res.status(400).json(verify);
        }
        return res.status(200).json(verify);
    }
    catch (error) {
        console.error("Error in OTPVerify:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}
async function updatePasswordData(req, res) {
    try {
        const { newPassword, empId } = req.body;
        const verify = await (0, user_service_1.updatePassword)(newPassword, empId);
        res.status(200).json({ message: "Password Updated", verify });
    }
    catch (error) {
        console.error("Error in OTPVerify:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}
