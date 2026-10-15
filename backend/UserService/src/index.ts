import express from "express";
import { connectUserServiceDatabase } from "./database.js";
import { userModel } from "./models/user.model.js";
import { createUserRepository } from "./user/user.repository.js";
import { createUserManager } from "./user/user.manager.js";
import { createUserController } from "./user/user.controller.js";
import { createUserRouter } from "./user/user.router.js";
import { config } from "./config.js";

const app = express();

app.use(express.json());

const startServer = async (): Promise<void> => {
  await connectUserServiceDatabase();

  const userRepository = createUserRepository(userModel);
  const userManager = createUserManager(userRepository);
  const userController = createUserController(userManager);
  const userRouter = createUserRouter(userController);

  app.use("/users", userRouter);

  config.server.port
    ? app.listen(config.server.port, () => {
        console.log(`UserService is running on port ${config.server.port}`);
      })
    : console.error(
        "USER_SERVIE_PORT is not defined in the environment variables.",
      );
};

startServer().catch(console.error);
