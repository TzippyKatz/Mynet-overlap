import { Router } from "express";
import postRouter from "./post/post.router.js";

const appRouter: Router = Router();

appRouter.use(`/api/content-service/posts`, postRouter);

export default appRouter;
