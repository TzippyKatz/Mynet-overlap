import express, { type NextFunction, type Request, type Response } from "express";
import { connectUserServiceDatabase } from "./database.js";
import { userModel } from "./models/user.model.js";
import { createUserRepository } from "./user/user.repository.js";
import { createUserManager } from "./user/user.manager.js";
import { createUserController } from "./user/user.controller.js";
import { createUserRouter } from "./user/user.router.js";
import { config } from "./config.js";
import { createUserRPCServer } from "./user/user.rpc.server.js";

const app = express();

app.use(express.json());

const isDuplicateKeyError = (
  error: unknown,
): error is { code: 11000 } =>
  typeof error === "object" &&
  error !== null &&
  "code" in error &&
  error.code === 11000;

const startServer = async (): Promise<void> => {
  await connectUserServiceDatabase();

  const userRepository = createUserRepository(userModel);
  const userManager = createUserManager(userRepository);
  const userController = createUserController(userManager);
  const userRouter = createUserRouter(userController);

  const rpcServer = createUserRPCServer(userManager);

  app.use("/users", userRouter);
  app.use(
    (
      error: unknown,
      _req: Request,
      res: Response,
      next: NextFunction,
    ): void => {
      if (isDuplicateKeyError(error)) {
        res.status(409).json({ message: "Username already exists" });
        return;
      }

      next(error);
    },
  );

  config.server.port
    ? app.listen(config.server.port, () => {
        console.log(`UserService is running on port ${config.server.port}`);
      })
    : console.error(
        "USER_SERVIE_PORT is not defined in the environment variables.",
      );

  rpcServer.http().listen(config.rpc.port, () => {
    console.log(`UserService RPC is running on port ${config.rpc.port}`);
  });
};

startServer().catch(console.error);
