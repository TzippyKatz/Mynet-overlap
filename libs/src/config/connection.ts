import type { Connection } from "mongoose";

export const initDB = async (
  connection: Pick<Connection, "openUri">,
  mongoUri: string | undefined,
): Promise<void> => {
  if (!mongoUri) {
    throw new Error("MONGO_URI environment variable is required");
  }
  await connection.openUri(mongoUri);
  console.log("[MongoDB] connected successfully");
};
