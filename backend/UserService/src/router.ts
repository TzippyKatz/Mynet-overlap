import { Router } from "express";
import userRouter from "./user/user.router.js";

const appRouter: Router = Router();

appRouter.use(`/api/user-service/users`, userRouter);

export default appRouter;
