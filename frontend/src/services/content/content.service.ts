import type {
  UpdatePostPayload,
  CreatePostPayload,
} from "@libs/types/content/postPayload.type";
import type { Post } from "@libs/types/content/post.type";
import { contentAxios } from "../axios.js";

const api = "api/content-service";

export const contentService = {
  createPost: async (payload: CreatePostPayload): Promise<Post> => {
    const response = await contentAxios.post<Post>(`${api}/posts`, payload);

    return response.data;
  },

  getPosts: async (): Promise<Post[]> => {
    const response = await contentAxios.get<Post[]>(`${api}/posts`);

    return response.data;
  },

  getPostById: async (id: string): Promise<Post> => {
    const response = await contentAxios.get<Post>(`${api}/posts/${id}`);

    return response.data;
  },

  updatePost: async (id: string, payload: UpdatePostPayload): Promise<Post> => {
    const response = await contentAxios.put<Post>(
      `${api}/posts/${id}`,
      payload,
    );

    return response.data;
  },

  deletePost: async (id: string): Promise<Post> => {
    const response = await contentAxios.delete<Post>(`${api}/posts/${id}`);

    return response.data;
  },
};
