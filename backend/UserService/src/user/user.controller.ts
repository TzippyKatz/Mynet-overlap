import type { Request, Response, NextFunction } from "express";
import { userManager } from "./user.manager.js";

export const userController = {
  create: async (req: Request, res: Response): Promise<void> => {
    res.json(await userManager.create(req.body));
  },

  getAll: async (req: Request, res: Response): Promise<void> => {
    res.json(await userManager.getAll());
  },

  getById: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    if (typeof id !== "string") {
      res.status(400).json({ message: "Invalid user ID" });
      return;
    }

    const user = await userManager.getById(id);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json(user);
  },
};
