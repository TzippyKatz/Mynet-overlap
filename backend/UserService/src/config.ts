import { config as loadEnv } from "dotenv";
import { fileURLToPath } from "node:url";

loadEnv({ path: fileURLToPath(new URL("../.env", import.meta.url)) });

const { MONGO_URI, USER_SERVICE_PORT } = process.env;

export const config = {
  db: {
    mongoUri: MONGO_URI,
  },
  server: {
    port: USER_SERVICE_PORT,
  },
};
