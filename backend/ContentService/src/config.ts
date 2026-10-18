import { config as loadEnv } from "dotenv";
import { fileURLToPath } from "node:url";

loadEnv({ path: fileURLToPath(new URL("../.env", import.meta.url)) });

const { MONGO_URI, CONTENT_SERVICE_PORT, USER_SERVICE_RPC_PORT } = process.env;

export const config = {
  db: {
    mongoUri: MONGO_URI,
  },
  server: {
    port: CONTENT_SERVICE_PORT,
  },
  rpc: {
    port: USER_SERVICE_RPC_PORT,
  },
};
