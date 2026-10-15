import { connect } from "mongoose";
import { config } from "../../UserService/src/config.js";

export const initDB = async (): Promise<void> => {
  if (!config.db.mongoUri) {
    throw new Error("MONGO_URI environment variable is required");
  }
  await connect(config.db.mongoUri);
  console.log("[MongoDB] connected successfully");
};
