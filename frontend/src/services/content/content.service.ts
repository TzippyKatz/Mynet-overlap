import type {
  UpdatePostPayload,
  CreatePostPayload,
} from "@libs/types/content/postPayload.type";
import type { Post } from "@libs/types/content/post.type";
import { contentAxios } from "../axios.js";

export const createPost = async (payload: CreatePostPayload): Promise<Post> => {
  const response = await contentAxios.post<Post>("/posts", payload);

  return response.data;
};

export const getPosts = async (): Promise<Post[]> => {
  const response = await contentAxios.get<Post[]>("/posts");

  return response.data;
};

export const getPostById = async (id: string): Promise<Post> => {
  const response = await contentAxios.get<Post>(`/posts/${id}`);

  return response.data;
};

export const updatePost = async (
  id: string,
  payload: UpdatePostPayload,
): Promise<Post> => {
  const response = await contentAxios.put<Post>(`/posts/${id}`, payload);

  return response.data;
};

export const deletePost = async (id: string): Promise<Post> => {
  const response = await contentAxios.delete<Post>(`/posts/${id}`);

  return response.data;
};
