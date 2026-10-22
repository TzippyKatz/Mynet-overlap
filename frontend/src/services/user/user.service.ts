import type { CreateUserPayload } from "@libs/types/user/userPayload.type.js";
import { userAxios } from "../axios.js";
import type { User } from "@libs/types/user/user.type.js";

export const userService = {
  createUser: async (payload: CreateUserPayload): Promise<User> => {
    const response = await userAxios.post("/users", payload);

    return response.data;
  },

  getUsers: async (): Promise<User[]> => {
    const response = await userAxios.get("/users");

    return response.data;
  },

  getUserById: async (id: string): Promise<User | null> => {
    const response = await userAxios.get(`/users/${id}`);

    return response.data;
  },
};
