import { connect, disconnect, set } from "mongoose";
import { config } from "../config.js";

export const initDB = async (): Promise<void> => {
  set("strictQuery", true);
  if (!config.db.mongoUri) {
    throw new Error("MONGO_URI environment variable is required");
  }
  await connect(config.db.mongoUri);
  console.log("[MongoDB] connected successfully");
};
