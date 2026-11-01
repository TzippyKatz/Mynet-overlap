import type { User } from "@libs/types/user/user.type.js";
import { type Document, model, Schema } from "mongoose";

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

export const userModel = model<User & Document>("users", userSchema);
