import { Router } from "express";
import postRouter from "./post/post.router.js";
import { serviceInfo } from "@libs/servers/serviceInfo.js";

const appRouter: Router = Router();

appRouter.use(`${serviceInfo.content.api}/posts`, postRouter);

export default appRouter;
