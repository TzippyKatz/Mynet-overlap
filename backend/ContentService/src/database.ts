import { createConnection } from "mongoose";
import { initDB } from "../../../libs/src/config/connection.js";
import { config } from "./config.js";

export const contentServiceConnection = createConnection();

export const connectContentServiceDatabase = async (): Promise<void> => {
  await initDB(contentServiceConnection, config.db.mongoUri);
};
