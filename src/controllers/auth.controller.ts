import { Request, Response } from "express";
import { adminLogin, ForgetPassword, GetUserDetailsByUserName, updatePassword, verifyOTp, } from "../services/user.service";
import { verifyPassword } from "../config/password";


export async function loginUser(req: Request, res: Response): Promise<void> {
  try {
    const { userName, password, loginType } = req.body;

    if (!userName || !password) {
      res.status(400).json({ message: "Username and password are required" });
      return;
    }

    // ===== User Login =====
    const userData = await GetUserDetailsByUserName(userName);

    if (!userData || userData.length === 0) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const user = userData[0];
    const isValid = await verifyPassword( password, user.Password)


  if (!isValid){
      res.status(401).json({ message: "Invalid password" });
      return;
    }

    res.status(200).json({ message: "Login successful", user });  
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Failed to login user" });
  }
}
