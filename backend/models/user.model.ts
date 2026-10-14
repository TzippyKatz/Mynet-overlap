import { type Document, type Model, model, Schema } from "mongoose";
import type { User } from "../libs/Types/user.type.js";

export const createUserModel = (): Model<User & Document> => {
    const userSchema = new Schema(
        {
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

        }
    );

    return model<User & Document>("users", userSchema);
};