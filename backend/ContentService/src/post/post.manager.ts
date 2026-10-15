import { createPostRepository } from "./post.repository.js";

export const createPostManager = (
  postRepository: ReturnType<typeof createPostRepository>,
) => {
  const createPost = async (
    userId: string,
    postName: string,
    text: string,
    media?: string,
  ) => {
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

  const getPostById = async (id: string ) => {
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
