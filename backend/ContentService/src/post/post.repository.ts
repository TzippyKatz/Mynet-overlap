import type {
  CreatePostPayload,
  UpdatePostPayload,
} from "../../../../libs/src/types/content/postPayload.type.js";
import type { Post } from "@libs/Types/content/post.type.js";
import { postModel } from "../models/post.model.js";

export const postRepository = {
  create: async (post: CreatePostPayload): Promise<Post> =>
    await postModel.create(post),

  getAll: async (): Promise<Post[]> =>
    await postModel.find().sort({ createdAt: -1 }),

  getById: async (id: string): Promise<Post | null> =>
    await postModel.findById(id),

  update: async (id: string, post: UpdatePostPayload): Promise<Post | null> =>
    await postModel.findByIdAndUpdate(
      id,
      { $set: post },
      { new: true, runValidators: true },
    ),

  delete: async (id: string): Promise<Post | null> =>
    await postModel.findByIdAndDelete(id),
};
