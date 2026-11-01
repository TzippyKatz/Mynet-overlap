import type { Request, Response } from "express";
import { authManager } from "./auth.manager.js";
import type { LoginPayload } from "@libs/types/user/user.type.js";

export const authController = {
  login: async (
    req: Request<{}, {}, LoginPayload>,
    res: Response,
  ): Promise<void> => {
    res.json(await authManager.login(req.body.username));
  },
};
