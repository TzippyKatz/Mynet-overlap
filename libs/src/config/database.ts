import { Connection } from "mongoose";
import { initDB } from "./connection.js";

export const connectServiceDatabase = (
  connection: Pick<Connection, "openUri">,
  mongoUri: string | undefined,
) => {
  const connect = async (): Promise<void> => {
    await initDB(connection, mongoUri);
  };

  return { connect };
};
