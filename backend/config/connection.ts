import { connect, disconnect, set } from "mongoose";
import "dotenv/config";

const MONGO_URI = process.env.MONGO_URI;

export const initDB = async (): Promise<void> => {
  set("strictQuery", true);
  MONGO_URI
    ? await connect(MONGO_URI)
    : console.error("MONGO_URI is not defined in the environment variables");
  console.log("[MongoDB] connected successfully");
};

export const disconnectDB = async (): Promise<void> => {
  await disconnect();
  console.log("[MongoDB] disconnected");
};
