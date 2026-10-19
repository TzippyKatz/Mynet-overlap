import type { Document } from "mongoose";
import type {
  CreatePostPayload,
  UpdatePostPayload,
} from "../../../../libs/src/types/content/postPayload.type.js";
import type { Post } from "../../../../libs/src/Types/content/post.type.js";
import { postModel } from "../models/post.model.js";

type PostDocument = Post & Document;

export const postRepository = {
  create: async (post: CreatePostPayload): Promise<PostDocument> =>
    await postModel.create(post),

  getAll: async (): Promise<PostDocument[]> =>
    await postModel.find().sort({ createdAt: -1 }),

  getById: async (id: string): Promise<PostDocument | null> =>
    await postModel.findById(id),

  update: async (
    id: string,
    post: UpdatePostPayload,
  ): Promise<PostDocument | null> =>
    await postModel.findByIdAndUpdate(
      id,
      { $set: post },
      { new: true, runValidators: true },
    ),

  delete: async (id: string): Promise<PostDocument | null> =>
    await postModel.findByIdAndDelete(id),
};
