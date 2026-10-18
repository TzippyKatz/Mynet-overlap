import { Router } from "express";
import type { createPostController } from "./post.controller.js";
import {
  validateCreatePost,
  validatePostId,
  validateUpdatePost,
} from "./post.validator.js";

export const createPostRouter = (
  postController: ReturnType<typeof createPostController>,
) => {
  const postRouter = Router();

  postRouter.post("/", validateCreatePost, postController.createPost);

  postRouter.get("/", postController.getAllPosts);

  postRouter.get("/:id", validatePostId, postController.getPostById);

  postRouter.put(
    "/:id",
    validatePostId,
    validateUpdatePost,
    postController.updatePost,
  );

  postRouter.delete("/:id", validatePostId, postController.deletePost);

  return postRouter;
};
