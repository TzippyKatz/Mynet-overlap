import type {
  UpdatePostPayload,
  CreatePostPayload,
} from " ../../../backend/ContentService/src/post/post.type.js";
import type { Post } from "@libs/Types/content/post.type.js";
import { contentAxios } from "../axios.js";

export const contentService = {
  createPost: async (payload: CreatePostPayload): Promise<Post> => {
    const response = await contentAxios.post("/posts", payload);

    return response.data;
  },

  getPosts: async (): Promise<Post[]> => {
    const response = await contentAxios.get("/posts");

    return response.data;
  },

  getPostById: async (id: string): Promise<Post | null> => {
    const response = await contentAxios.get(`/posts/${id}`);

    return response.data;
  },

  updatePost: async (
    id: string,
    payload: UpdatePostPayload,
  ): Promise<Post | null> => {
    const response = await contentAxios.put(`/posts/${id}`, payload);

    return response.data;
  },

  deletePost: async (id: string): Promise<Post | null> => {
    const response = await contentAxios.delete(`/posts/${id}`);

    return response.data;
  },
};
