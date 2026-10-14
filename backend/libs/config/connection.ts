import mongoose, { connect, disconnect, set } from "mongoose";
import "dotenv/config";

const MONGO_URI = process.env.MONGO_URI;

export const initDB = async () => {
  set("strictQuery", true);
  const connection = MONGO_URI
    ? await connect(MONGO_URI)
    : (() => {
        throw new Error(
          "MONGO_URI is not defined in the environment variables",
        );
      })();
    console.log("[MongoDB] connected successfully");
  return connection.connection;
};

export const disconnectDB = async (): Promise<void> => {
  await disconnect();
  console.log("[MongoDB] disconnected");
};
