import { type Document, model, Schema } from "mongoose";

export type User = {
  username: string;
  displayedName: string;
};

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
