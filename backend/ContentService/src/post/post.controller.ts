import type { Request, Response } from "express";
import { postManager } from "./post.manager.js";
import type { UpdatePostPayload } from "../../../../libs/src/types/content/postPayload.type.js";

export const postController = {
  create: async (req: Request, res: Response): Promise<void> => {
    res.json(await postManager.create(req.body));
  },

  getAll: async (req: Request, res: Response): Promise<void> => {
    res.json(await postManager.getAll());
  },

  getById: async (
    req: Request<{ id: string }>,
    res: Response,
  ): Promise<void> => {
    res.json(await postManager.getById(req.params.id));
  },

  update: async (
    req: Request<{ id: string }, { body: UpdatePostPayload }>,
    res: Response,
  ): Promise<void> => {
    res.json(await postManager.update(req.params.id, req.body));
  },

  delete: async (
    req: Request<{ id: string }>,
    res: Response,
  ): Promise<void> => {
    res.json(await postManager.delete(req.params.id));
  },
};
