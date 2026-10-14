import { config } from "dotenv";
import { connect, disconnect, set } from "mongoose";
import "dotenv/config";


export const initDB = async (): Promise<void> => {
    set("strictQuery", true);
    await connect(process.env.MONGO_URI);
    console.log("[MongoDB] connected successfully");
};

export const disconnectDB = async (): Promise<void> => {
    await disconnect();
    console.log("[MongoDB] disconnected");
};
