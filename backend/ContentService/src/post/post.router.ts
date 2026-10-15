import { Router } from "express";
import type { createPostController } from "./post.controller.js";
import {
  validateCreatePost,
  validateUpdatePost,
} from "./post.validator.js";

export const createPostRouter = (
  postController: ReturnType<typeof createPostController>,
) => {
  const postRouter = Router();

  postRouter.post("/", validateCreatePost, postController.createPost);

  postRouter.get("/", postController.getAllPosts);

  postRouter.get("/:id", postController.getPostById);

  postRouter.put(
    "/:id",
    validateUpdatePost,
    postController.updatePost,
  );

  postRouter.delete("/:id", postController.deletePost);

  return postRouter;
};
