import { Request, Response } from "express";
import { getUsers as getUsersService, validateUser } from "../services/user.service";

export async function getUsers(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const users = await getUsersService();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
}
