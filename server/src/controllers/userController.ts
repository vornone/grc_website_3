import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { user_id: "asc" },
    });
    res.json(users);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving users: ${error.message}` });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = parseInt(req.params.user_id);
    const user = await prisma.user.findUnique({ where: { user_id: userId } });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving user: ${error.message}` });
  }
};
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username } = req.body;
    const existedUser = await prisma.user.findUnique({
      where: { username },
    })
    if (existedUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }
    const user = await prisma.user.create({ data: { username } });
    res.status(201).json(user);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error creating user: ${error.message}` });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = parseInt(req.params.user_id);
    const { username } = req.body;
    const user = await prisma.user.update({
      where: { user_id: userId },
      data: { username },
    });
    res.json(user);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error updating user: ${error.message}` });
  }
};