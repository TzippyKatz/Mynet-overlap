import type { Request, Response } from "express";
import { authManager } from "./auth.manager.js";
import type { LoginPayload } from "@libs/types/user/userPayload.type.js";

export const authController = {
  login: async (
    req: Request<{}, {}, LoginPayload>,
    res: Response,
  ): Promise<void> => {
    const result = await authManager.login(req.body.username);

    if (!result) {
      res.status(401).json({
        message: "Invalid username",
      });
      return;
    }

    res.json(result);
  },
};
