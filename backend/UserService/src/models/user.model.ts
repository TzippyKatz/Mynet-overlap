import { type Document, Schema } from "mongoose";
import type { User } from "../../../../libs/src/Types/user/user.type.js";
import { userServiceConnection } from "../database.js";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  displayedName: {
    type: String,
    required: true,
  },
});

export const userModel = userServiceConnection.model<User & Document>(
  "users",
  userSchema,
);
