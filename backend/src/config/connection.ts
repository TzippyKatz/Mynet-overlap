import { config } from "dotenv";
import { connect, disconnect, set } from "mongoose";

import "dotenv/config";

const MONGOURI = process.env.MONGOURI ?? "mongodb://localhost:27017/OverlapDB";

export const initDB = async (): Promise<void> => {
    set("strictQuery", true);
    console.log("MONGO_URI:", process.env.MONGO_URI);
    await connect(process.env.MONGO_URI);
    console.log("[MongoDB] connected successfully");
};

export const disconnectDB = async (): Promise<void> => {
    await disconnect();
    console.log("[MongoDB] disconnected");
};
