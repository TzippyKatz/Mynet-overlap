import type { CreateUserPayload, LoginPayload, LoginResult } from "@libs/types/user/userPayload.type.js";
import { userAxios } from "../axios.js";
import type { User } from "@libs/types/user/user.type.js";

export const userService = {
  login: async (payload: LoginPayload): Promise<LoginResult> => {
    const response = await userAxios.post("/auth/login", payload);

    return response.data;
  },

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
