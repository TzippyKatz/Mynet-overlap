import { createConnection } from "mongoose";
import { initDB } from "../../../libs/src/config/connection.js";
import { config } from "./config.js";

export const userServiceConnection = createConnection();

export const connectUserServiceDatabase = async (): Promise<void> => {
  await initDB(userServiceConnection, config.db.mongoUri);
};
