import type { Document, Model } from "mongoose";
import type { User } from "../../../../libs/src/Types/user/user.type.js";

export const createUserRepository = (userModel: Model<User & Document>) => {
    const createUser = async (username: string, displayedName: string) => {
        return userModel.create({
            username,
            displayedName,
        });
    };

    const getAllUsers = async () => {
        return userModel.find();
    };

    const getUserById = async (id: string) => {
        return userModel.findById(id);
    };

    return {
        createUser,
        getAllUsers,
        getUserById,
    };
};
