import type { Request, Response } from "express";
import { userManager } from "./user.manager.js";

export const userController = {
  create: async (req: Request, res: Response): Promise<void> => {
    res.json(await userManager.create(req.body));
  },

  getAll: async (req: Request, res: Response): Promise<void> => {
    res.json(await userManager.getAll());
  },

  getById: async (
    req: Request<{ id: string }>,
    res: Response,
  ): Promise<void> => {
    res.json(await userManager.getById(req.params.id));
  },
};
