import type { User } from "./user.type.js";

export type CreateUserPayload = Omit<User, "_id">;

export type LoginPayload = Pick<User, "username">;

export type LoginResult = {
  token: string;
  user: User;
};
