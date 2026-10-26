import jwt from "jsonwebtoken";
import { userRepository } from "../user/user.repository.js";
import type { LoginResult } from "@libs/types/user/userPayload.type.js";

export const authManager = {
  login: async (username: string): Promise<LoginResult | null> => {
    const user = await userRepository.getByUsername(username);

    if (!user) {
      return null;
    }

    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error("JWT_SECRET is not configured");
    }

    const token = jwt.sign(
      {
        userId: user._id.toString(),
        username: user.username,
      },
      secret,
      { expiresIn: "1h" },
    );

    return {
      token,
      user: {
        _id: user._id.toString(),
        username: user.username,
        displayedName: user.displayedName,
      },
    };
  },
};
