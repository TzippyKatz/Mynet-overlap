import { type Document, model, Schema } from "mongoose";
import type { User } from "../libs/Types/user/user.type.js";

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
