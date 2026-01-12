"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
const user_service_1 = require("../services/user.service");
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
