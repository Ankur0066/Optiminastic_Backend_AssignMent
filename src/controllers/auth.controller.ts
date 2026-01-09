import { Request, Response } from "express";
import { GetUserDetailsByUserName, } from "../services/user.service";


export async function loginUser(req: Request, res: Response): Promise<void> {
  try{
    const {userName, password} = req.body;
    // check if userName and password are provided
    if(!userName || !password){
      res.status(400).json({ message: "Username and password are required" });
      return;
    }
    //check if user exists
    const userData = await GetUserDetailsByUserName(userName);
    if(userData.length === 0){
      res.status(404).json({ message: "User not found" });
      return;
    }
    const user = userData[0];
    //check if password matches
    if(user.Password !== password){
      res.status(401).json({ message: "Invalid password" });
      return;
    }
    //login successful
    res.status(200).json({ message: "Login successful", user });

  }catch(error){
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Failed to login user" });
  }

}