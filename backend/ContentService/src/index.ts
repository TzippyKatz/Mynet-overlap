import express from "express";
import { connectContentServiceDatabase } from "./database.js";
import postRouter from "./post/post.router.js";
import { config } from "./config.js";

const app = express();

app.use(express.json());

const startServer = async (): Promise<void> => {
  await connectContentServiceDatabase();

  app.use("/posts", postRouter);

  config.server.port
    ? app.listen(config.server.port, () => {
        console.log(`ContentService is running on port ${config.server.port}`);
      })
    : console.error(
        "CONTENT_SERVICE_PORT is not defined in the environment variables.",
      );
};

startServer().catch(console.error);
