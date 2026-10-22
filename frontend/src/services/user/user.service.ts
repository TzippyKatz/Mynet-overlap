import type { CreateUserPayload } from "@libs/types/user/userPayload.type.js";
import type { User } from "@libs/types/user/user.type.js";
import { userAxios } from "../axios.js";

const api = "api/user-service";

export const userService = {
  createUser: async (payload: CreateUserPayload): Promise<User> => {
    const response = await userAxios.post<User>(`${api}/users`, payload);

    return response.data;
  },

  getUsers: async (): Promise<User[]> => {
    const response = await userAxios.get<User[]>(`${api}/users`);

    return response.data;
  },

  getUserById: async (id: string): Promise<User> => {
    const response = await userAxios.get<User>(`${api}/users/${id}`);

    return response.data;
  },
};
