"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
exports.ChangePasswordData = ChangePasswordData;
const user_service_1 = require("../services/user.service");
const password_1 = require("../config/password");
async function getUsers(req, res) {
    try {
        const users = await (0, user_service_1.getUsers)();
        res.status(200).json(users);
    }
    catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Failed to fetch users" });
    }
}
async function ChangePasswordData(req, res) {
    try {
        const { empId, inputpassword, NewPass } = req.body;
        if (!empId || !inputpassword || !NewPass) {
            res.status(400).json({ message: "Employee ID and password are required" });
            return;
        }
        const userData = await (0, user_service_1.GetUserDetailsByEmpId)(empId);
        if (!userData || userData.length === 0) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        const user = userData[0];
        const isValid = await (0, password_1.verifyPassword)(inputpassword, user.Password);
        if (!isValid) {
            res.status(401).json({ message: "Invalid Current Password" });
            return;
        }
        const userPassChange = await (0, user_service_1.ChangePassword)(empId, inputpassword, NewPass);
        res.status(200).json({ message: "PassWord Changed Sucessfully", userPassChange });
    }
    catch (error) {
        console.error("Error Updating Password:", error);
        res.status(500).json({ message: "Failed to fetch users" });
    }
}
