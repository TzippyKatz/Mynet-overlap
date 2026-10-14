import express from "express";
import { initDB } from "../../libs/config/connection.js";
import { createUserModel } from "./models/user.model.js";
import { createUserRepository } from "./user/user.repository.js";
import { createUserManager } from "./user/user.manager.js";
import { createUserController } from "./user/user.controller.js";
import { createUserRouter } from "./user/user.router.js";
import "dotenv/config";

const app = express();
const PORT = process.env.USER_SERVICE_PORT;

app.use(express.json());

const startServer = async (): Promise<void> => {
  const connection = await initDB();

  const userModel = createUserModel(connection);
  const userRepository = createUserRepository(userModel);
  const userManager = createUserManager(userRepository);
  const userController = createUserController(userManager);
  const userRouter = createUserRouter(userController);

  app.use("/users", userRouter);

  PORT
    ? app.listen(PORT, () => {
        console.log(`UserService is running on port ${PORT}`);
      })
    : console.error(
        "USER_SERVIE_PORT is not defined in the environment variables.",
      );
};

startServer().catch(console.error);
