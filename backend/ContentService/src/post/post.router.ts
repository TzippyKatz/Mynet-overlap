import { Router } from "express";
import { postController } from "./post.controller.js";
import {
  canCreatePost,
  canDeletePost,
  canGetAllPosts,
  canGetPostById,
  canUpdatePost,
} from "./post.validator.js";
import { validateRequest } from "@libs/validation/middleware.js";

const postRouter = Router();

postRouter.post("/", validateRequest(canCreatePost), postController.create);

postRouter.get("/", validateRequest(canGetAllPosts), postController.getAll);

postRouter.get("/:id", validateRequest(canGetPostById), postController.getById);

postRouter.put(
  "/:id",
  validateRequest(canUpdatePost),
  postController.update,
);

postRouter.delete("/:id", validateRequest(canDeletePost), postController.delete);

export default postRouter;
