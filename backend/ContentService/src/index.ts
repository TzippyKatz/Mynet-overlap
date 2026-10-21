import express from "express";
import { startServer } from "@libs//servers/startServer.js";
import { config } from "./config.js";
import appRouter from "./router.js";
import { connectContentServiceDatabase } from "./database.js";

const app = express();

app.use(express.json());
app.use(appRouter);

startServer(
  app,
  config.server.port,
  connectContentServiceDatabase,
  "ContentService",
).catch(console.error);
