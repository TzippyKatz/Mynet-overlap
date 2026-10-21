import type { CreateUserPayload } from "@libs/types/user/userPayload.js";
import type { User } from "@libs/Types/user/user.type.js";
import { userModel } from "../models/user.model.js";

export const userRepository = {
  create: async (user: CreateUserPayload): Promise<User> =>
    await userModel.create(user),

  getAll: async (): Promise<User[]> => await userModel.find(),

  getById: async (id: string): Promise<User | null> =>
    await userModel.findById(id),
};
