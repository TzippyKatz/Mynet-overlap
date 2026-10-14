import { type Document, type Model, model, Schema } from "mongoose";

export type User = {
    username: string,
    displayedName: string
};

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