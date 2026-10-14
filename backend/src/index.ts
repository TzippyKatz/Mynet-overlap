import { initDB, disconnectDB } from "./config/connection.js";
import { createPostModel } from "./models/post.model.js";
import { createUserModel } from "./models/user.model.js";
import mongoose from "mongoose";

const start = async (): Promise<void> => {
    await initDB();

    console.log("Database:", mongoose.connection.name);

    const PostModel = createPostModel();
    const UserModel = createUserModel();

    await disconnectDB();
};

start();