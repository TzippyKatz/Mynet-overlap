import type { Request, Response, NextFunction } from "express";
import type { createPostManager } from "./post.manager.js";

export const createPostController = (
  postManager: ReturnType<typeof createPostManager>,
) => {
  const createPost = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { userId, postName, text, media } = req.body;

    return postManager
      .createPost(userId, postName, text, media)
      .then((post) => {
        res.status(201).json(post);
      })
      .catch(next);
  };

  const getAllPosts = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    return postManager
      .getAllPosts()
      .then((posts) => {
        res.status(200).json(posts);
      })
      .catch(next);
  };

  const getPostById = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { id } = req.params;

    if (typeof id !== "string") {
      res.status(400).json({ message: "Invalid post ID" });
      return Promise.resolve();
    }

    return postManager
      .getPostById(id)
      .then((post) => {
        res.status(200).json(post);
      })
      .catch(next);
  };

  const updatePost = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { id } = req.params;
    const { postName, text, media } = req.body;

    if (typeof id !== "string") {
      res.status(400).json({ message: "Invalid post ID" });
      return Promise.resolve();
    }

    return postManager
      .updatePost(id, postName, text, media)
      .then((post) => {
        res.status(200).json(post);
      })
      .catch(next);
  };

  const deletePost = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { id } = req.params;

    if (typeof id !== "string") {
      res.status(400).json({ message: "Invalid post ID" });
      return Promise.resolve();
    }
    
    return postManager
      .deletePost(id)
      .then((post) => {
        res.status(200).json(post);
      })
      .catch(next);
  };

  return {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
  };
};
