import express from "express";
import { connectContentServiceDatabase } from "./database.js";
import { postModel } from "./models/post.model.js";
import { createPostRepository } from "./post/post.repository.js";
import { createPostManager } from "./post/post.manager.js";
import { createPostController } from "./post/post.controller.js";
import { createPostRouter } from "./post/post.router.js";
import { config } from "./config.js";
import { createUserRPCService } from "./post/user.rpc.client.js";

const app = express();

app.use(express.json());

const startServer = async (): Promise<void> => {
  await connectContentServiceDatabase();

  const postRepository = createPostRepository(postModel);
  const userRPCService = createUserRPCService();
  const postManager = createPostManager(postRepository, userRPCService);
  const postController = createPostController(postManager);
  const postRouter = createPostRouter(postController);

  app.use("/posts", postRouter);

  config.server.port
    ? app.listen(config.server.port, () => {
        console.log(
          `ContentService is running on port ${config.server.port}`,
        );
      })
    : console.error(
        "CONTENT_SERVICE_PORT is not defined in the environment variables.",
      );
};

startServer().catch(console.error);
