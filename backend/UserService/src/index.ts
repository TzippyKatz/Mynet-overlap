import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import { connectUserServiceDatabase } from "./database.js";
import { config } from "./config.js";
import userRouter from "./user/user.router.js";
import { startServer } from "@libs/servers/startServer.js";
import { rpcServer } from "./rpc.server.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173/",
  }),
);

app.use(express.json());

const isDuplicateKeyError = (error: unknown): error is { code: 11000 } =>
  typeof error === "object" &&
  error !== null &&
  "code" in error &&
  error.code === 11000;

app.use("/users", userRouter);

app.use(
  (error: unknown, _req: Request, res: Response, next: NextFunction): void => {
    if (isDuplicateKeyError(error)) {
      res.status(409).json({ message: "Username already exists" });
      return;
    }

    next(error);
  },
);

startServer(
  app,
  config.server.port,
  connectUserServiceDatabase,
  "UserService",
).catch(console.error);

rpcServer.http().listen(config.rpc.port, () => {
  console.log(`UserService RPC is running on port ${config.rpc.port}`);
});
