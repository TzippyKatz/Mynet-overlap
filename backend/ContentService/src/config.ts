import { config as loadEnv } from "dotenv";
import { fileURLToPath } from "node:url";
import { serviceInfo } from "@libs/servers/serviceInfo.js";

loadEnv({ path: fileURLToPath(new URL("../.env", import.meta.url)) });

const { MONGO_URI, USER_SERVICE_RPC_HOST } = process.env;

export const config = {
  db: {
    mongoUri: MONGO_URI,
  },
  server: {
    port: serviceInfo.content.local.port,
  },
  rpc: {
    port: serviceInfo.user.local.rpcPort,
    host: USER_SERVICE_RPC_HOST ?? "localhost",
  },
};
