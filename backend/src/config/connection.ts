import { connect, disconnect, set } from "mongoose";
import { config } from "./config.js";

export const initDB = async (): Promise<void> => {
    set("strictQuery", true);
    await connect(config.mongoUri);
    console.log("[MongoDB] connected successfully");
};

export const disconnectDB = async (): Promise<void> => {
    await disconnect();
    console.log("[MongoDB] disconnected");
};
