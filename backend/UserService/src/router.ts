import { Router } from "express";
import userRouter from "./user/user.router.js";
import authRouter from "./auth/auth.router.js";
import { errorMiddleware } from "./middleware/user.middleware.js";
import { serviceInfo } from "@libs/servers/serviceInfo.js";

const appRouter: Router = Router();

appRouter.use(`${serviceInfo.user.api}/users`, userRouter);
appRouter.use(`${serviceInfo.user.api}/auth`, authRouter);

appRouter.use(errorMiddleware);

export default appRouter;
