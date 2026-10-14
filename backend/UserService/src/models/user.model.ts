import type { Connection, Document, Model } from "mongoose";
import { Schema } from "mongoose";
import type { User } from "../../libs/Types/user.type.js";

export const createUserModel = (connection: Connection): Model<User & Document> => {
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

  return connection.model<User & Document>("users", userSchema);
};
