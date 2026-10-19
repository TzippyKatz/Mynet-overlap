import { connectServiceDatabase } from "../../../libs/src/config/database.js";
import { config } from "./config.js";

const userServiceDatabase = connectServiceDatabase(config.db.mongoUri);

export const userServiceConnection = userServiceDatabase.serviceConnection;
export const connectUserServiceDatabase = userServiceDatabase.connect;
