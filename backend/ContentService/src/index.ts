import express from "express";
import cors from "cors";
import { connectContentServiceDatabase } from "./database.js";
import { startServer } from "@libs//servers/startServer.js";
import { config } from "./config.js";
import appRouter from "./router.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173/",
  }),
);
app.use(express.json());
app.use(appRouter);

startServer(
  app,
  config.server.port,
  connectContentServiceDatabase,
  "ContentService",
).catch(console.error);
