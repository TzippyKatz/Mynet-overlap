import type { User } from "./user.type.js";

export type CreateUserPayload = Omit<User, "_id">;
