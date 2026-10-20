import type { Document, Model } from "mongoose";
import type { CreateUserPayload } from "@libs/types/user/userPayload.type.js";
import type { User } from "@libs/Types/user/user.type.js";
import { userModel } from "../models/user.model.js";

type UserDocument = User & Document;

export const userRepository = {
  create: async (user: CreateUserPayload): Promise<UserDocument> =>
    await userModel.create(user),

  getAll: async (): Promise<UserDocument[]> => await userModel.find(),

  getById: async (id: string): Promise<UserDocument | null> =>
    await userModel.findById(id),
};
