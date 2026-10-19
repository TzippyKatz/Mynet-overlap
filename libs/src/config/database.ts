import { createConnection } from "mongoose";
import { initDB } from "@libs/config/connection.js";

export const connectServiceDatabase = (mongoUri: string | undefined) => {
  const serviceConnection = createConnection();
  const connect = async (): Promise<void> => {
    await initDB(serviceConnection, mongoUri);
  };
  return { serviceConnection, connect };
};
