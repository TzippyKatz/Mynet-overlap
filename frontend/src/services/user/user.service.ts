import type { CreateUserPayload } from "@libs/types/user/userPayload.type.js";
import type { User } from "@libs/types/user/user.type.js";
import { userAxios } from "../axios.js";

export const createUser = async (payload: CreateUserPayload): Promise<User> => {
  const response = await userAxios.post<User>("/users", payload);

  return response.data;
};

export const getUsers = async (): Promise<User[]> => {
  const response = await userAxios.get<User[]>("/users");

  return response.data;
};

export const getUserById = async (id: string): Promise<User> => {
  const response = await userAxios.get<User>(`/users/${id}`);

  return response.data;
};
