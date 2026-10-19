import { config as loadEnv } from "dotenv";
import { fileURLToPath } from "node:url";

loadEnv({ path: fileURLToPath(new URL("../.env", import.meta.url)) });

const {
  MONGO_URI,
  CONTENT_SERVICE_PORT,
  USER_SERVICE_RPC_PORT,
  USER_SERVICE_RPC_HOST,
} = process.env;

export const config = {
  db: {
    mongoUri: MONGO_URI,
  },
  server: {
    port: CONTENT_SERVICE_PORT,
  },
  rpc: {
    port: Number(USER_SERVICE_RPC_PORT) ?? "4000",
    host: USER_SERVICE_RPC_HOST ?? "localhost",
  },
};
