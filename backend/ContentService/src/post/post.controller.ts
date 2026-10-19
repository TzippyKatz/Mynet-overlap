import type { Request, Response, NextFunction } from "express";
import { postManager } from "./post.manager.js";
import isNil from "lodash/isNil.js";

export const postController = {
  create: async (req: Request, res: Response): Promise<void> => {
    res.json(await postManager.create(req.body));
  },

  getAll: async (req: Request, res: Response): Promise<void> => {
    res.json(await postManager.getAll());
  },

  getById: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    if (typeof id !== "string") {
      res.status(400).json({ message: "Invalid post ID" });
      return;
    }

    const post = await postManager.getById(id);

    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    res.status(200).json(post);
  },

  update: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    if (typeof id !== "string") {
      res.status(400).json({ message: "Invalid post ID" });
      return;
    }

    const { postName, text, media } = req.body;

    const post = await postManager.update(id, {
      ...(!isNil(postName) && { postName }),
      ...(!isNil(text) && { text }),
      ...(!isNil(media) && { media }),
    });

    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    res.status(200).json(post);
  },

  delete: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    const { id } = req.params;

    if (typeof id !== "string") {
      res.status(400).json({ message: "Invalid post ID" });
      return;
    }

    const post = await postManager.delete(id);

    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    res.status(200).json(post);
  },
};
