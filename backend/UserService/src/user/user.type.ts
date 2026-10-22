import type { User } from "@libs/Types/user/user.type.js";

export type CreateUserPayload = Omit<User, "_id">;
