import { Router } from "express";
import userRouter from "./user/user.router.js";
import authRouter from "./auth/auth.router.js";
import { errorMiddleware } from "./middleware/user.middleware.js";

const appRouter: Router = Router();

appRouter.use(`/api/user-service/users`, userRouter);
appRouter.use("/api/user-service/auth", authRouter);
appRouter.use(errorMiddleware);

export default appRouter;
