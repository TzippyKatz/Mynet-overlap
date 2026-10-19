import { connectServiceDatabase } from "../../../libs/src/config/database.js";
import { config } from "./config.js";

const contentServiceDatabase = connectServiceDatabase(config.db.mongoUri);

export const contentServiceConnection = contentServiceDatabase.serviceConnection;
export const connectContentServiceDatabase = contentServiceDatabase.connect;
