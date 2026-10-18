import { createPostRepository } from "./post.repository.js";
import type { UserRPCService } from "../../../../libs/src/Types/rpc/rpc.type.js";

export const createPostManager = (
  postRepository: ReturnType<typeof createPostRepository>,
  userRPCService: UserRPCService,
) => {
  const createPost = async (
    userId: string,
    postName: string,
    text: string,
    media?: string,
  ) => {
    const user = await userRPCService.getUserById(userId);

    if (!user) {
      throw new Error(`User with id ${userId} does not exist`);
    }

    return postRepository.createPost({
      userId,
      postName,
      text,
      ...(media !== undefined ? { media } : {}),
    });
  };

  const getAllPosts = async () => {
    return postRepository.getAllPosts();
  };

  const getPostById = async (id: string) => {
    return postRepository.getPostById(id);
  };

  const updatePost = async (
    id: string,
    postName?: string,
    text?: string,
    media?: string,
  ) => {
    return postRepository.updatePost(id, {
      ...(postName !== undefined ? { postName } : {}),
      ...(text !== undefined ? { text } : {}),
      ...(media !== undefined ? { media } : {}),
    });
  };

  const deletePost = async (id: string) => {
    return postRepository.deletePost(id);
  };

  return {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
  };
};
