import jwt from "jsonwebtoken";
import { userRepository } from "../user/user.repository.js";
import type { LoginResult } from "@libs/types/user/user.type.js";
import { config } from "../config.js";
import isNil from "lodash/isNil.js";

export const authManager = {
  login: async (username: string): Promise<LoginResult | null> => {
    const user = await userRepository.getByUsername(username);

    if (isNil(user)) {
      throw new Error(`User with name: ${username} does not exist`);
    }

    const secret = config.jwt.secret;

    if (!secret) {
      throw new Error("JWT_SECRET is not configured");
    }

    const token = jwt.sign(
      {
        userId: String(user._id),
        username: user.username,
      },
      secret,
      { expiresIn: "1h" },
    );

    return {
      token,
      user: {
        ...user,
        _id: String(user._id),
      },
    };
  },
};
