import express from "express";
import { config } from "./config.js";
import appRouter from "./router.js";
import { startServer } from "@libs/servers/startServer.js";
import { rpcServer } from "./rpc.server.js";
import { connectUserServiceDatabase } from "./database.js";

const app = express();

app.use(express.json());

app.use(appRouter);

startServer(
  app,
  config.server.port,
  connectUserServiceDatabase,
  "UserService",
).catch(console.error);

rpcServer.http().listen(config.rpc.port, () => {
  console.log(`UserService RPC is running on port ${config.rpc.port}`);
});
