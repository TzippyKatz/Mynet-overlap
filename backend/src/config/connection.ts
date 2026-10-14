import { config } from "dotenv";
import { connect, disconnect, set } from "mongoose";

config();

const MONGOURI = process.env.MONGOURI ?? "mongodb://localhost:27017/OverlapDB";

export const initDB = async (): Promise<void> => {
    set("strictQuery", true);
    await connect(MONGOURI);
    console.log("[MongoDB] connected successfully");
};

export const disconnectDB = async (): Promise<void> => {
    await disconnect();
    console.log("[MongoDB] disconnected");
};
