"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = loginUser;
const user_service_1 = require("../services/user.service");
async function loginUser(req, res) {
    try {
        const { userName, password, loginType } = req.body;
        if (!userName || !password) {
            res.status(400).json({ message: "Username and password are required" });
            return;
        }
        // ===== Admin Login =====
        if (loginType === "admin") {
            try {
                const admins = await (0, user_service_1.adminLogin)(userName, password); // async function returning array
                if (!admins || admins.length === 0) {
                    res.status(404).json({ message: "Admin not found" });
                    return; // ✅ return after sending response
                }
                const admin = admins[0];
                if (admin?.Password !== password) {
                    res.status(401).json({ message: "Invalid password" });
                    return; // ✅ return after sending response
                }
                // login successful
                res.status(200).json({ message: "Login successful", admin });
                return; // ✅ return to stop further execution
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "Internal server error" });
                return;
            }
        }
        // ===== User Login =====
        const userData = await (0, user_service_1.GetUserDetailsByUserName)(userName);
        if (!userData || userData.length === 0) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        const user = userData[0];
        if (user.Password !== password) {
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
